//Thanks for having a repo :D
//none exported for now because it doesnt need to exist outside
function getPokemonImageUrl(species) {
  return `https://raw.githubusercontent.com/May8th1995/sprites/master/${species}.png`;
}

export function createPokemonNode(species, image, x, y) {
      console.log("Debug inside createPokemonNode")

  return {
    id: String(species),
    type: 'imageNode',
    position: { x, y },
    data: { 
      image,
      species
    },

    style: {
      width: '40px',
      height: '30px',
      padding: 0,
      border: 'none',
      background: 'transparent'
    }
  };
}

export function addPokemon(species, setNodes){
      console.log("Debug inside AddPokemon")

  const speciesImage = getPokemonImageUrl(species);
  const newNode = createPokemonNode(
    species,
    speciesImage,
    200,
    100
  )
  //Returns our new node
  setNodes((nodes)=>{
    if (nodes.some((node) => node.id ==species)){
      return nodes;
    }

    return [...nodes,newNode];
  });
}