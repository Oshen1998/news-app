// import React from "react";
// import axios from "axios";
// import NewsCard from "./newsCard";

// class Categories extends React.Component {
//   state = {
//     headlinesNews: [],
//     isLoading: true,
//     errors: null,
//     urlParams: this.props.match.params,
//   };

//   getUsers(catName) {
//     // I have used axios instead of Fetch
//     axios
//       .get("https://newsapi.org/v2/everything", {
//         params: { q: catName, apiKey: "31301f4162c74e08b0708538030e99eb" },
//       })
//       .then((response) => {
//         const headlines = response.data.articles.map((news) => {
//           return {
//             title: news.title,
//             description: `${news.description}`,
//             author: `${news.author}`,
//             newsurl: `${news.url}`,
//             url: `${news.urlToImage}`,
//             content: `${news.content}`,
//           };
//         });
//         const formattedHeadlines = headlines.filter(
//           (news) => news.content && news.description && news.newsurl
//         );
//         console.log(headlines);
//         this.setState({
//           headlinesNews: formattedHeadlines,
//           isLoading: false,
//         });
//       })
//       .catch((error) => this.setState({ error, isLoading: false }));
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.match.params !== this.props.match.params) {
//       const currentName = nextProps.match.params;
//       this.getUsers(currentName);
//       this.setState({
//         urlParams: currentName,
//       });
//     }
//   }

//   componentDidMount() {
//     const { name } = this.props.match.params;
//     this.getUsers(name);
//   }

//   render() {
//     const { isLoading, headlinesNews } = this.state;
//     return (
//       <React.Fragment>
//         <div className="selectedCategory">
//           <h2>{this.state.urlParams.name}</h2>
//         </div>
//         <div>
//           {!isLoading ? (
//             headlinesNews.map((news) => {
//               const { title, description, author, newsurl, url, content } =
//                 news;
//               return (
//                 <div
//                   className="collumn"
//                   style={{
//                     marginLeft: 30,
//                   }}
//                 >
//                   <div
//                     className="head"
//                     style={{
//                       minHeight: 600,
//                       overflow: "hidden",
//                     }}
//                   >
//                     <span className="headline hl3">{title}</span>
//                     <p>
//                       <span className="headline hl4">{author}</span>
//                     </p>
//                     <figure className="figure">
//                       <img className="media" src={url} alt="" />
//                     </figure>
//                     <div style={{ padding: 10 }}>
//                       <p style={{ overflow: "hidden", maxHeight: 150 }}>
//                         {/* {description} */}
//                         <br />
//                         {content}
//                       </p>
//                     </div>
//                     <div>
//                       <button
//                         style={{
//                           backgroundColor: "black",
//                           color: "white",
//                           padding: 10,
//                           borderRadius: 10,
//                           borderWidth: 0,
//                           margin: 10,
//                         }}
//                         onClick={`location.href="${newsurl}"`}
//                       >
//                         Read More
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default Categories;
