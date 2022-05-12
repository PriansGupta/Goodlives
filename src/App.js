import './App.css';
import Header from './Compoonents/Header/header';
import Home from './Compoonents/Body/Home/home';
import Button from './Compoonents/Body/Button/button';
import Details from './Compoonents/Body/Details/details';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Home></Home>
     <Button></Button>
     <Details></Details>
    </div>
  );
}

export default App;
