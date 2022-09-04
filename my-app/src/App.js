import Intro from "./components/intro/intro";

const App = () => {
  return (
    <div>
      <Intro />
    </div>
  );
};

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import { Route } from "express";

// function App() {
//   return (
//     <div>
//       <Router>
//         <Navbar />
//         <Route>
//           <Routes>
//             <Route path="/" exact component={<Home />} />
//             <Route path="/about-me" component={<About />} />
//             <Route path="/projects" component={<Projects />} />
//             <Route path="/contact" component={<Contact />} />
//           </Routes>
//         </Route>
//       </Router>
//     </div>
//   );
// }

export default App;
