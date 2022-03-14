import './index.css';
import Canvas from './components/Canvas'
import ContinuousSlider from './components/ContinuousSlider';
import { FcLike } from "react-icons/fc";

function App() {
  return(
    <div>
      <div className="flex m-5 p-5 items-center justify-center">
        <h1 className="text-3xl font-semibold">Concave Simulation App</h1>
      </div>
      <div className="flex m-5 p-5">
        <Canvas/>
      </div>
      <div className="flex flex-col m-5 p-5 gap-2 items-center justify-center">
        <h1 className="text-lg font-semibold">Ukuran Benda</h1>
        <ContinuousSlider />
        <h1 className="text-lg font-semibold">Jarak Benda</h1>
        <ContinuousSlider />
        <h1 className="text-lg font-semibold">Titik Fokus Lensa</h1>
        <ContinuousSlider />
      </div>
      <div className="flex m-5 p-5 items-center justify-center">
        <h1 className="flex text-lg font-semibold">Made with <span className="p-1"><FcLike /></span> Kelompok 4 </h1> 
      </div>
    </div>
  );
}

export default App;
