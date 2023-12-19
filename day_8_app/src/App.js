import logo from './logo.svg';
import './App.css';
import Parent from './componant/Timer_useReff/Parent';
import Input from './componant/Focus_ref/Input';
import Video from './componant/Video_ref/Video';

function App() {
  return (
    <div className="App">
      <Parent/>
      <Input/>
      <Input/>
      <Video/>
    </div>
  );
}

export default App;
