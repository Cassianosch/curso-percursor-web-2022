export const Banner = (dadosUsuario) => {
  console.log("====================================");
  console.log(dadosUsuario);
  console.log("====================================");
  const { nome, idade } = dadosUsuario;
  return (
    <div>
      <h1 onClick={() => console.log(nome)}>Nom3e: {nome}</h1>
      <h3>Idade: {idade}</h3>
    </div>
  );
};
export const Banner2 = () => {
  return <h1>Cassiano2</h1>;
};
