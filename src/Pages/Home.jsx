import React from 'react'
import { Link } from 'react-router-dom'
import data from '../assets/data';

const st_wrapper = {
  width: '100%',
  height: '100%',
  marginTop: '75px'
}
const st_title = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  backgroundColor: 'rgba(0, 0, 0, 0.603)',
  fontSize: '25px',
  textAlign: 'center',
  padding: '55px'
}
const st_imgList = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '50px',
  margin: '25px 0px 25px 0px',
  backgroundColor: 'rgba(0, 0, 0, 0.603)',
  width: 'inherit',
  padding: '5px'
}
const st_img = {
  maxWidth: '100px',
  maxHeight: '150px'
}

const Home = () => {

  let randomIndexes = [0, 1, 2, 3, 4];

  function randomizePics()
  {
    const max = data.length;
    randomIndexes = randomIndexes.map(() => 
    {
      let r = Math.floor(Math.random() * max)
      while(randomIndexes.includes(r) && randomIndexes.length < data.length)
      {
        r = Math.floor(Math.random() * max);
      }
      return r
    })
  }

  randomizePics();

  return (
    <div style={st_wrapper}>
      <div style={st_title}>
        <h1>ANIME PICTURES PNG WITHOUT BACKGROUND</h1>
        <h4>Because if you searched picture .png is probably</h4>
        <h4>because you need one with a transparent background</h4>
      </div>

      <div style={st_imgList}> 
        {
          randomIndexes.map((randomIndex, i) => 
            {
              return <Link to={`/images/${data[randomIndex].id}`}>
                <img src={data[randomIndex].img} alt={'img-' + i} style={st_img}/>
              </Link>
            })
        }
      </div>
    </div>
  )
}

export default Home