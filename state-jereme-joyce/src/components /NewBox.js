import { createElement } from 'react';

const NewBox = () => {

const [box, setBox] = createElement()
const boxClick = () => {
    setBox(count + 1)
}
}

export default NewBox