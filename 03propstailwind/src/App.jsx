import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <div className="flex justify-center mb-4">
        <h1 className="bg-green-400 text-black p-2 rounded-xl">
          Tailwind test
        </h1>
      </div>
      <div className="flex gap-3">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
