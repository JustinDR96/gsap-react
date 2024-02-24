import "./styles/App.scss";
import SectionFirst from "./components/SectionFirst/SectionFirst";
import SectionSecond from "./components/SectionSecond/SectionSecond";
import SectionThird from "./components/SectionThird/SectionThird";
import SectionTitle from "./components/SectionTitle/SectionTitle";

function App() {
  return (
    <>
      <main>
        <SectionFirst />
        <SectionTitle />
        <SectionSecond />
        <SectionThird />
      </main>
    </>
  );
}

export default App;
