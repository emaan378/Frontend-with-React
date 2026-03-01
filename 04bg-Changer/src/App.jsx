import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    
      <div className="w-screen h-screen" style={{ backgroundColor: color }}>
         <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0  p-4">
           <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg" onClick={() => setColor("red")}>Red</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg" onClick={() => setColor("blue")}>Blue</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg" onClick={() => setColor("green")}>Green</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-lg" onClick={() => setColor("gray")}>Gray</button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg" onClick={() => setColor("purple")}>Purple</button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg" onClick={() => setColor("orange")}>Orange</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg" onClick={() => setColor("yellow")}>Yellow</button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow-lg" onClick={() => setColor("pink")}>Pink</button>
            <button className="bg-black text-white px-4 py-2 rounded-lg shadow-lg" onClick={() => setColor("black")}>Black</button>
            <button className="bg-white-500 text-black px-4 py-2 rounded-lg shadow-lg" onClick={() => setColor("white")}>White</button>
            
            

           </div>
          
         </div>
      </div>
    
  )
}

export default App
