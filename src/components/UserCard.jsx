import React from "react"

 export const UserCard = (props)=>{
  console.log(props.data)
  return (
  <div className="user-card">
       <img
        src={props.data.picture?.large}
        alt={`${props.data.name?.first} ${props.data.name?.last}`}
        className="user-avatar"
      />
      <h3>{props.data.name.first}</h3>
      <p>{props.data.phone}</p>
      <p>{props.data.location.city},{props.data.location.state}</p>
     
  </div>
  )
}