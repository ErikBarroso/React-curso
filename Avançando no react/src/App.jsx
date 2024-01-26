import './App.css'
import UserDetails from './components/UserDetails';

function App() {

    const users = [
      { id: 1,nome: "Erik,", idade: 19, profissão: "Programador" },
      { id: 2,nome: "Tiago,", idade: 17, profissão: "Eletricista" },
      { id: 3,nome: "Leandro,", idade: 18, profissão: "Uber" },
    ];
 
  return (
      <div>
        <h1>Avançando em React</h1>
        {users.map((user) => {
       return   <UserDetails
            key={user.id}
            nome = {user.nome}
            idade = {user.idade}
            profissão = {user.profissão}
           />
        })}
      </div>
  );
}

export default App
