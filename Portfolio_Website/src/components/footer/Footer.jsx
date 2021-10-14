import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer" >
        <div className="shane_tm_copyright">
          <div className="container">
            <div className="inner">
               
                
                <a href="https://github.com/Wsanders81" target="_blank" rel="noreferrer">
                  <img 
                  alt="Github Link"
                  style={{height:"1.5rem"}}
                  src="img/footer/github-original-wordmark.svg"/>
                  </a>
                <a href="https://www.linkedin.com/in/williamsanders81/" target="_blank" rel="noreferrer">
                  <img 
                  alt="LinkedIN link"
                  style={{height:"1.5rem"}}
                  src="img/footer/linkedin-original.svg"/>
                  </a>
                {/* <a href="https://twitter.com/iamWillSanders/status/1433814053453893632?s=20" target="_blank" rel="noreferrer">
                  <img 
                  alt="Twitter Link"
                  style={{height:"1.5rem"}}
                  src="img/footer/twitter-original.svg"/>
                  </a> */}
              
            </div>
            {/* End inner */}
          </div>
        </div>
        {/* End shane_tm_copyright */}
      </div>
    </>
  );
};

export default Footer;
