import "./MyForm.css"

const MyForm = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome" />
        </div>
        {/* Forma sugerida pela doc do react */}
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" placeholder="Digite o seu e-mail" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default MyForm