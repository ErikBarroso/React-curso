import { useState } from "react"

const ListRender = () => {
  const [list] =  useState (["Erik", "Pedro" , "João", "Paulo"])

const [users, setUsers] = useState([
  { id: 1, name: "Matheus", age: 31 },
  { id: 2, name: "João", age: 25 },
  { id: 3, name: "Erik", age: 45 },
]);

const deleteRandom = () =>  {
  const randomNumber = Math.floor(Math.random() *4)
  setUsers((prevUsers) => {
    return prevUsers.filter((user) => randomNumber !== user.id)
  })
}

  return (
  <div>
      {/* <ul>
        {list.map((item, i) => {
          return <li key ={i}>{item}</li>
        })}
      </ul> */}
      <ul>
        {users.map((user)=> {
         return  <li key={user.id}>
            {user.name} - {user.age}
          </li>;
        })}
      </ul>
      <button onClick={deleteRandom}>Deletar usuário</button>
    </div>
  )
}

export default ListRender