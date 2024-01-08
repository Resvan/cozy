import React from 'react'
import AnimatedText from './AnimatedText'

export default function Value() {
  return (
    <div className="container mx-auto mt-40">
        <AnimatedText text='360&deg; VALUE' className='text-9xl font-black uppercase text-center' duration={0.4} />
        <AnimatedText text='Every day, we embrace change and create value for all our stakeholders, in every part of the world.' className='text-5xl font-medium text-center' duration={0} />
    </div>
  )
}
