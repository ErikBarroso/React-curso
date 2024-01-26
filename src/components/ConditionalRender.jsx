import { useState } from "react"

const ConditionalRender = () => {
  const [x] =useState(false)  

  const [name] = useState("João")
  return (
    <div>
      <h2>Isso será exibido?</h2>
      {x && <p>Se x for true, sim!</p>}
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      <h2>If ternário</h2>
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>O nome não é João</p>
        </div>
      )}
    </div>
  );
}

export default ConditionalRender