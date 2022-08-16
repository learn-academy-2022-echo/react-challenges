import React, {useState} from 'react'



const ColorBox = () => {
    const [colors, setColors] = useState('white')
    const colorArr = ['white', 'red', 'orange', 'yellow', 'green', 'skyblue', 'purple', 'pink', 'coral', 'lightseagreen']

    const boxClick = () => {
        const randomCol = Math.floor(Math.random() * colorArr.length)
        setColors(colorArr[randomCol])
    }

    return (
        <>
        <div className='box' onClick = {boxClick} style={{backgroundColor: colors}}>
            <p>{colors}</p>
        </div>
        </>
    )
}

export default ColorBox;