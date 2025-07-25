import React,{useContext, useState,useEffect} from 'react'
import NoteContext from '../context/notes/noteContext'
const About = () => {
  const a = useContext(NoteContext)
  useEffect(()=>{
    a.update();
  },[])
  return (
    <div>
      this is about {a.state.name} and he/she is in class {a.state.class}
      {console.log(a.name)}
    </div>
  )
}

export default About;