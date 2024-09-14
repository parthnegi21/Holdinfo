import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/data");
        console.log(res.data); // Log the full response to check data structure
        setData(res.data); // Set the entire data array, not just the first item
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchData();
  }, []);

  const placeholders = Array(10).fill({});

  return (
    <>
      <div className="w-full" style={{ backgroundColor: "rgb(25 29 40)", height: "1200px" }}>
        <div className="flex w-full h-20">
          <div className="flex text-5xl pt-4 ml-10" style={{ color: "#5fedff" }}>HOLDINFO</div>

          <select className="h-8 w-24 mt-8 ml-80 rounded" style={{ backgroundColor: "rgb(39 47 69)", color: "white" }} id="dropdown" name="options">
            <option className="flex justify-center text-white" value="option1">INR</option>
          </select>

          <select className="h-8 w-24 mt-8 ml-8 rounded" style={{ backgroundColor: "rgb(39 47 69)", color: "white" }} id="dropdown" name="options">
            <option value="option1">BTC</option>
            <option value="option2">ETH</option>
            <option value="option3">USDT</option>
            <option value="option4">XRP</option>
          </select>

          <button className="h-8 w-24 mt-8 ml-8 rounded" style={{ backgroundColor: "rgb(39 47 69)", color: "white" }}>Buy Eth</button>
          <button className="h-8 w-40 mt-8 ml-60 rounded" style={{ backgroundColor: "rgb(45 205 198)", color: "white" }}>Connect Telegram</button>
        </div>

        <div className="flex mt-24 justify-center text-2xl text-gray-300">Best Price To Trade</div>
        <div className="flex w-full h-30">
          <div className="text-4xl bold mt-4 ml-40" style={{ color: "#5fedff" }}>0.1%</div>
          <div className="text-4xl bold mt-4 ml-40" style={{ color: "#5fedff" }}>0.96%</div>
          <div className="text-6xl ml-40" style={{ color: "white" }}>₹26,56,110</div>
          <div className="text-4xl mt-4 ml-40" style={{ color: "#5fedff" }}>2.73%</div>
          <div className="text-4xl mt-4 ml-40" style={{ color: "#5fedff" }}>7.51%</div>
        </div>
        <div className="flex mt-8 justify-center text-xl text-gray-300">Average BTC/INR net price including Commissions</div>

        <div className="text-center mt-20 flex w-full">
          <div className="text-2xl mt-4 w-56" style={{ color: "white" }}>#</div>
          <div className="text-2xl mt-4 w-56" style={{ color: "white" }}>Platform</div>
          <div className="text-2xl mt-4 w-56" style={{ color: "white" }}>name</div>
          <div className="text-2xl mt-4 w-56" style={{ color: "white" }}>last</div>
          <div className="text-2xl mt-4 w-56" style={{ color: "white" }}>buy/sell Price</div>
          <div className="text-2xl mt-4 w-56" style={{ color: "white" }}>volume</div>
          <div className="text-2xl mt-4 w-56" style={{ color: "white" }}>base_unit</div>
        </div>

        {data.length > 0 ? data.map((items, index) => (
          <div key={index} className="text-center mt-5 rounded-3xl flex w-full" style={{ backgroundColor: "rgb(49 54 65)" }}>
            <div className="w-56 text-2xl bold mt-4 " style={{ color: "white" }}>{index + 1}</div>
            <div className="w-56 text-2xl mt-4 " style={{ color: "white" }}>WazirX</div>
            <div className="w-56 text-2xl mt-4 " style={{ color: "white" }}>{items.name}</div>
            <div className="w-56 text-2xl mt-4 " style={{ color: "white" }}>₹{items.last }</div>
            <div className="w-56 text-2xl mt-4 " style={{ color: "white" }}>₹{items.buy } / ₹{items.sell}</div>
            <div className="w-56 text-2xl mt-4 " style={{ color: "white" }}>{items.Volume}</div>
            <div className="w-56 text-2xl mt-4 " style={{ color: "white" }}>{items.base_unit}</div>
          </div>
        )) : (
          <div className="text-center text-gray-300 mt-5">No data available</div>
        )}
      </div>
    </>
  );
}

export default App;
