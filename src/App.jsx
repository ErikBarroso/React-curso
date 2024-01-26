import './App.css'
import City from "./assets/city.jpg"
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserNAme from './components/ShowUserNAme';
import CarDetails from './components/CarDetails';

function App() {

  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        <div>
          {/* {/* <img src="/img1.jpg" alt="" /> */}
          {/* <img src={City} alt="" /> */}
        </div>
        {/* <ManageData /> */}
        {/* <ListRender /> */}
        {/* {<ConditionalRender />} */}
        {/* {<ShowUserNAme name="Erik" />} */}
        <CarDetails brand = "teste" km = {3000} color = 'Red' />
      </div>
    </>
  );
}

export default App
