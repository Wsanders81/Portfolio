import React, {useState} from "react";
import Modal from 'react-modal'
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
Modal.setAppElement("#root");



const AboutThree = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />

                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/about/3.jpg"
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span style={{backgroundColor: '#E6F4F1'}}>About Me</span>
                  <h3>Software Developer based in San Diego, CA</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I am an upbeat, results-driven software developer with a previous background in 
                    hospitality management. When I'm not chasing my kids around or reading the thousands
                    of emails their school sends out, 
                    I am honing my skills by creating projects I am passionate about. 
                  </p>
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  
                >
                  
                  <button onClick={toggleModalOne} style={{backgroundColor:"#8090BC"}} >
                   Download Resume
                
                  </button>
                  
                 
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
        
        <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
            <SimpleReactLightbox>
              <SRLWrapper>
            <img alt="resume" src="https://i.ibb.co/ZK3cffR/Resume-Will-Sanders.jpg"/>
            </SRLWrapper>
            </SimpleReactLightbox>
      </Modal>
      
      </div>
    </>
  );
};

export default AboutThree;
