import { useState } from 'react'
import './App.css'
import { ReactFlow, useNodesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dragonair from './Dragonair.png'
import dragapult from './Dragapult.png'
import PokemonImageNode from './nodes/PokemonImageNode.jsx';
import {createPokemonNode, addPokemon} from './nodes/PokemonNode.jsx'

const MAX_MON_NODES = 90;

/* For Default Starting Node for Testing */
const initialNodes =[   
  createPokemonNode(1, dragonair, 100, 100)
];

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
