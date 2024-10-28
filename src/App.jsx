import "./App.css";
import LineChart from "./components/LineChart/LineChart";
import NevBar from "./components/NevBar/NevBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <NevBar></NevBar>
     <PriceOptions></PriceOptions>
     <LineChart></LineChart>
    </>
  );
}

export default App;
