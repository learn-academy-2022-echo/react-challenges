const Dice = (props) => {
    return <>
    <p className='dice' onClick={props.handleClick}>{props.number}</p>
    </>
}
export default Dice