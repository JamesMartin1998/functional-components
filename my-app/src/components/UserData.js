import React from 'react'

function UserData() {
  return (
    <div>
        <h1>{props.isLoaded ? 'Data loaded!' : 'Loading ...'}</h1>
    </div>
  )
}

export default UserData