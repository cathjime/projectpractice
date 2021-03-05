import React, { useState } from 'react'
import File from '../Components/File'

function Folder (props){

    return (
        <>
        <span onClick={props.clickHandler}> {props.name} </span>
        <div style={{ marginLeft:"71 px" }} > 
        </div>
        <File name={"Music"}/>
        
        </>
    )

}

export default Folder