import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet ligula in tellus tincidunt elementum. 
                Fusce cursus ante id ipsum volutpat sollicitudin. Proin quis interdum ex. Nunc porta sem nec ligula vehicula, et iaculis nunc gravida. 
                Sed molestie mi eu vehicula efficitur. Praesent libero nisi, ultricies ac orci sit amet, faucibus mattis orci.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet ligula in tellus tincidunt elementum. 
                Fusce cursus ante id ipsum volutpat sollicitudin. Proin quis interdum ex. Nunc porta sem nec ligula vehicula, et iaculis nunc gravida. 
                Sed molestie mi eu vehicula efficitur. Praesent libero nisi, ultricies ac orci sit amet, faucibus mattis orci.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet ligula in tellus tincidunt elementum. 
                 Fusce cursus ante id ipsum volutpat sollicitudin. Proin quis interdum ex. Nunc porta sem nec ligula vehicula, et iaculis nunc gravida. 
                 Sed molestie mi eu vehicula efficitur. Praesent libero nisi, ultricies ac orci sit amet, faucibus mattis orci.</p>
          </div>
      </div>

      
    </div>
  )
}

export default About
