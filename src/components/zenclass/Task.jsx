import React from 'react'
import Navlink from '../Navlink/Navlink'
import { protecdInstance } from '../../services/instance';

function Task() {
    const getTasks =async (e) => {
        e.preventDefault();
        const res = await protecdInstance.get('/task')
        console.log(res.data)
    }
  return (
      <div><Navlink />
          <div>
              <h2>All Submit Tasks</h2>
              <button onClick={getTasks}>click</button>
       </div>
      </div>
  )
}

export default Task