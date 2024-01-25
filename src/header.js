// import React from "react";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
// import Headlines from "./headlines";
// import Categories from "./categories";
// import Footer from "./Footer/Footer";

// class Header extends React.Component {
//   state = {
//     onSelectItem: {
//       key: "",
//       isSelected: false,
//     },
//   };

//   changeSelection = (key, bool) => {
//     switch (key) {
//       case "HOME":
//         this.setState({
//           onSelectItem: {
//             key: "HOME",
//             isSelected: true,
//           },
//         });
//         break;
//       case "BIT_COIN":
//         this.setState({
//           onSelectItem: {
//             key: "BIT_COIN",
//             isSelected: true,
//           },
//         });
//         break;
//       case "APPLE":
//         this.setState({
//           onSelectItem: {
//             key: "APPLE",
//             isSelected: true,
//           },
//         });
//         break;

//       default:
//         break;
//     }
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <div className="head">
//           <div className="headerobjectswrapper">
//             <header>News Paper</header>
//           </div>
//           <div class="subhead">Headlines</div>
//         </div>

//         <div className="cat_list">
//           <Router>
//             <div className="router_wrap">
//               <ul
//                 className="navList"
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <li
//                   style={{
//                     borderColor: "black",
//                     borderWidth: 1,
//                     borderRadius: 15,
//                     padding: 10,
//                     outlineStyle: "solid",
//                     background:
//                       this.state.onSelectItem.isSelected &&
//                       this.state.onSelectItem.key === "HOME"
//                         ? "black"
//                         : "white",
//                   }}
//                   onClick={() => this.changeSelection("HOME", true)}
//                 >
//                   <Link
//                     style={{
//                       color:
//                         this.state.onSelectItem.isSelected &&
//                         this.state.onSelectItem.key === "HOME"
//                           ? "white"
//                           : "black",
//                     }}
//                     to="/"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li
//                   style={{
//                     borderColor: "black",
//                     borderWidth: 1,
//                     borderRadius: 15,
//                     padding: 10,
//                     outlineStyle: "solid",
//                     background:
//                       this.state.onSelectItem.isSelected &&
//                       this.state.onSelectItem.key === "BIT_COIN"
//                         ? "black"
//                         : "white",
//                   }}
//                   onClick={() => this.changeSelection("BIT_COIN", true)}
//                 >
//                   <Link
//                     style={{
//                       color:
//                         this.state.onSelectItem.isSelected &&
//                         this.state.onSelectItem.key === "BIT_COIN"
//                           ? "white"
//                           : "black",
//                     }}
//                     to="/categories/bitcoin"
//                   >
//                     Bitcoin
//                   </Link>
//                 </li>
//                 <li
//                   style={{
//                     borderColor: "black",
//                     borderWidth: 1,
//                     borderRadius: 15,
//                     padding: 10,
//                     outlineStyle: "solid",
//                     background:
//                       this.state.onSelectItem.isSelected &&
//                       this.state.onSelectItem.key === "APPLE"
//                         ? "black"
//                         : "white",
//                   }}
//                   onClick={() => this.changeSelection("APPLE", true)}
//                 >
//                   <Link
//                     style={{
//                       color:
//                         this.state.onSelectItem.isSelected &&
//                         this.state.onSelectItem.key === "APPLE"
//                           ? "white"
//                           : "black",
//                     }}
//                     to="/categories/apple"
//                   >
//                     Apple
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/categories/Technology">Tech</Link>
//                 </li>
//                 <li>
//                   <Link to="/categories/WSJ">WSJ</Link>
//                 </li>
//                 <li>
//                   <Link to="/categories/NY Times">NY Times</Link>
//                 </li>
//                 <li>
//                   <Link to="/categories/Covid">Covid</Link>
//                 </li>
//                 <li>
//                   <Link to="/categories/Sports">Sports</Link>
//                 </li>
//                 <li>
//                   <Link to="/categories/India">India</Link>
//                 </li>
//               </ul>
//               <Route exact path="/" component={Headlines} />
//               <Route path="/categories/:name" component={Categories} />
//               <Footer />
//             </div>
//           </Router>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default Header;
