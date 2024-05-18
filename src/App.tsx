import React, { useState }from 'react';
import axios from 'axios';
import './App.css';

interface FormData {
  [key: string]: string | number | null;
}

interface DataState {
  Inputs: {
    WebServiceInput0: FormData[];
  };
  GlobalParameters: {};
}

function App() {
  const [pred, setPred] = useState("");
  const [dataDisplay, setDataDisplay] = useState<DataState>({
    Inputs: {
      WebServiceInput0: [],
    },
    GlobalParameters: {},
  });
  const predict = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data: DataState = {
  "Inputs": {
    "WebServiceInput0": [
      {
        "symboling": formData.get("symboling"),
        "normalized-losses": formData.get("normalized-losses"),
        "make": formData.get("make"),
        "fuel-type": formData.get("fuel-type"),
        "aspiration": formData.get("aspirtation"),
        "num-of-doors": formData.get("num-of-doors"),
        "body-style": formData.get("body-style"),
        "drive-wheels": formData.get("drive-wheels"),
        "engine-location": formData.get("engine-location"),
        "wheel-base": formData.get("wheel-base"),
        "length": formData.get("length"),
        "width": formData.get("width"),
        "height": formData.get("height"),
        "curb-weight":formData.get("curb-weigth"),
        "engine-type": formData.get("engine-type"),
        "num-of-cylinders": formData.get("num-of-cylinders"),
        "engine-size": formData.get("engine-size"),
        "fuel-system":formData.get("fuel-system"),
        "bore": formData.get("bore"),
        "stroke": formData.get("stroke"),
        "compression-ratio": formData.get("compression-ratio"),
        "horsepower": formData.get("horsepower"),
        "peak-rpm": formData.get("peak-rpm"),
        "city-mpg": formData.get("city-mpg"),
        "highway-mpg": formData.get("highway-mpg"),
        "price": formData.get("price")
      }
    ]
  },
  "GlobalParameters": {}
};
  // const processedData = {
  //   input_data: {
  //     columns: data.input_data.columns,
  //     index: data.input_data.index,
  //     data: data.input_data.data.map((item) =>
  //       item.map((value) => (typeof value === "string" ? parseInt(value, 10) : value))
  //     ),
  //   },
  // };

  //const dataString = JSON.stringify(processedData, null, 2);
  try {
    const response = await axios.post('https://shreemirrah-function-app-designer.azurewebsites.net/', data);
    setPred(response.data);
    console.log(response);
  } catch (error) {
    setPred('Error: Unable to fetch prediction from Azure Function');
  }
  setDataDisplay(data);


};

return (
  <div className="App">
    <h1>Credit Card Default Prediction</h1>
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
  <label htmlFor="make">Make:</label>
  <input type="text" id="make" name="make" placeholder="Make" required />
</div>
<div>
  <label htmlFor="fueltype">Fuel Type:</label>
  <input
    type="text"
    id="fueltype"
    name="fueltype"
    placeholder="Enter EDUCATION"
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
    type="number"
    id="engine-type"
    name="engine-type"
    placeholder="Enter engine type"
    required
  />
</div>
<div>
  <label htmlFor="num-of-cylinders">Number of cylinders:</label>
  <input
    type="number"
    id="num-of-cylinders"
    name="num-of-cylinders"
    placeholder="Enter number of cylinders"
    required
  />
</div>
<div>
  <label htmlFor="engine-size">Bill Month 5%:</label>
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
    type="number"
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
    required
  />
</div>
<button type="submit">Predict</button>
</form>
    <h2>Input Values</h2>
    <p id="data-display"></p>
      <pre>{dataDisplay}</pre>
  </div>
);
}

export default App;

