import React from 'react'

const Empty = ({url, title}) => {
  return (
    <div style={{textAlign:"center"}}>
        <img width={500} src={url} alt="" />
        <h2>{title}</h2>
    </div>
  )
}

export default Empty