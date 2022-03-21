import './index.css';
import Canvas from './components/Canvas'
import Slider from './components/Slider'
import { FcLike } from "react-icons/fc";
import React from 'react';

function App() {
  const [ukuranBenda, setUkuranBenda] = React.useState(0)
  const [jarakBenda, setJarakBenda] = React.useState(0)
  const [titikFokus, setTitikFokus] = React.useState(0)
  return(
    <div>
      <div className="flex m-5 p-5 items-center justify-center">
        <h1 className="text-3xl font-semibold">Concave Simulation App</h1>
      </div>
      <div className="flex m-5 p-5" id="frame">
        <Canvas ukuranBenda={ukuranBenda} jarakBenda={jarakBenda} titikFokus={titikFokus}
        />
      </div>
      <div className="flex flex-col m-5 p-5 gap-2 items-center justify-center">
        <h1 className="text-lg font-semibold">Ukuran Benda</h1>
        <Slider value={ukuranBenda} setValue={setUkuranBenda}/>
        <h1 className="text-lg font-semibold">Jarak Benda</h1>
        <Slider value={jarakBenda} setValue={setJarakBenda}/>
        <h1 className="text-lg font-semibold">Titik Fokus Lensa</h1>
        <Slider value={titikFokus} setValue={setTitikFokus}/>
      </div>
      <div className="flex m-5 p-5 items-center justify-center">
        <h1 className="flex text-lg font-semibold">Made with <span className="p-1"><FcLike /></span> Kelompok 4 </h1> 
      </div>
    </div>
  );
}

export default App;
