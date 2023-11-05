
const MyButton = ({text,num}) => {
    const clickBoton = (title) => {
        console.log('clickBoton: '+title);

    }

    return (<button onClick ={()=>clickBoton(text)} >{text} - {num}</button>);
}


export default MyButton;