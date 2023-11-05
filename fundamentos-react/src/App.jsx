// componente principal de react, los componentes son funciones que pueden ser exportadas
import imgUno from './assets/images/img1.jpg';
import PropTypes from "prop-types";
import MyButton from  "./components/MyButton";
import WelcomeText from "./components/WelcomeText";
import ItemFruta from './components/frutas/ItemFruta';
import ListFrutas from './components/frutas/ListFrutas';
import ButtonState from './components/ButtonState';

// para validar los atributos de algun componente, o sea dejar un mensaje de advertencia a los componentes que requieres demandantemente cierto atributo
MyButton.propTypes = {
    text: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired
}

// const OnlineText = ()=> {

//     return(<h6>Online</h6>);
// };

// const OfflineText = ()=> {

//     return(<h6>Offline</h6>);
// };


const App = () => {

    const title = "mi titulo desde una constante";
    const classTitle = "text-center";
    const user = true;
    const frutas = ["🍎","🍌","🥝"];
    const frutasDos = ["🍊","🍓","🍑"];
    

    return (
    <>
    <ButtonState></ButtonState>
    <h1 className={classTitle}>{title}</h1> {/*interpolación*/}
    <img src={imgUno} alt={`esta imagen tiene titulo de ${title}`} />
    <MyButton text="botón 1" num={(10)}></MyButton>
    <MyButton text="botón 2" num={1}></MyButton>
    <MyButton text="botón 3"num={2}></MyButton>
    <WelcomeText user = {user}/>
    <ListFrutas frutas={frutas}></ListFrutas>
    <ListFrutas frutas={frutasDos}></ListFrutas>


    </>)

}


export default App;