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

  return (
    <div>
      <h1 onClick={handleClicar}>Nom3e: {nome}</h1>
      <h3>Idade: {idade}</h3>
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
