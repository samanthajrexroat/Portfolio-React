import React, {useState} from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
// import Page from "./components/Page";
// import Footer from "./components/Footer";

function App() {
  const [pages] = useState([
    {name: "about"},
    {name: "work"},
    {name: "contact"},
    {name: "resume"}
  ]);

  const [current, setCurrent] = useState(pages[0]);
  return (
    <>
      <Header>
      <Nav 
        pages={pages}
        setCurrent={setCurrent}
        current={current}>
      </Nav>
      </Header>
      {/* <main>
        <Page current={current}></Page>
      </main>
      <Footer /> */}
    </>
  );
}

export default App;
