import React, { useState } from 'react'

const Name = () => {

    const [data, setData] = useState("");

    return (
        <>
            <h2>My Name is Yuvraj Ganshi</h2>
            <label htmlFor="name">Name</label>
            <input 
            type='text'
            data-testid="name" 
            id='name' 
            placeholder='this is Text Field' 
            className='input-text' 
            value={data}
            onChange={(e) => setData(e.target.value)}
            />
            <br />

            {/* <button onClick={() => setData("Updated Data")}>GetData</button>
            <p>{data}</p> */}
        </>
    )
}

export default Name