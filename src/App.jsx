import './App.css'
import City from "./assets/city.jpg"
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserNAme from './components/ShowUserNAme';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';

function App() {

  const cars = [
    {id:1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id:2, brand: "KIA", color: "Branco", newCar: false, km: 3213},
    {id:3, brand: "Renault", color: "Azul", newCar: false, km: 42342},
  ]

  return (
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
        {/* <CarDetails brand="teste" km={3000} color="Red" newCar = {true}/>
        <CarDetails brand="Ford" km={2000} color="Blue"newCar = {false} />
        <CarDetails brand="Fiat" km={6000} color="Black" newCar = {true}/> */}
        {/* {cars.map((car) => (
           <CarDetails 
            brand={car.brand} 
            color={car.color} 
            km={car.km} 
            newCar={car.newCar}
            />
        ))} */}
        <Fragment />
      </div>
  );
}

export default App
