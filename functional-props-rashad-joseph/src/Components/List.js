import React from "react"


const List = (props) => {
    
        return (
            <>
            <p>Menu item: {props.menu.name}</p>
            {props.menu.selected && <p>Ordered:</p>}
            <button onClick={props.selectedMenu(props.index)}>Order Item</button>
            </>
        )
    }


export default List;