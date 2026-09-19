function ImportPokemonForm({onSubmit, nodeCount}){
    return(
        <div className="importPokemonSection">
        <form 
          className="importPokemonForm"
          onSubmit={onSubmit}  
        >
          <label> File in your Mons here
              <textarea 
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
            </button> {nodeCount}
          </form>
        </div>
    )
}

export default ImportPokemonForm