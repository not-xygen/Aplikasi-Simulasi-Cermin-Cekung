import Frame from './components/Frame'
import ContinuousSlider from './components/ContinuousSlider';
import VerticalSlider from './components/VerticalSlider';

function App() {
  return(
    <div className="flex flex-col w-screen h-screen bg-zinc-800">
      <div className="flex gap-5 "> 
        <div className="m-5 w-11/12 bg-zinc-500 rounded-lg">
          <Frame />
        </div>
        <div className="flex m-5 w-1/12 items-center justify-center bg-zinc-500 rounded-lg">
          <VerticalSlider />
        </div>
      </div>
      <div className="flex flex-col m-5 items-center justify-center bg-zinc-500 rounded-lg ">
        <ContinuousSlider />
        <ContinuousSlider />
      </div>
    </div>
  );
}

export default App;
