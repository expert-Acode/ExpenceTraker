import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ExpenceTracker from "./Components/ExpenceTracker";


function App() {
  
  // console.log("LOCAL STORAGE === ",localStorage.getItem('expenceTracerState'));

  return (
    <div className="App">
      <ExpenceTracker />
    </div>

  );
}

export default App;
