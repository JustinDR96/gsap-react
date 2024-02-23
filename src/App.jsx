import "./styles/App.scss";
import SectionFirst from "./components/SectionFirst/SectionFirst";
import SectionSecond from "./components/SectionSecond/SectionSecond";
import SectionThird from "./components/SectionThird/SectionThird";

function App() {
  return (
    <>
      <main>
        <SectionFirst />
        <SectionSecond />
        <SectionThird />
      </main>
    </>
  );
}

export default App;
