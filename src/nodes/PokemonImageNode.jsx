function PokemonImageNode({ data }) {
  return (
    <img
      src={data.image}
      alt={data.species}
      style={{    //refacotr this to css later
        width: '100%',
        display: 'block'
      }}
      draggable={false}
    />
  );
}

export default PokemonImageNode;