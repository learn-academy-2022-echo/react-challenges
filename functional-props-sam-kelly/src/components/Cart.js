const Cart = (props) => {
    return (
    <>
 <h2>🛒 Cart 🛒</h2>
 {props.cartList.map((value, index) => {
    return(
        <ul key= {index}>
            <li>{value}</li>
        </ul>
    )
})}
    <h3>🤢 Current Total 🤢: ${props.totalCost}</h3>
    <h3>😩 Current Total plus tax 😩: ${props.taxCost}</h3>
    
</>
)
}

export default Cart