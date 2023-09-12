import "./App.css";

import { Brand, Cta,  Navbar } from "./Components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Posibility,
  WhatGBT4,
} from "./Containers";

function App() {
  return (
    <>
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGBT4 />
      <Features />
      <Posibility />
      <Cta />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
