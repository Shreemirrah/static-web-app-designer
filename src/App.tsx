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
  <label htmlFor="LIMIT_BAL">Limit Balance:</label>
  <input
    type="number"
    id="LIMIT_BAL"
    name="LIMIT_BAL"
    placeholder="Enter Limit Balance"
    required
  />
</div>
<div>
  <label htmlFor="SEX">SEX:</label>
  <input type="text" id="SEX" name="SEX" placeholder="Enter SEX" required />
</div>
<div>
  <label htmlFor="EDUCATION">EDUCATION:</label>
  <input
    type="text"
    id="EDUCATION"
    name="EDUCATION"
    placeholder="Enter EDUCATION"
    required
  />
</div>
<div>
  <label htmlFor="MARRIAGE">MARRIAGE:</label>
  <input
    type="text"
    id="MARRIAGE"
    name="MARRIAGE"
    placeholder="Enter MARRIAGE"
    required
  />
</div>
<div>
  <label htmlFor="AGE">AGE:</label>
  <input type="number" id="AGE" name="AGE" placeholder="Enter AGE" required />
</div>
<div>
  <label htmlFor="PAY_0">Month one Payment:</label>
  <input
    type="number"
    id="PAY_0"
    name="PAY_0"
    placeholder="Enter Month one Payment"
    required
  />
</div>
<div>
  <label htmlFor="PAY_2">Month Two Payment:</label>
  <input
    type="number"
    id="PAY_2"
    name="PAY_2"
    placeholder="Enter Month Two Payment"
    required
  />
</div>
<div>
  <label htmlFor="PAY_3">Month Three Payment:</label>
  <input
    type="number"
    id="PAY_3"
    name="PAY_3"
    placeholder="Enter Month Three Payment"
    required
  />
</div>
<div>
  <label htmlFor="PAY_4">Month Four Payment:</label>
  <input
    type="number"
    id="PAY_4"
    name="PAY_4"
    placeholder="Enter Month Four Payment"
    required
  />
</div>
<div>
  <label htmlFor="PAY_5">Month 5 Payment:</label>
  <input
    type="number"
    id="PAY_5"
    name="PAY_5"
    placeholder="Enter Month 5 Payment"
    required
  />
</div>
<div>
  <label htmlFor="PAY_6">Month Six Payment:</label>
  <input
    type="number"
    id="PAY_6"
    name="PAY_6"
    placeholder="Enter Month Six Payment"
    required
  />
</div>
<div>
  <label htmlFor="BILL_AMT1">Bill Month 1%:</label>
  <input
    type="number"
    id="BILL_AMT1"
    name="BILL_AMT1"
    placeholder="Enter Bill Month 1%"
    required
  />
</div>
<div>
  <label htmlFor="BILL_AMT2">Bill Month 2%:</label>
  <input
    type="number"
    id="BILL_AMT2"
    name="BILL_AMT2"
    placeholder="Enter Bill Month 2%"
    required
  />
</div>
<div>
  <label htmlFor="BILL_AMT3">Bill Month 3%:</label>
  <input
    type="number"
    id="BILL_AMT3"
    name="BILL_AMT3"
    placeholder="Enter Bill Month 3%"
    required
  />
</div>
<div>
  <label htmlFor="BILL_AMT4">Bill Month 4%:</label>
  <input
    type="number"
    id="BILL_AMT4"
    name="BILL_AMT4"
    placeholder="Enter Bill Month 4%"
    required
  />
</div>
<div>
  <label htmlFor="BILL_AMT5">Bill Month 5%:</label>
  <input
    type="number"
    id="BILL_AMT5"
    name="BILL_AMT5"
    placeholder="Enter Bill Month 5%"
    required
  />
</div>
<div>
  <label htmlFor="BILL_AMT6">Bill Month 6%:</label>
  <input
    type="number"
    id="BILL_AMT6"
    name="BILL_AMT6"
    placeholder="Enter Bill Month 6%"
    required
  />
</div>
<div>
  <label htmlFor="PAY_AMT1">Pay Month 1%:</label>
  <input
    type="number"
    id="PAY_AMT1"
    name="PAY_AMT1"
    placeholder="Enter Pay Month 1%"
    required
  />
</div>
<div>
  <label htmlFor="PAY_AMT2">Pay Month 2%:</label>
  <input
    type="number"
    id="PAY_AMT2"
    name="PAY_AMT2"
    placeholder="Enter Pay Month 2%"
    required
  />
</div>
<div>
  <label htmlFor="PAY_AMT3">Pay Month 3%:</label>
  <input
    type="number"
    id="PAY_AMT3"
    name="PAY_AMT3"
    placeholder="Enter Pay Month 3%"
    required
  />
</div>
<div>
  <label htmlFor="PAY_AMT4">Pay Month 4%:</label>
  <input
    type="number"
    id="PAY_AMT4"
    name="PAY_AMT4"
    placeholder="Enter Pay Month 4%"
    required
  />
</div>
<div>
  <label htmlFor="PAY_AMT5">Pay Month 5%:</label>
  <input
    type="number"
    id="PAY_AMT5"
    name="PAY_AMT5"
    placeholder="Enter Pay Month 5%"
    required
  />
</div>
<div>
  <label htmlFor="PAY_AMT6">Pay Month 6%:</label>
  <input
    type="number"
    id="PAY_AMT6"
    name="PAY_AMT6"
    placeholder="Enter Pay Month 6%"
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

