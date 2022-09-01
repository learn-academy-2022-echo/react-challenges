
const Menu = (props) => {
    return (
     <>
    <h1>MENU</h1>
      {props.foodObj.map((currentFood) => {
        return(
          <>
          <ul>
            <li>
            {currentFood.foodname} ${currentFood.price}
            <br/>
            <br/>
            </li>
          </ul>
          </>
        )
      })}  
     </>
    );
  }














export default Menu