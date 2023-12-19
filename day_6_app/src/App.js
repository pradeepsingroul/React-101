import logo from './logo.svg';
import './App.css';
import UseEffect from './componants/UseEffect';
import FetchApi from './componants/fetchApi/ApiUsingUseEffect';
import Timer from './componants/timer/Timer';
import ButtonTimer from './componants/timer/ButtonTimer';
import Chart from './componants/orderManage/Chart';
import CardContainer from './componants/orderManage/CardContainer';

function App() {
  return (
    <div className="App">
      <UseEffect/>

      {/* <FetchApi/> */}

      <ButtonTimer/>

    {/* <Chart/> */}

    <CardContainer/>

    </div>
  );
}

export default App;
