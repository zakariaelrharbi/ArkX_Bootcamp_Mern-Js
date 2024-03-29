import React from 'react'
import myimage from '../assets/1707932595435.jpeg'

const Card = () => {
  return (
    <div className="p-5 m-2.5 border  border-black rounded shadow-md shadow-black text-center max-w-64 ">
        <div className="flex justify-center "> 

      <img src={myimage} alt="" width="400px" height="100px" className=" hover:scale-105 max-w-30 rounded-full"/>
        </div>
      <h2 className="text-sky-600 text-2xl "> zakaria</h2>
      <p>I'm Full stack developer and Gamer</p>
    </div>
  )
}

export default Card
