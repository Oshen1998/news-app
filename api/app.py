from flask import Flask, request
from transformers import BartForConditionalGeneration, BartTokenizer

# Import Module
import json

# ---------------------------

# from flask_cors import CORS
import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np
import networkx as nx
import nltk

nltk.download("punkt")
nltk.download("stopwords")

app = Flask(__name__)
model_name = "facebook/bart-large-cnn"
tokenizer = BartTokenizer.from_pretrained(model_name)
model = BartForConditionalGeneration.from_pretrained(model_name)


def summarize_article(article):
    # Load BART model and tokenizer

    # Tokenize and encode the article
    inputs = tokenizer.encode(
        article, return_tensors="pt", max_length=1024, truncation=True
    )

    # Generate summary
    summary_ids = model.generate(
        inputs, num_beams=4, max_length=150, early_stopping=True
    )
    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)

    return json.dumps({"summary": summary})


# Text rank news summarizer
def news_summarizer(news_text):
    # Step 1: Document Segmentation
    segments = sent_tokenize(news_text)

    # Step 2-5: (Repeat for each segment)
    for segment in segments:
        # Tokenization and Sentence Segmentation
        sentences = sent_tokenize(segment)
        tokenized_sentences = [word_tokenize(sentence) for sentence in sentences]

        # Text Preprocessing
        stop_words = set(stopwords.words("english"))
        filtered_sentences = [
            [
                word.lower()
                for word in sentence
                if word.isalnum() and word.lower() not in stop_words
            ]
            for sentence in tokenized_sentences
        ]

        # Text Representation (TF-IDF)
        vectorizer = TfidfVectorizer()
        tfidf_matrix = vectorizer.fit_transform(
            [" ".join(sentence) for sentence in filtered_sentences]
        )

        # Similarity Matrix
        sentence_similarity_matrix = np.dot(tfidf_matrix, tfidf_matrix.T)

        # Building the Graph
        G = nx.from_numpy_array(sentence_similarity_matrix)

        # PageRank Algorithm
        scores = nx.pagerank(G)

        # Sentence Selection
        num_sentences_to_extract = 8  # Adjust based on desired summary length
        ranked_sentences = sorted(
            ((scores[i], sentence) for i, sentence in enumerate(sentences)),
            reverse=True,
        )

        # Output the Summary
        summary_sentences = [
            sentence for _, sentence in ranked_sentences[:num_sentences_to_extract]
        ]
        summary = " ".join(summary_sentences)

        return json.dumps({"summary": summary})


@app.route("/bart", methods=["GET"])
def index():
    # content = request.form["content"]

    text = "Butter chicken – one of India’s best-known dishes globally – is delicious and apparently also contentious, with two Indian restaurant chains doing battle in court over claims to its origins.The lawsuit – which has become a hot topic in India – was brought by the family behind Moti Mahal, a famed Delhi restaurant brand that has counted late US President Richard Nixon and India’s first Prime Minister Jawaharlal Nehru among its guests. It claims restaurant founder, Kundan Lal Gujral, created the curry in the 1930s when the restaurant first opened in Peshawar before it moved to Delhi. In a 2,752-page court filing it has sued rival chain Daryaganj, accusing it of falsely claiming to have invented the dish as well as dal makhani, a popular lentil dish that is also laden with butter and cream. The Gujral family is seeking $240,000 in damages, also alleging that Daryaganj has copied the layout of Moti Mahal’s website and “the look and feel” of its restaurants. You cannot take away somebody’s legacy … The dish was invented when our grandfather was in Pakistan,” said Monish Gujral, managing director at Moti Mahal."

    # summary = summarize_article(text)
    summary = news_summarizer(text)
    return summary


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
