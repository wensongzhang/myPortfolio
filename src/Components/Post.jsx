import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Post(props, imgStyle={}) {

    const navigate = useNavigate()
    //if detected mouse hover, change the color of the post
    //if detected mouse click, open the link
    const [image, setImage] = React.useState(props.cover1);
    const [color, setColor] = React.useState('black');
    // const [temp1, setTemp1] = React.useState(<img src={props.cover1} alt={props.title} className='post-image'style={imgStyle}/>);
    // const [temp2, setTemp2] = React.useState(<img src={props.cover2} alt={props.title} className='post-image'style={imgStyle}/>);

    //write a function to switch image1 and image2
    const switchFormat = () => {
        setImage(props.cover2);
        setColor('white');
    }

    const switchBack = () => {
        setImage(props.cover1);
        setColor('black');
    }

    if(props.format === '1') {
        return (
            <div className='post-main'>
                <div className='post-container' onClick={()=>{ navigate(props.link)}} onMouseOver={ switchFormat } onMouseOut={ switchBack }>
                    <img src={image} alt={props.title} className='post-image'style={imgStyle}/>
                    {/* {image===props.cover1 ? temp1 : temp2} */}
                    <div className='post-text' >
                        <div className='post-title' style={{color: color}} >{props.title}</div>
                        <div className='post-description'>{props.description}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className='post-main'>
                <div className='post-container' onClick={()=>{ navigate(props.link)}}  onMouseOver={ switchFormat } onMouseOut={ switchBack }>
                    <div className='post-text' >
                        <div className='post-title' style={{color: color}}>{props.title}</div>
                        <div className='post-description'>{props.description}</div>
                    </div>
                    <img src={image} alt={props.title} className='post-image' style={imgStyle}/>
                </div>
            </div>
        )
    }
}