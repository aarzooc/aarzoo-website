import "./App.css";
import NavigationMenu from "./components/NavigationMenu";
import homeImage from './assets/woman-app-developer.jpg';
import expand from './assets/expand.png';
import aarzooPic from './assets/selfie_og.png';
import milkItImage from './assets/baby.png';
import milkItImageSymp from './assets/IMG_7235.jpg';
import stethoscope from './assets/stetho.png';
import github from './assets/github.png';
import milkitsolution from './assets/milkitsolution.png';
import clip from './assets/clip.png';
import film from './assets/film.png';
import heartware_drawing from './assets/heartware_drawing.png'
import heartware_phone from './assets/heartware_phone.png'
import heartware_sensor from './assets/heartware_sensor.png'
import cancel from './assets/x.png'
import vinyl from './assets/discs.png'
import cochlear from './assets/cochlear.png'
import linkedin from './assets/linkedin.png'
import pdf from './assets/Software_Engineer_Aarzoo_Chennan (2).pdf'
import aarzoo1 from './assets/aarzoo1.jpeg'
import aarzoo2 from './assets/aarzoo2.jpeg'
import aarzoo3 from './assets/aarzoo3.jpeg'
import aarzoo4 from './assets/aarzoo4.jpeg'
import aarzoo5 from './assets/aarzoo5.jpeg'
import aarzoo6 from './assets/aarzoo6.jpeg'
import aarzoo7 from './assets/aarzoo7.jpeg'
import aarzoo8 from './assets/aarzoo8.jpeg'
import aarzoo9 from './assets/aarzoo9.jpeg'
import aarzoo10 from './assets/aarzoo10.jpg'
import CardCarousel from "./components/CardCarousel";
import Modal from 'react-modal'
import React, { useEffect, useState, useRef } from 'react';


