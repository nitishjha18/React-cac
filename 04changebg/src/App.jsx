import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => {setcolor("red")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}
          >Red</button>

          <button
          button onClick={() => {setcolor("Green")}} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Green"}}
          >Green</button>

          <button
          button onClick={() => {setcolor("Blue")}} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Blue"}}
          >Blue</button>

          <button
          button onClick={() => {setcolor("Olive")}} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Olive"}}
          >Olive</button>

          <button
          button onClick={() => {setcolor("Teal")}} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Teal"}}
          >Teal</button>

          <button 
          button onClick={() => {setcolor("Purple")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Purple"}}
          >Purple</button>

           <button 
           button onClick={() => {setcolor("Indigo")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Indigo"}}
          >Indigo</button>

          <button 
           button onClick={() => {setcolor("Black")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Black"}}
          >Black</button>


        </div>
      </div>
    </div>
  )
}

export default App
