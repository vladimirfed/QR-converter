import './App.css';

function App() {
  return (
    <div className="container mx-auto w-2/4">
        <h1 className="py-4">QR Converter </h1>
        <input type="text"
              placeholder="Fill the input for QR code"
              className="border border-gray-300 w-full h-8 p-4 font-light text-sm focus: outline-none focus: border-gray-600" ></input>
      
    </div>
  );
}

export default App;
