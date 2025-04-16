import React from 'react'
import leftArr from "../../assets/round left arrow.png"
import rightArr from "../../assets/round right arrow.png"
import Image from 'next/image'

const Arrows = () => {
  return (
    <div className='flex space-x-2'>
      <Image src={leftArr} alt='leftArrow'/>
      <Image src={rightArr} alt='RightArrow'/>
    </div>
  )
}

export default Arrows
