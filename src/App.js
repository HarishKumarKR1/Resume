import "./styles.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Content from "./Components/content";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
