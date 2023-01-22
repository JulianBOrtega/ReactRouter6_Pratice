import React from 'react'
import logo from '../assets/logo.png'

const st_wrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '25px',
  width: '97.5vw',
  height: '500px',
  margin: '75px 15px 0px 15px',
  backgroundColor: 'rgba(0, 0, 0, 0.603)',
  padding: '25px',
  borderRadius: '25px'
}
const st_logo = {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontSize: '25px'
}
const imgSize = 100
const st_logo_img = {
    width: imgSize + 'px',
    height: imgSize + 'px'
}
const st_logo_txt = {
  fontSize: '48px'
}

const About = () => {
  return (
    <div style={st_wrapper}>
      <h1>About this website</h1>
      <figure style={st_logo}>
        <img src={logo} alt="logo" style={st_logo_img} />
        <p style={st_logo_txt}>AnimuPNG</p>
      </figure>
      <p style={{textAlign: 'center'}}>
        AnimuPNG is no more than just a website made to practice <b>React Router 6</b>, and that's all. <br /><br />
        Everything was made in a totally not-serious way and just for the sake of learning and having fun. <br />
        I don't own nor know the artists involucrated in the work of any of the images used in this website either. <br /> 
        I just write code... Sorry. <br /> <br />
        That said, thank you for reading and visiting this lonely place! <br />
        Save an image of your choice to take with you as a memento of this encounter~ 
      </p>
    </div>
  )
}

export default About