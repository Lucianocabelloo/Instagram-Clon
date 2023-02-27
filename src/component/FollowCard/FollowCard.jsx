import React from 'react'
import { useState } from 'react'
import "./FollowCard.css"
// Trae los props desde App.jsx, donde estan el array con los usuarios
const FollowCard = ({userName,Name,initialFollowing}) => {
    // Fue lo primero que hice, para tener los estados de seguido y no seguido
    const [Follow, setFollow] = useState(initialFollowing)

    const text = Follow ? "Following" : "Follow"

    const ButtonisFollowing = Follow 
    ? 'FollowCard-is-Following'
    : 'FollowCard-Follow'

    const isFollow = () =>{

        setFollow(!Follow)
    }


  return (
    <>

    <section className='FollowCard-Container'>
        <article className='FollowCard-Img'>

            <img src="https://unavatar.io/midudev" alt="Foto de Perfil Seguir" />

        </article>
        <article className='FollowCard-Info'>

        <strong>{userName}</strong>
            <p>{Name}</p>

        </article>
        <article className='FollowCard-Follow'>

            <button className={ButtonisFollowing} onClick={isFollow}>
            <span className='FollowText'>{text}</span>
            <span className='StopFollow'>Unfollow</span>
            </button>

        </article>
    </section>
    </>
  )
}

export default FollowCard