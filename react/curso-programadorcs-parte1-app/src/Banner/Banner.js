export const Banner = (dadosUsuario) => {
  // console.log("====================================");
  // console.log(dadosUsuario);
  // console.log("====================================");
  const { nome, idade } = dadosUsuario;

  const handleClicar = () => {
    console.log(nome);
  };

  // const handleDigitar = (e) => {
  //   console.log(e.target.value);
  // };
  function handleDigitar(evento) {
    console.log(evento.target.value);
  }

  if (!idade) {
    return (
      <div>
        <h1 onClick={handleClicar}>Nome: {nome}</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 onClick={handleClicar}>Nome2: {nome}</h1>
      {/* {idade && <h3>Idade: {idade}</h3>} */}
      {idade ? <h3>Idade: {idade}</h3> : null}

      <input
        type="text"
        onKeyUp={(eventoEnviadoViaParam) =>
          handleDigitar(eventoEnviadoViaParam)
        }
      />
    </div>
  );
};
export const Banner2 = () => {
  return <h1>Cassiano2</h1>;
};
