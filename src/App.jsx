import React from 'react'
import "./App.css"
import FollowCard from './component/FollowCard/FollowCard'
import Histories from './component/History/Histories'
import NavBar from './component/NavBar/NavBar'
import ProfileCard from './component/ProfileCard/ProfileCard'


const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]
const profile =  {
    Profilename: "Luciano Cabello",
    ProfileUsername: "Lucianocabelloo"
  }


const App = () => {

  
  return (
    <>
    <div className='Container'>
    <NavBar/>

    <section className='Body-Container'>


      <article className='History-Container'>
    {
      users.map(({userName}) => (
        <Histories
        key={userName}
        userName={userName}
        />
        ))
        
      }
      </article>

    <article className='Cards-Container'>
    <ProfileCard userProfile={profile} />
    <h4>Sugerencias para ti</h4>
    {
      users.map(({userName,name,isFollowing}) =>(
        <FollowCard
        key={userName}
        userName={userName}
        initialFollowing={isFollowing}
        Name={name}
        />
        ))
      }
    </article>

    
      </section>
    </div>
    </>
  )
}

export default App