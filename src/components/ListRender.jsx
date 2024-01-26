import { useState } from "react"

const ListRender = () => {
  const [list] =  useState (["Erik", "Pedro" , "João", "Paulo"])

const [users] = useState([
  { id: 1, name: "Matheus", age: 31 },
  { id: 12323, name: "João", age: 25 },
  { id: 11123123, name: "Erik", age: 45 },
]);

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
    </div>
  )
}

export default ListRender