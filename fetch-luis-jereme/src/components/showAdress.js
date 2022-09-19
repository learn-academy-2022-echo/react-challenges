import React from 'react'

const showAddress = () => {
fetch("https://ipapi.co/json/")
.then(response => response.json())
.then(payload => console.log(payload))
.catch(errors => console.log(errors))
}

export default showAddress