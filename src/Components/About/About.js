import React from 'react'
import './About.css'
import theme_pattern from'../../Assests/theme_pattern.svg'
import profile_img from '../../Assests/profile_img.svg'



const About = () => {
  return (
    <div id='about' className='about'>
       <div className='about-title'>
          <h1>About me</h1>
          <img src={theme_pattern} alt=" " />
       </div>
       <div className='about-section'>
           <div className='about-left'>
               <img src={profile_img} alt=""/>
           </div>
           <div className='about-right'>
               <div className='about-para'>
                   <p> I am an experienced Frontend Developer with over 1.5 years of relevant knowledge in the field.</p>
                   <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project. </p>
               </div>
               <div className='about-skills'>
                    <div className='about-skill'>
                         <p>HTML 5 & CSS 3</p>
                         <hr style={{width:"50%"}}/>
                    </div>
                    <div className='about-skill'>
                         <p>ReactJs</p>
                         <hr style={{width:"70%"}}/>
                    </div>
                    <div className='about-skill'>
                         <p>JavaScriprt</p>
                         <hr style={{width:"60%"}}/>
                    </div>
                    <div className='about-skill'>
                         <p>Redux & Bootstrap</p>
                         <hr style={{width:"50%"}}/>
                    </div>
               </div>
           </div>
       </div>
       <div className='about-achievements'>
           <div className='about-achievement'>
                  <h1>1.5+</h1>
                  <p>YEARS OF EXPERIENCE</p>
           </div>
           <hr/>
           <div className='about-achievement'>
                  <h1>4+</h1>
                  <p>PROJECTS COMPLETED</p>
           </div>
           <hr/>
           <div className='about-achievement'>
                  <h1>4+</h1>
                  <p>HAPPY CLIENTS</p>
           </div>
       </div>
 </div>
  ) 
}

export default About
