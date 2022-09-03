import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-me" component={Services} />
        <Route path="/projects" component={Products} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
