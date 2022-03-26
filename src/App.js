import React from "react";
import "./App.css";
import QRCode from "react-qr-code";

function App() {

  const [inputValue, setInputValue] = React.useState('')

  return (
    <div className="App">
      <h1 className="py-4">QR Converter </h1>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
      <div className="form__group">
        <input
          onChange={e=>setInputValue(e.target.value)}
          type="text"
          className="form__input"
          id="name"
          placeholder="Enter  the link"
        />
        <QRCode 
          className="App"
          value={inputValue} />
      </div>
    </div>
  );
}

export default App;
