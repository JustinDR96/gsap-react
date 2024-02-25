import "./styles/App.scss";
import SectionFirst from "./components/SectionFirst/SectionFirst";
import SectionSecond from "./components/SectionSecond/SectionSecond";
import SectionThird from "./components/SectionThird/SectionThird";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import SectionFinal from "./components/SectionFinal/SectionFinal";

function App() {
  return (
    <>
      <main>
        <SectionFirst />
        <SectionTitle />
        <SectionSecond />
        <SectionThird />
        <SectionFinal />
      </main>
    </>
  );
}

export default App;
