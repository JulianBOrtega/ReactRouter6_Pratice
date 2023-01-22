import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import data from '../assets/data';

const st_wrapper = {
    width:'100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '75px'
}
const st_img = {
    maxHeight: '65vh'
}

const ImageDetail = () => {
    const { imgId } = useParams();
    const img = data.find(img => img.id == imgId);
    
    if(!img) return <Navigate to='/404'/>
    else return (
        <div style={st_wrapper}>
            <img src={img.img} alt="img" style={st_img} />
            <hr style={{width: '50vw'}} />
            <h2>{img.title}</h2>
            <p>Save with <b>'Right click' → 'Save Image As...'</b></p>
            <Link to='/images'>Return</Link>
        </div>
    )
}

export default ImageDetail