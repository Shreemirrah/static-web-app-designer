import React, { useState }from 'react';
import axios from 'axios';
import './App.css';

interface FormData {
  [key: string]: string | number | null;
}



function App() {
  const [pred, setPred] = useState("");
  const [data, setData] = useState<any>("");
  //const [data, setData] = useState("");
  // const [dataDisplay, setDataDisplay] = useState<DataState>({
  //   Inputs: {
  //     WebServiceInput0: [],
  //   },
  //   GlobalParameters: {},
  // });
  const predict = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = {
    "Inputs": {
    "WebServiceInput0": [
      {
        "symboling": parseInt(formData.get("symboling")?.toString() || "0"),
        "normalized-losses": parseFloat(formData.get("normalized-losses")?.toString() || "0"),
        "make": formData.get("make"),
        "fuel-type": formData.get("fuel-type"),
        "aspiration": formData.get("aspiration"),
        "num-of-doors": formData.get("num-of-doors"),
        "body-style": formData.get("body-style"),
        "drive-wheels": formData.get("drive-wheels"),
        "engine-location": formData.get("engine-location"),
        "wheel-base": parseFloat(formData.get("wheel-base")?.toString() || "0"),
        "length": parseFloat(formData.get("length")?.toString() || "0"),
        "width": parseFloat(formData.get("width")?.toString() || "0"),
        "height": parseFloat(formData.get("height")?.toString() || "0"),
        "curb-weight":parseInt(formData.get("curb-weight")?.toString() || "0"),
        "engine-type": formData.get("engine-type"),
        "num-of-cylinders": formData.get("num-of-cylinders"),
        "engine-size": parseInt(formData.get("engine-size")?.toString() || "0"),
        "fuel-system":formData.get("fuel-system"),
        "bore":parseFloat(formData.get("bore")?.toString() || "0"),
        "stroke": parseFloat(formData.get("stroke")?.toString() || "0"),
        "compression-ratio": parseFloat(formData.get("compression-ratio")?.toString() || "0"),
        "horsepower": parseFloat(formData.get("horse-power")?.toString() || "0"),
        "peak-rpm": parseFloat(formData.get("peak-rpm")?.toString() || "0"),
        "city-mpg": parseInt(formData.get("city-mpg")?.toString() || "0"),
        "highway-mpg": parseInt(formData.get("highway-mpg")?.toString() || "0"),
        "price": parseFloat(formData.get("price")?.toString() || "0")
      }
    ]
  },
  "GlobalParameters": {}
};
// const processedData = JSON.parse(JSON.stringify(data).replace(/"(-?\d+\.?\d*)"/g, (match, p1) => p1));
// const json = JSON.parse(processedData.replace(/\\n/g, '').replace(/\\/g, ''));

// const dataString = JSON.stringify(json, null, 2);
const json = JSON.parse(JSON.stringify(data));

for (const input of json.Inputs.WebServiceInput0) {
  for (const key in input) {
    if (typeof input[key] === 'number') {
      input[key] = parseFloat(input[key]);
    }
  }
}


setData(json);
  try {
    const response = await axios.post('https://shreemirrah-designer-final.azurewebsites.net/api/http_trigger', data);
    setPred(response.data);
    console.log(response);
  } catch (error) {
    setPred('Error: Unable to fetch prediction from Azure Function');
  }


};

