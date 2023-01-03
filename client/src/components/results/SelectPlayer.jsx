const SelectPlayer = (props) => {
    return <button 
    className="bg-gray-500 rounded-3xl p-4"
    onClick={()=> props.setPlayerSelected(props.user)}>Voir mes résultats</button>
}

export default SelectPlayer;