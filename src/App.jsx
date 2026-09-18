import { useState } from 'react'
import './App.css'
import { ReactFlow, useNodesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dragonair from './Dragonair.png'
import dragapult from './Dragapult.png'

const MAX_MON_NODES = 90;

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

//Thanks for having a repo :D
function getPokemonImageUrl(species) {
  return `https://raw.githubusercontent.com/May8th1995/sprites/master/${species}.png`;
}

/* For Default Starting Node for Testing */
const initialNodes =[   
  createPokemonNode(1, dragonair, 100, 100)
];

function createPokemonNode(species, image, x, y) {
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

function addPokemon(species, setNodes){
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

function App() {
  const [count, setCount] = useState(0)
  const [importText, setImportText] = useState()
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const nodeTypes = {
    imageNode: PokemonImageNode
  };

  function onSubmit(event) {

    event.preventDefault();
    console.log(event)

    const formData = new FormData(event.currentTarget);
    const species = formData.get('importField');
    addPokemon(species, setNodes);
  }
  
  return (
    <div>
      <div style={{ width: '100vw', height: '90vh' }}>
        <ReactFlow 
          nodes={nodes} 
          edges={[]} 
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          panOnDrag={false}
        />
      </div>

      <div className="importPokemonSection">
        <form 
          className="importPokemonForm"
          onSubmit={onSubmit}  
        >
          <label> File in your Mons here
              <input 
                type="text"
                placeholder="Import your Pokemon here"
                name="importField"
              />
            </label>
            <button
              type="submit"
              style={{
                backgroundColor: 'blue',
                color: 'white'
              }}>
              Add Pokemon
            </button> {nodes.length}
          </form>
        </div>
    </div>
  )

}

export default App
