import React from 'react'

export default function Post(props) {
  return (
    <a className='post-main' href={props.link} >
        <img className='post-image' src={props.image} alt={props.title} />
        <div className='post-text'>
            <div className='post-title'>{props.title}</div>
            <div className='post-description'>{props.description}</div>
        </div>
    </a>
  )
}