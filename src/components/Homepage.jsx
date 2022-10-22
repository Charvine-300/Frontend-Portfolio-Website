import '../assets/styles/homepage.scss'
import Shopper from '../assets/images/project_shopper.jpeg'
import IPFind from '../assets/images/project_ipfind.jpeg'
import Arrow from '../assets/images/learn_more.png'
import Lendsqr from '../assets/images/project_lendsqr.jpeg'
import AllProjects from '../assets/images/all_projects.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";



const Homepage = () => {

  return ( 
    <>
      <div className="about-wrapper">
        <h2> 
          Helping companies build better, scalable software
        </h2>
        <p className="description">
          I am a Frontend Developer with 2 years of experience in
          building software with the following frontend 
          technologies, React.js, Next.js, Redux and many others.
        </p>
        <a target='_blank' href="https://drive.google.com/file/d/1gnrV1o5LCe1fWDWCMsr9USrobGLdziZ-/view?usp=sharing">
          <button className="in-touch"> My Resume </button>
        </a>
      </div>

      {/* My Projects */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        /*autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}*/
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "1024": {
            slidesPerView: 3,
            spaceBetween: 0,
          }
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        id='project-slider'
      >
        <SwiperSlide>
          <a className="project" target='_blank' title='View live project' href='https://qshop-assess.vercel.app/'>
            <img src={Shopper} alt="Project Display" className='project-display' />
            <div className="project-link">
              <h3> Shopper </h3>
              <img src={Arrow} alt="Link to live project" />
            </div>
            <p>
              An eStore for the Shopper brand, a fictional 
              retail company that provides a wide range of
              products and services to customers all over 
              the globe. Built with React.js, Bulma, Vite frontend tool,
              and Redux Toolkit.
            </p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="project" target='_blank' title='View live project' href='https://ipfind-tracker.vercel.app/' >
            <img src={IPFind} alt="Project Display" className='project-display' />
            <div className="project-link">
              <h3> IPFind </h3>
              <img src={Arrow} alt="Link to live project" />
            </div>
            <p>
              A web application built to track IP addresses. Providing information 
              like the location, Internet Service Provider and Timezone of the 
              aforementioned IP address. Built with Next.js, Vanilla CSS,
              and Axios.
            </p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="project" target='_blank' title='View live project' href='https://chidera-ezenwekwe-lendsqr-fe-test.vercel.app'>
            <img src={Lendsqr} alt="Project Display" className='project-display' />
            <div className="project-link">
              <h3> Lendsqr </h3>
              <img src={Arrow} alt="Link to live project" />
            </div>
            <p>
              An application that powers lenders to build, 
              launch, and scale their digital lending business across 
              multiple channels, at the lowest cost. Built with React.js,
              Typescript, React Context API and SASS.
            </p>
          </a>
        </SwiperSlide>
      </Swiper>

      {/* Button to view projects */}
      <Link to='/projects'>
        <button className="view-all">
          View All Projects
          <img src={AllProjects} alt="Link to all projects" />
        </button>
      </Link>

      {/* Email address */}
      <div className="email-wrapper">
        <div className="about-wrapper">
          <h2> Interested in working with me? </h2>
          <p className="description">
            I'm available for hire. <br />
            If you have a project you'd like to discuss, 
            shoot me an email or hit me up on any of the social
            media platforms listed below and a response is guaranteed
            within 24-48 hours of receiving your message.
          </p>
          <a href="mailto:marvinezenwekwe@gmail.com">
            <button className="in-touch"> Contact Me! </button>
          </a>
        </div>
      </div>
    </>
  );
}
 
export default Homepage