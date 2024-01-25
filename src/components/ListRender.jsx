import { useState } from "react"

const ListRender = () => {
  const [list] =  useState (["Erik", "Pedro" , "João", "Paulo"])
  return (
  <div>
      <ul>
        {list.map((item) => {
          return <li key ={item}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default ListRender