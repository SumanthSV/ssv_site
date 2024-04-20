import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import gif from  "../assets/globe.gif"

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    return (
        <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>
                <div style={{position: 'relative'}}> 
                    <img src={gif} alt="gif" style={{position: 'absolute', top: 0, left: 0, height:500, width: '100%',opacity:0.2}} />

                    <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'> I embarked my journey as a B.E Information Science & Engineering student at GM Institute of technology in 2024. Along the way, I fearlessly explored various fields, including Problem solving and Web development. I delved into the world of cutting-edge technologies, such as Java, React, javascript, and Python. At present, I serve FORUM-EXOTIC as the forum representative and holds the significant responsibility. </p> 

                    <br />

                     <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'> In a constant pursuit of sharing knowledge and fostering growth, With a commitment to personal development and a drive for making a positive impact within the tech community. </p> 
                </div>
                {/* <br />
                    space for experience
                 */}
                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>


                    <AiOutlineCloudDownload />
                    <a href="...\src\assets\Sumanth_SV_Resume.pdf" download>Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default About