import ImportPokemonForm from "./ImportPokemonForm";
import pokeball_icon from '../assets/pokeball_icon.webp'
import './PokemonSidebar.css';
import { useState } from "react"; 

function PokemonSidebar({onSubmit, nodeCount}){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    return (
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button
          className="sidebarTab"
          onClick={()=> setSidebarOpen(!sidebarOpen)}>
             <img src={pokeball_icon} alt="Open sidebar" />
        </button>
        <ImportPokemonForm
          onSubmit={onSubmit}
          nodeCount={nodeCount}
        />
      </aside>
    );
}

    //   <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
    //     <button
    //       className="sidebarTab"
    //       onClick={()=> setSidebarOpen(!sidebarOpen)}>
    //       <img src={pokeball_icon} alt="Open sidebar" />
    //     </button>
    //     <ImportPokemonForm
    //       onSubmit={onSubmit}
    //       nodeCount={nodes.length}
    //     />
    //   </aside>


export default PokemonSidebar