function App() {
  const [inView, setInView] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showPopUp, setShowPopUp] = useState(true);
  const [showMilkITPopUp, setShowMilkITPopUp] = useState(false);
  const [showHeartwarePopUp, setShowHeartwarePopUp] = useState(false);
  const [showRecordPopUp, setShowRecordPopUp] = useState(true);
  const [showCochlearPopUp, setShowCochlearPopUp] = useState(true);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);



  const openModal = (popUpType) => {
    if (popUpType === 'milkIt') setShowMilkITPopUp(true);
    if (popUpType === 'heartware') setShowHeartwarePopUp(true);
    if (popUpType === 'record') setShowRecordPopUp(true);
    if (popUpType === 'cochlear') setShowCochlearPopUp(true);
  }

  const closeModal = (popUpType) => {

    if (popUpType === 'milkIt') setShowMilkITPopUp(false);
    if (popUpType === 'heartware') setShowHeartwarePopUp(false);
    if (popUpType === 'record') setShowRecordPopUp(false);
    if (popUpType === 'cochlear') setShowCochlearPopUp(false);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    },
    { rootMargin: "-300px" }

  );
    if (ref.current) {
      observer.observe(ref.current); // Observe the element
    }

    // observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      console.log("BEEEEP")
      ref.current.querySelectorAll("div").forEach((el) => {
        console.log("el: ", el);
        el.classList.add("slide-in");
      });
    } 
    // else {
    //   ref.current.querySelectorAll("div").forEach((el) => {
    //     el.classList.remove("slide-in");
    //   });
    // }
  }, [isIntersecting]);


  return (
    <div className='gradient-background' >
      <div>
        <NavigationMenu />
      </div>
      <div id="home" className="section-container">
        <h3 className='home-header-3'> Hey there! I am</h3>
        <h1 className='home-header-1'> Aarzoo Chennan</h1>
        {/* <img className='cube' src={cube} alt="Aarzoo coding away"/> */}
        <div className="home-header-2-container">
          <span className="home-header-2 pop-1">and </span>
          <span className="home-header-2 pop-2">I </span>
          <span className="home-header-2 pop-3">build </span>
          <span className="home-header-2 pop-4">products </span>
          <span className="home-header-2 pop-5">aiming </span>
          <span className="home-header-2 pop-6">to </span>
          <span className="home-header-2 pop-7">improve </span>
          <span className="home-header-2 pop-8">people's </span>
          <span className="home-header-2 pop-9">health.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: 1 }}>
            <p className='home-paragraph'>I’m a software engineer based in Toronto, Canada, with a
              passion for creating impactful software solutions in healthcare. I’ve played a key role
              in major releases for several leading services in the industry, aiding thousands of patients. </p>
          </div>

          <div class="circle circle1"></div>
          <div style={{ flex: 1 }}>
            <img className='home-image' src={homeImage} alt="Aarzoo coding away" />
          </div>
        </div>
      </div>

      <div id="about-me" className="about-me-outer-container">
        <h1 className="experience-title">ABOUT ME</h1>
        {/* <main ref={ref}> */}
        <main ref={ref}>
        <div className="about-me-inner-container">
          <div className="about-me-image">
            <img className='aarzoo-pic' src={aarzooPic} alt={'Aarzoo at her happiest'}></img>
          </div>
          <div className='about-me-container'>
            <p className='about-paragraph'>Currently, I work as a full-stack software engineer at <span style={{ fontWeight: 600 }}>Myant Health</span>,
              focusing on the development of their cardiac monitoring system. I build key features for their
              physician portal and mobile app, working on both the front end and back end.
              <br></br> <br></br>
              The technologies that I frequently work with include: </p>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
              <ul className='about-list'>
                <li>React</li>
                <li>React Native</li>
                <li>GraphQL</li>
                <li>Python</li>
                <li>PostgresSQL</li>
              </ul>
              <ul className='about-list'>
                <li>Node.js</li>
                <li>AWS</li>
                <li>FastAPI</li>
                <li>Matlab</li>
                <li>Signal Processing</li>
              </ul>
            </div>
          </div>
          </div>
          </main>
        {/* </main> */}
      </div>

      <div id="experiences" className="section-container">
                    <h1 className="experience-title">EXPERIENCE</h1>
                  <CardCarousel />
      </div>

      <div id="projects" className="project-container">
        <h1 className="experience-title">PROJECTS</h1>
        <Modal
          isOpen={showMilkITPopUp}
          onRequestClose={() => closeModal('milkIt')}
          contentLabel="Example Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
          closeTimeoutMS={200} // optional: for smooth transition when closing the modal
        >
          <div className="modal-container" >
            <button className='cancel-button' onClick={() => closeModal('milkIt')}>
              <img className="cancel" src={cancel}></img>
            </button>
            <h2 className="modal-title">MilkIT!</h2>
            <div  className="modal-inner-container">
              <img className="modal-image-milkit" src={milkItImageSymp}></img>
              <div>
                <h4 className="modal-headers">Objective</h4>
                <p className="modal-paragraph">1.3 million women and girls with HIV become pregnant each year. If not treated with antiretroviral therapy,
                  there is up to 32% chance of transmitting the virus to their child. The most common form of mother-to-child transmission is through breastfeeding.
                  Currently, there are no options for HIV-positive mothers to breastfeed their children without the risk of transmission. As a result, the child misses out on the benefits
                  of breastfeeding, such as the antibodies and nutrients.
                </p>
                <p className="modal-paragraph">Our team attempted to design a medical device to be used by HIV-positive,
                  breastfeeding mothers for the prevention of perinatal transmission by deactivating the virus with UV-C
                  light while preserving the taste, nutritional value and immunity aspects of breastmilk.</p>
              </div>
            </div>
            <div>
              <div className="modal-inner-container">
                <div>
                  <h4 className="modal-headers">Solution</h4>
                  <p className="modal-paragraph">The medical device that was designed and prototyped consisted of an adapted breast pump with
                    a UV-C light source in the middle to treat the breastmilk. The unit in the bottom would store the treated breastmilk and can be removed
                    and fed to the baby like a normal baby bottle.
                  </p>
                  <p className="modal-paragraph">Many design choices were made in consideration of safety regulations, and optimal treatment of the milk
                    to ensure deactivation of the virus and maintenance of other nutrients such as antibodies, proteins and fats etc.
                    Additionally, our device was designed to be portable, easy to use and cost-effective to accomodate for our target population.
                  </p>
                </div>
                <div>
                  <img className="modal-image-milkit-2" src={milkitsolution}></img>
                </div>
              </div>
            </div>
            <h4 className="modal-headers">Achievements</h4>
            <p className="modal-paragraph">
              Initially created from a capstone project, the team decided to pursue the project as venture when we enrolled in a number of pitch competitions.
              As apart of the Velocity Upstart program, the team was awarded $15,000 to further build and test medium to high fidelity prototypes.
              Furthermore, we took part of the Velocity 5k pitch competition and we were awarded the
              <a href='https://www.velocityincubator.com/programs-events/vpc#past-winners'> People's Choice</a>  award. Within the engineering faculty, we were given
              an award that would advance the UN sustainability goals as we aimed to reduce hunger for the child, improve health and wellbeing for the child and mother
              as well as improve gender equality for providing increased options for womens health, an often underserved area.</p>

            <p className="modal-paragraph">Link to project poster
              <a href='https://drive.google.com/file/d/1MAsj6F9sm00jcNbw3xK_gmgMlV0fv6NO/view?usp=sharing'> here</a> if you are curious to know more!</p>
          </div>
        </Modal>

        <Modal
          isOpen={showHeartwarePopUp}
          onRequestClose={() => closeModal('heartware')}
          contentLabel="Example Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
          closeTimeoutMS={200} // optional: for smooth transition when closing the modal
        >
          <div className="modal-container" >
            <button className='cancel-button' onClick={() => closeModal('heartware')}>
              <img className="cancel" src={cancel}></img>
            </button>
            <h2 className="modal-title">Heartware</h2>
            <h4 className="modal-headers">Objective</h4>
            <p className="modal-paragraph">With the growth in the proportions of the adult and elderly population,
              as well as the emergence of chronic diseases and syndromes because of the ups and downs in lifestyle,
              there has been a necessity to monitor and analyze the health status of individuals in their daily living
              to avoid fatal conditions. The adoption of wireless health monitoring is encouraging to boost the quality
              of lifespan for chronic sick patients and old people. Moreover, unnecessary
              hospitalizations can be avoided by remote health monitoring which reduces the cost and increases
              the quality of care. Heart auscultation is popular in clinics and have been a very important method for the
              early diagnosis of heart disease by capturing cardiac murmurs. Cardiac murmurs can expose many pathological
              cardiac defects such as heart failure, arrhythmia, valve disease, cardiomyopathy, etc.
              The heart sound signal contains a lot of heart information, giving a preliminary suggestion for further diagnosis.
            </p>
            <p className="modal-paragraph">Our team designed a wearable to be used by pregnant mothers
              living in remote locations that are at risk for developing heart conditions over the course of their pregnancy. </p>
            <div>
              <div>
                <h4 className="modal-headers">Solution</h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div  className="modal-inner-container">
                  <img className="modal-image-heartware" src={heartware_drawing}></img>
                  <img className="modal-image-heartware-2" src={heartware_sensor}></img>
                  <p className="modal-paragraph">The medical device that was designed and prototyped consisted of a bra with built in audio sensors that would capture the heart sounds of the mother.
                    These heart sounds would be collected by the transciver and sent to the mothers phone where the data would be stored and sent to the cloud. This data would be later processed and
                    analyzed by a machine learning model to detect any abnormalities. The audio signals and model diagnosis would be available to a clinician for further analysis.
                    <br /> <br />The sensors were stragetically positioned near the valves of the heart to obtain the best quality of heart sounds. The transciver would be placed in the back of the bra to avoid signal interference with the sensors.
                    A bra was selected as the wearable of choice as it is a common undergarment worn amongst pregnant women.
                  </p>
                </div>
                <div  className="modal-inner-container">
                  <p style={{ marginTop: '80px', margin: '70px' }}>The UI of the mobile application was designed using figma. The app stack consisted of React Native front-end and a Python back-end. The back-end was responsible for processing the audio signals and running the machine learning model to detect any abnormalities. The front-end was responsible for capturing the audio signals and indicating to the user that a successful
                    capture and transfer of data occurred.
                  </p>
                  <img className="modal-image-heartware-3" src={heartware_phone}></img>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <div className="flip-card-container">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='flip-card-titles'>MilkIT!</div>
                <img className="project-images" src={milkItImage}></img>
              </div>
              <div className="flip-card-back">
                <button className="expand-button" onClick={() => openModal('milkIt')}>
                  <img className="expand" src={expand}></img>
                </button>
                <h1 className="flip-card-back-title">MilkIT!</h1>
                <p className="flip-card-back-paragraph">We created a medical device to be used by HIV-positive, breastfeeding mothers for the prevention of perinatal transmission by deactivating the virus with UV-C
                  light while preserving the taste, nutritional value and immunity aspects of breastmilk.
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='flip-card-titles'>Heartware</div>
                <img className="project-images" src={stethoscope}></img>
              </div>
              <div className="flip-card-back">
                <button className="expand-button" onClick={() => openModal('heartware')}>
                  <img className="expand" src={expand}></img>
                </button>
                <h1 className="flip-card-back-title">Heartware</h1>
                <p className="flip-card-back-paragraph">We designed a wearable to be used by pregnant mothers living in remote locations that are at risk for developing heart conditions that can be diagnosed by heart auscultations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card-container">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='flip-card-titles'>Album Classifier</div>
                <img className="project-images" src={vinyl}></img>
              </div>
              <div className="flip-card-back">
                <h1 className="flip-card-back-title">Album Cover Classifier</h1>
                <p className="flip-card-back-paragraph">The goal of this project was to create a classifier that can determine the genre of an album
                  based on the album cover. The model was trained on a dataset of 18,584 album covers and due to the nature of the classification problem,
                  it achieved an accuracy of ~25%.<br /> Check out the project <a href='https://github.com/aarzooc/album_classifier/blob/main/Album_Cover_Classifier.ipynb' target='_blank' >here</a>!
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="project-images" src={cochlear}></img>
                <div className='flip-card-titles'>Cochlear Implant</div>
              </div>
              <div className="flip-card-back">
                <h1 className="flip-card-back-title">Cochlear Implant</h1>
                <p className="flip-card-back-paragraph">The objective of this project was to develop the signal processer for a cochlear implant. This involves attenuating certain signals and filtering
                  out unwanted frequencies. <br /> Check out the project <a href='https://github.com/aarzooc/cochlear_implant' target='_blank' >here</a>!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="contact-container">
        <div className="contact-text">
        <p className="contact-paragraph">Feel free to connect with me :)</p>
        <div className="socials-container">
          <a href="https://github.com/aarzooc?tab=repositories" target="_blank">
            <img class="icons" src={github}></img>
          </a>
          <a href="https://www.linkedin.com/in/aarzoo-chennan-b15455177/" target="_blank">
            <img class="icons" src={linkedin}></img>
          </a>
          <a href={pdf} target="_blank" rel="noreferrer">
            <img class="icons" src={clip}></img>
          </a>
        </div>
        <p className="contact-paragraph">
          I love to discuss all things at the intersection of health and technology. Reach out if you have any questions or just want to chat!
        </p>
        <p className="contact-paragraph">
          When I am not doing ~engineering things~ I like to dance, travel, gym and cook!  →
          </p>
          <img className='film' src={film} alt="" />
        </div>
        <div className="gallery-wrapper">
          <div className="gallery-background">
        <div class="gallery">
          <img src={aarzoo7} alt="the beach"/>
          <img src={aarzoo6} alt="the beach"/>
          <img src={aarzoo9} alt="the beach"/>
          <img src={aarzoo5} alt="the beach"/>
          <img src={aarzoo4} alt="the beach"/>
          <img src={aarzoo2} alt="the beach"/>
          <img src={aarzoo1} alt="the beach"/>
          <img src={aarzoo8} alt="the beach"/>
          <img src={aarzoo10} alt="the beach"/>
          <img src={aarzoo3} alt="the beach"/>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}


export default App;