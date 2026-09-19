import { ReactFlow, useNodesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';



function PokemonCanvas({nodes, nodeTypes, onNodesChange}){
    return (
    <div style={{ width: '100vw', height: '90vh' }}>
        <ReactFlow 
          nodes={nodes} 
          edges={[]} 
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          panOnDrag={false}
       />
    </div>
    );
}

export default PokemonCanvas