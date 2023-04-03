import React from 'react'
import Post from './Post'

export default function UXUI() {
  return (
    <div>
      <Post
          format='1'
          title='unwind'
          description='A app that helps find a local pet buddy for your pet.'
          cover1={'https://drive.google.com/uc?export=view&id=1byngWn6SIMxsUrazqm41xrqhia6-1kfK'}
          cover2={'https://drive.google.com/uc?export=view&id=1IFAWydGA6bZUyv4iSgnmsUG7RkFz5fTS'}
          link={'Unwind'}
      />
      <div className='div-block'/>
      <Post
          // format='1'
          title='Vroom Vroom Travel App'
          description='Vroom Vroom: Engage the kids on your trip and travel stress-free.'
          cover1={'https://drive.google.com/uc?export=view&id=1MI8tw4fVfN_20fr6NoBVYpVNPCZAcas7'}
          cover2={'https://drive.google.com/uc?export=view&id=1xZcj79pdBlEqPELDA9PtS3Q_wW1wim8u'}
          link='Vroom'
      />
      <div className='div-block'/>
      <Post
          format='1'
          title='CMF GO'
          description='A smart CMF (color, materials, finish) learning system that helps designers learn CMF in a more effective way!'
          cover1={'https://drive.google.com/uc?export=view&id=1CYsFB1dWPRriqD_rhFRslidtF0FYau03'}
          cover2={'https://drive.google.com/uc?export=view&id=1e-XS2h4QKQsXz6LZdpbfYSmfe60yPkK9'}
          link='https://www.behance.net/gallery/100000001/Backpack-Design'
      />
    </div>
  )
}
