const SelectPlayer = (props) => {
    return <button 
    className="bg-gray-500 rounded-3xl w-64"
    onClick={()=> {props.playerSelected ? props.setPlayerSelected('') : props.setPlayerSelected(props.user)}}
    >{props.playerSelected ? `Voir tous les résultats` : `Voir mes résultats`}</button>
}

export default SelectPlayer;