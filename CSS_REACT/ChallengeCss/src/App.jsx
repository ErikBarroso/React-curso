import './App.css'
import Car from './components/Car.jsx';

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 3213 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 42342 },
  ];
  return (
    <div className="App">
      <h1>Carros</h1>
      <div className="car-container">
        {cars.map((car) => (
          <Car key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default App
