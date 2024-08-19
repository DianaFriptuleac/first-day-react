//importo il modulo React e CComponent dalla libreria react.
import { Component } from "react";
// definisco la classe che stente Component
class ImageComponent extends Component {
    //metodo render e obbligatorio per una classe e estende Component che restituisce JSX.
    render(){
        return(
        <>
        <img
         className={this.props.className}
          src={this.props.src} 
          alt={this.props.alt}/>
        </>
        )
    }
}
//esporto il componente per poterlo utilizzare in altri file
export default ImageComponent