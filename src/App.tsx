import React, { useState }from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pred, setPred] = useState("");
  const [dataDisplay, setDataDisplay] = useState("");
  const predict = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
  const data = {
    input_data: {
      columns: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
      index: [0],
      data: [
        [
          formData.get("LIMIT_BAL"),
          formData.get("SEX"),
          formData.get("EDUCATION"),
          formData.get("MARRIAGE"),
          formData.get("AGE"),
          formData.get("PAY_0"),
          formData.get("PAY_2"),
          formData.get("PAY_3"),
          formData.get("PAY_4"),
          formData.get("PAY_5"),
          formData.get("PAY_6"),
          formData.get("BILL_AMT1"),
          formData.get("BILL_AMT2"),
          formData.get("BILL_AMT3"),
          formData.get("BILL_AMT4"),
          formData.get("BILL_AMT5"),
          formData.get("BILL_AMT6"),
          formData.get("PAY_AMT1"),
          formData.get("PAY_AMT2"),
          formData.get("PAY_AMT3"),
          formData.get("PAY_AMT4"),
          formData.get("PAY_AMT5"),
          formData.get("PAY_AMT6"),
        ],
      ],
    },
  };
  const processedData = {
    input_data: {
      columns: data.input_data.columns,
      index: data.input_data.index,
      data: data.input_data.data.map((item) =>
        item.map((value) => (typeof value === "string" ? parseInt(value, 10) : value))
      ),
    },
  };

  const dataString = JSON.stringify(processedData, null, 2);
  try {
    const response = await axios.post('https://shreemirrah-credit-card-functionapp-test.azurewebsites.net/api/shreemirrah_http_trigger', dataString);
    setPred(response.data);
    console.log(response);
  } catch (error) {
    setPred('Error: Unable to fetch prediction from Azure Function');
  }
  setDataDisplay(dataString);


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

