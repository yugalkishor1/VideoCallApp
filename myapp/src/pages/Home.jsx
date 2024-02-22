import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    const [value,setValue] = useState();

    const handle = useCallback( () => {

        navigate(`/call/${value}`)
    },[navigate,value]);  

  return (
    <div>
        <input
        type='text'
        placeholder='Enter room code'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
        <button onClick={handle}>Join</button>
    </div>
  )
}

export default Home