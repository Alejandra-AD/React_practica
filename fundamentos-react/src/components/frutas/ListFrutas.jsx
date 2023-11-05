import ItemFruta from "./ItemFruta";


const ListFrutas = ({frutas}) => {
    // const frutas = ["🍎","🍌","🥝"];
return(
    <ul>
        {
        frutas.map((fruta,index) => (
            <ItemFruta key = {index} fruta = {fruta}/>
        )) 
        }
        
    </ul>
    )


}

export default ListFrutas;