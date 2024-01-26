const UserDetails = ({ nome, idade, profissão }) => {
  return (

    <div>
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissão}</p>
      {idade >=18? 
      (<p>Pode tirar Habilitação</p>) 
      : ( <p>Não pode tirar habilitação</p>)
      }
    </div>
  );
};

export default UserDetails;
