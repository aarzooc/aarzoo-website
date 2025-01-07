import React, { useState, useEffect, useRef } from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import './CardCarousel.css';

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  cellAlign: "center",
  freeScroll: true,
  fade: true

};

const CardCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isViewing, setIsViewing] = useState(false);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const ref1 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsViewing(entry.isIntersecting);
    },
    { rootMargin: "-300px" }

  );
    if (ref1.current) {
      observer.observe(ref1.current); // Observe the element
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    console.log("ref1.current: ", ref1.current);
  }, [ref1]);

  useEffect(() => {
    if (isViewing) {
      ref1.current.querySelectorAll("h2,h5,h4,p,li").forEach((el) => {
        console.log("2 el: ", el);
        el.classList.add("slide-in");
      });
    } 
    // else {
    //   ref.current.querySelectorAll("div").forEach((el) => {
    //     el.classList.remove("slide-in");
    //   });
    // }
  }, [isViewing]);


  return (
    <main ref={ref1}>
    <Flickity
      className={"carousel"}
      elementType={"div"}
      options={flickityOptions}
      // disableImagesLoaded={true}

      static
      flickityRef={c => c && c.on('select', () => handleSelect(c.selectedIndex))}
    >
      <div className={`card ${selectedIndex === 0 ? 'selected' : ''}`}>
        <div className="top-bar"></div>
        <div className="red-circle"></div>
        <div className="yellow-circle"></div>
        <div className="green-circle"></div>

        <h2 className="experience-answers">Full Stack Software Developer @ <span style={{ fontWeight: '600', color:'#EA5A28' }}>Myant</span></h2>
        <h5 className="experience-time">Sept`23 - Now</h5>
        <h4 className="experience-headers">technology</h4>
        <p className="experience-technologies">React • React Native • FastAPI • PostgresSQL • Kubernetes • AWS</p>

        <h4 className="experience-headers">description</h4>
        <ul className="experience-description">
          <li>Developed a high-traffic physician portal, leveraging React for dynamic user interfaces, FastAPI to streamline data handling, and PostgresSQL and Kubernetes for a scalable, high-performance infrastructure.</li>
          <li>Engineered a user-centric React Native mobile app with ECG and Bluetooth integration, enhancing real-time data capture and expanding the active user base from 50 to over 7,000.</li>
          <li>Productized data science algorithms by converting Python scripts to JavaScript, seamlessly integrating them across front and backend systems for optimized performance.</li>
        </ul>
      </div>
      <div className={`card ${selectedIndex === 1 ? 'selected' : ''}`}>

        <div className="top-bar"></div>
        <div className="red-circle"></div>
        <div className="yellow-circle"></div>
        <div className="green-circle"></div>
        <h2 className="experience-answers">Software Engineer Intern @ <span style={{ fontWeight: '600' , color:'#EA5A28'}}>Corvista Health</span></h2>
        <h5 className="experience-time">Jan`22 - Aug`22</h5>
        <h4 className="experience-headers">technology</h4>
        <p className="experience-technologies"> Typescript • RestAPI • Tensorflow • AWS SageMaker </p>

        <h4 className="experience-headers">description</h4>
        <ul className="experience-description">
          <li>Preprocessed and visualized phonocardiogram data, contributing to the R&D department in their development for novel diagnostic
            methods of heart auscultations for cardiovascular conditions.
          </li>
          <li>Developed and deployed an in-house email notification system for the clinical team using AWS
            Lambdas, streamlining the tracking of participant data and enhancing communication efficiency
          </li>
          <li>Engineered robust RestAPIs and responsive front-end components in React for an app that
            displayed 3D visualization of ECG data
          </li>
        </ul>
      </div>
      <div className={`card ${selectedIndex === 2 ? 'selected' : ''}`}>

        <div className="top-bar"></div>
        <div className="red-circle"></div>
        <div className="yellow-circle"></div>
        <div className="green-circle"></div>
        <h2 className="experience-answers">Engineering Research Intern @ <span style={{ fontWeight: '600', color:'#EA5A28' }}>Healthcare Systems R&A</span></h2>
        <h5 className="experience-time">May`21 - Aug`21</h5>
        <h4 className="experience-headers">technology</h4>
        <p className="experience-technologies"> Python • VBA • Tensorflow • AWS SageMaker </p>

        <h4 className="experience-headers">description</h4>
        <ul className="experience-description">
          <li>Lead a team of four in the implementation of a ML model with 90% sensitivity to assist clinicians in the diagnosis of recurring lower back pain
          </li>
          <li>Designed and developed the authentication process for a hospital mobile communication app using Dart with the Flutter SDK and Firebase
          </li>
        </ul>
      </div>
      <div className={`card ${selectedIndex === 3 ? 'selected' : ''}`}>

        <div className="top-bar"></div>
        <div className="red-circle"></div>
        <div className="yellow-circle"></div>
        <div className="green-circle"></div>
        <h2 className="experience-answers">Technology Consulting Intern @ <span style={{ fontWeight: '600', color:'#EA5A28' }}>BDO</span></h2>
        <h5 className="experience-time">Sept`20 - Dec`20</h5>
        <h4 className="experience-headers">technology</h4>
        <p className="experience-technologies"> Jira • Balsamiq • Figma • Visio </p>

        <h4 className="experience-headers">description</h4>
        <ul className="experience-description">
          <li>Designed key features of 5000-person firm-wide resource management platform including data-driven dashboards, profitability analysis, security and time management
          </li>
          <li>Developed business requirements, Balsamiq wireframes, Visio workflows and competitor analyses
          </li>
        </ul>
      </div>
      <div className={`card ${selectedIndex === 4 ? 'selected' : ''}`}>

        <div className="top-bar"></div>
        <div className="red-circle"></div>
        <div className="yellow-circle"></div>
        <div className="green-circle"></div>
        <h2 className="experience-answers">QA Intern @ <span style={{ fontWeight: '600', color:'#EA5A28' }}>Ontario Ministry of Education</span></h2>
        <h5 className="experience-time">May`19 - Aug`19 | Jan`20 - Apr`20</h5>
        <h4 className="experience-headers">technology</h4>
        <p className="experience-technologies"> SQL • HP ALM • Selenium Framework • AODA </p>

        <h4 className="experience-headers">description</h4>
        <ul className="experience-description">
          <li>Validated and provided alternative solutions for assistive software technology implementation across ministry applications and proposed alternative Accessibility for Ontarians with Disabilities Act (AODA) compliant solutions.
          </li>
          <li>Identified software defects and proposed solutions by automating the discovery process, resulting in logging and resolving ~50 more defects per month
          </li>
        </ul>
      </div>
    </Flickity>
    </main>
  );
};

export default CardCarousel;
