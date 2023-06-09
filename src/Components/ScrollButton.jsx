import React, {useState} from 'react';
// import styled from 'styled-components';
import { FaArrowCircleUp } from 'react-icons/fa';
// import { Button } from './Styles';

// Button = styled.div`
//    position: fixed; 
//    width: 100%;
//    left: 50%;
//    bottom: 40px;
//    height: 20px;
//    font-size: 3rem;
//    z-index: 1;
//    cursor: pointer;
//    color: green;
// `
  
export default function ScrollButton() {
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className='scroll-button-container'>
        <FaArrowCircleUp className='scroll-button' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />
    </div>
  );
}
  