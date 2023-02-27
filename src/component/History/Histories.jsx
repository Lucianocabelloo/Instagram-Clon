import React, { useState } from 'react'
import "./Histories.css"

const Histories = ({userName}) => {

    const [MejoresAmigos, setMejoresAmigos] = useState(false)

    const BffClassName = 
    MejoresAmigos
    ? "BffActive Histories-img"
    : "BffDisactive Histories-img"
    
    const HandleClick = () => {

        setMejoresAmigos(!MejoresAmigos)
    }


  return (
    <section className=''>
        <article className='Histories-Container'>
           <img  onClick={HandleClick} className={BffClassName} src="https://unavatar.io/midudev" alt="Foto Historia" />
        </article>
        <article className='Histories-User'>
            <p>{userName}</p>
        </article>
    </section>
    )
}

export default Histories