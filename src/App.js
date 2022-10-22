import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Middle from './components/MiddleSection/Middle';
import RightSide from './components/RightSide/RightSide';

function App() {
  return (
    <div className="App">
     <div className='AppGlass'>
      <Sidebar />
      <Middle />
      <RightSide />
     </div>
    </div>
  );
}

export default App;
