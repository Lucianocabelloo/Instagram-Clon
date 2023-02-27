import React from 'react'
import "./ProfileCard.css"

const ProfileCard = ({userProfile}) => {

    
  return (
        <section className='ProfileCard-Container'>
        <article className='ProfileCard-Img'>
            <img src="https://unavatar.io/midudev" alt="Foto De Perfil" />
        </article>
        <article className='ProfileCard-Info'>
            <strong>{userProfile.Profilename}</strong>
            <p>{userProfile.ProfileUsername}</p>
        </article>
        <article className='ProfileCard-Change'>
            <button>Change</button>
        </article>
    </section>

  )
}

export default ProfileCard