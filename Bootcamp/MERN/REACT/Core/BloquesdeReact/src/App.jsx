import "./App.css"
import HeadNav from "./components/HeadNav"
import MainSection from "./components/mainSection"
import AsideSection from "./components/AsideSection";

const App = () => {
  return (
    <>
      <div className="container">
        <HeadNav/>
        <div className="mainAsideContainer">
          <MainSection/>
          <AsideSection/>
        </div>
      </div>
    </>
  );
};

export default App;
