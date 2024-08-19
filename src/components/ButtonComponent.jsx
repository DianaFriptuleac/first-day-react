const ButtonComponent = function(props){
    const clickButton = function(){
        window.location.href = props.buttonLink
    }
    return(
        <>
        <button
        type="button" 
        onClick={clickButton}
        className = "button-react">{props.buttonName}</button>
        </>
    )
}
export default ButtonComponent