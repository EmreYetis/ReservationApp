import Rezervasyon from "./components/Rezervasyon";
import * as React from "react";
import Header from "./components/static/Header";
import Footer from "./components/static/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Rezervasyon />
      </div>
      <Footer />
    </div>
  );
}

export default App;