return (
  <div className="App">
    <h1>Automobile Price prediction</h1>
    <h4 id="prediction">
      {pred
        ? pred
        : "Enter the input values and click Predict to see the prediction."}
    </h4>
    <form onSubmit={predict}>
<div>
  <label htmlFor="symboling">Symboling: </label>
  <input
    type="number"
    id="symboling"
    name="symboling"
    placeholder="Enter No of Symboling"
    required
  />
</div>
<div>
  <label htmlFor="normalized-losses">Normalized Losses: </label>
  <input
    type="number"
    id="normalized-losses"
    name="normalized-losses"
    placeholder="Enter normalized-losses"
    step="0.1"
    required
  />
</div>
<div>
  <label htmlFor="make">Make:</label>
  <input type="text" id="make" name="make" placeholder="Make" required />
</div>
<div>
  <label htmlFor="fuel-type">Fuel Type:</label>
  <input
    type="text"
    id="fuel-type"
    name="fuel-type"
    placeholder="Enter Fuel type"
    required
  />
</div>
<div>
  <label htmlFor="aspiration">Aspiration:</label>
  <input
    type="text"
    id="aspiration"
    name="aspiration"
    placeholder="Enter aspiration"
    required
  />
</div>
<div>
  <label htmlFor="num-of-doors">Number of doors:</label>
  <input type="text" id="num-of-doors" name="num-of-doors" placeholder="Enter number of doors" required />
</div>
<div>
  <label htmlFor="body-style">Body Style:</label>
  <input
    type="text"
    id="body-style"
    name="body-style"
    placeholder="Enter Body style"
    required
  />
</div>
<div>
  <label htmlFor="drive-wheels">Drive wheels:</label>
  <input
    type="text"
    id="drive-wheels"
    name="drive-wheels"
    placeholder="Enter drive wheels"
    required
  />
</div>
<div>
  <label htmlFor="engine-location">Engine Location:</label>
  <input
    type="text"
    id="engine-location"
    name="engine-location"
    placeholder="Enter engine location"
    required
  />
</div>
<div>
  <label htmlFor="wheel-base">Wheel base:</label>
  <input
    type="number"
    id="wheel-base"
    name="wheel-base"
    placeholder="Enter wheel-base"
    step="0.1"
    required
  />
</div>
<div>
  <label htmlFor="length">Length:</label>
  <input
    type="number"
    id="length"
    name="length"
    placeholder="Enter length"
    step="0.1"
    required
  />
</div>
<div>
  <label htmlFor="width">Width:</label>
  <input
    type="number"
    id="width"
    name="width"
    placeholder="Enter width"
    step="0.1"
    required
  />
</div>
<div>
  <label htmlFor="height">Height:</label>
  <input
    type="number"
    id="height"
    name="height"
    placeholder="Enter height"
    step="0.1"
    required
  />
</div>
<div>
  <label htmlFor="curb-weight">Curb Weight:</label>
  <input
    type="number"
    id="curb-weight"
    name="curb-weight"
    placeholder="Enter curb-weight"

    required
  />
</div>
<div>
  <label htmlFor="engine-type">Engine Type:</label>
  <input
    type="text"
    id="engine-type"
    name="engine-type"
    placeholder="Enter engine type"
    required
  />
</div>
<div>
  <label htmlFor="num-of-cylinders">Number of cylinders:</label>
  <input
    type="text"
    id="num-of-cylinders"
    name="num-of-cylinders"
    placeholder="Enter number of cylinders"
    required
  />
</div>
<div>
  <label htmlFor="engine-size">Engine Size:</label>
  <input
    type="number"
    id="engine-size"
    name="engine-size"
    placeholder="Enter engine size"
    required
  />
</div>
<div>
  <label htmlFor="fuel-system">Fuel system:</label>
  <input
    type="text"
    id="fuel-system"
    name="fuel-system"
    placeholder="Enter fuel system"
    required
  />
</div>
<div>
  <label htmlFor="bore">Bore:</label>
  <input
    type="number"
    id="bore"
    name="bore"
    placeholder="Enter bore"
    step="0.01"
    required
  />
</div>
<div>
  <label htmlFor="stroke">Stroke:</label>
  <input
    type="number"
    id="stroke"
    name="stroke"
    placeholder="Enter stroke"
    step="0.01"
    required
  />
</div>
<div>
  <label htmlFor="compression-ratio">Compression Ratio:</label>
  <input
    type="number"
    id="compression-ratio"
    name="compression-ratio"
    placeholder="Enter compression-ratio"
    step="0.1"
    required
  />
</div>
<div>
  <label htmlFor="horsepower">Horse Power:</label>
  <input
    type="number"
    id="horsepower"
    name="horsepower"
    placeholder="Enter horsepower"
    step="0.1"
    required
  />
</div>
<div>
  <label htmlFor="peak-rpm">Peak RPM:</label>
  <input
    type="number"
    id="peak-rpm"
    name="peak-rpm"
    placeholder="Enter peak-rpm"
    step="0.1"
    required
  />
</div>
<div>
  <label htmlFor="city-mpg">city-mpg:</label>
  <input
    type="number"
    id="city-mpg"
    name="city-mpg"
    placeholder="Enter city-mpg"
    step="0.1"
    required
  />
</div>
<div>
  <label htmlFor="highway-mpg">highway-mpg:</label>
  <input
    type="number"
    id="highway-mpg"
    name="highway-mpg"
    placeholder="Enter highway-mpg"
    step="0.1"
    required
  />
</div>
<div>
  <label htmlFor="price">Price:</label>
  <input
    type="number"
    id="price"
    name="price"
    placeholder="Enter price"
    step="0.1"
    required
  />
</div>
<button type="submit">Predict</button>
</form>
    <h2>Input Values</h2>
    <p id="data-display"></p>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);
}

export default App;