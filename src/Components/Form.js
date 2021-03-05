import React, { useState } from 'react' 

function Form() {
    const [changeVal, setChangeVal] = useState("")

    let changeHandler = (event) => {
        setChangeVal(event.target.value)
        console.log(changeVal)
    }

    return (
        <>
        <h3>Howdy Folx</h3>
        <form>
            <label>
                Name:
                <input type="text" name="name" onChange={changeHandler}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
        </>
    )
}

export default Form