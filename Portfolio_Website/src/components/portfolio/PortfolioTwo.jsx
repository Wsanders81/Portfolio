import React from "react";
import { Tab,  Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const PortfolioTwo = () => {
  return (
    <div className="shane_tm_section" id="portfolio">
      <SimpleReactLightbox>
        <div className="shane_tm_portfolio">
          <div className="container">
            <div className="positon-relative">
              <div className="shane_tm_title">
                <div className="title_flex">
                  <div className="left">
                    <span style={{backgroundColor:"#E6F4F1"}}>Portfolio</span>
                    <h3>Projects</h3>
                  </div>
                </div>
              </div>
              {/* End shane_tm_title */}
              <div className="portfolio_filter">
                <Tabs>
                  <TabList>
                    <Tab></Tab>
                    <Tab></Tab>
                    <Tab></Tab>
                    <Tab></Tab>
                  </TabList>
                  {/* End tablist */}
                  <div className="portfolio_list has-effect">
                    <SRLWrapper>
                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li data-aos="fade-right" data-aos-duration="1200">
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="https://lh3.googleusercontent.com/pw/AM-JKLXZyKesBIxjvmWKkKNG7tgsyrTfMEcbQ-fGtFE8fL1m256bufurecTWeiCpIfSs718UxaoftXz1qYJ4cpv1aGojBTjIBV83ddGWmqW1luL29UVcNu-h-oxRuvp5lIG5GiNaKUnYVOUxuyNwLVE-S1evuOf0zvE8dWicRBdDsl2g2JGffFYv5AG2Z3ef7Qw2289exSY_chyYQimMXANi6Ci4YHut6v_FxyeXTbb3M7p-QcQwLnLp31hlmvK_VdXh2w751RkbS0cmaCG2KJQd7u05WbRSH7yKdqGPNgD4UNhTnwJZhqGHIaxFAESoR7YJk9Bom6myozUtnOC1g1I7oVin0lIF3ixTnIHMTgB1ShQFdO0xxol5VrehEVI3L6_V7j3USQshfmvFQ3xH6kvvNRbAm_UizFNrcRIoOLXmPF2L_yjBL-DOzEwn_MgcHwo_EkWqyWmLXQnSERXIurSNxl49V2-zdxr1N3brPUgF-wSv-o6uxne5IocvEXUBwYnXECN1sTBtXX5ZUd-SpSWkPrU3TfdtjU623H16GPFVs2P-R7BypMPjKbb-mzC3cMXjCShVxMNhsFJpJSBtWXgh52wOIgwLIViV42-vC6l9GdRhOygZEyrlbBQrhIWzrn50P6pO5dnZqOHmF7UHRcR9pDYE7ia7CCoEATykJ7Yi9lSEiMW4caEYg9j0SNvYE1zOWmUGAyFQdGRNVFhj8Zg4H8PC_5bIXGMwjMgojckQRl1OUR4=w391-h220-no?authuser=0">
                                  <img
                                  style={{height:"100%", width:"100%",objectFit:"cover"}}
                                    src="https://lh3.googleusercontent.com/pw/AM-JKLXZyKesBIxjvmWKkKNG7tgsyrTfMEcbQ-fGtFE8fL1m256bufurecTWeiCpIfSs718UxaoftXz1qYJ4cpv1aGojBTjIBV83ddGWmqW1luL29UVcNu-h-oxRuvp5lIG5GiNaKUnYVOUxuyNwLVE-S1evuOf0zvE8dWicRBdDsl2g2JGffFYv5AG2Z3ef7Qw2289exSY_chyYQimMXANi6Ci4YHut6v_FxyeXTbb3M7p-QcQwLnLp31hlmvK_VdXh2w751RkbS0cmaCG2KJQd7u05WbRSH7yKdqGPNgD4UNhTnwJZhqGHIaxFAESoR7YJk9Bom6myozUtnOC1g1I7oVin0lIF3ixTnIHMTgB1ShQFdO0xxol5VrehEVI3L6_V7j3USQshfmvFQ3xH6kvvNRbAm_UizFNrcRIoOLXmPF2L_yjBL-DOzEwn_MgcHwo_EkWqyWmLXQnSERXIurSNxl49V2-zdxr1N3brPUgF-wSv-o6uxne5IocvEXUBwYnXECN1sTBtXX5ZUd-SpSWkPrU3TfdtjU623H16GPFVs2P-R7BypMPjKbb-mzC3cMXjCShVxMNhsFJpJSBtWXgh52wOIgwLIViV42-vC6l9GdRhOygZEyrlbBQrhIWzrn50P6pO5dnZqOHmF7UHRcR9pDYE7ia7CCoEATykJ7Yi9lSEiMW4caEYg9j0SNvYE1zOWmUGAyFQdGRNVFhj8Zg4H8PC_5bIXGMwjMgojckQRl1OUR4=w391-h220-no?authuser=0"
                                    alt="Design"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://forktacular.herokuapp.com/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Forktacular
                                  </a>
                                </h3>
                                <span>JavaScript / Python</span>

                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                          >
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="https://lh3.googleusercontent.com/xl0chom9hjX4IkhFeM1UoTb_xwWCdTkcIawCQmqxrGZbbzRWa_SYqVUX53khRjgs2DoE2wwvxowtaz0h3m2Rt1p8sDMsqj5Tcjt4RiItYta4md0zs--cco45EB72wq3CfufC3X4UJOZ354vAS-pZa__lvo3PdlsqwC6bUVYpzseYc-rrLnYZ5VCbLbhFi4TQf6nbzTUSWzBlmeuVeduks582oTM9EjVGP_Uf0LIllYl0W8VSajnb9TCjbJquuemo0g3tWQdX4kk-hHmLQRrjQ8kdcWaynixNnTXmxidq314zLSbDbuK5dI-h2UgkEC4S6UwZQQG1mEUxPfu0zKFsoqI7QC6d7AD3-udQS2sn2kw89BzM4Lv9kOELc4Ic_FABprEHJBf4DZD89-WnBMw_QVKgsXXnTweNa0C0hzgYV9SkYGH38DQjiO0fProhgWMJsZF8cHPuZlfHXdB9iJolgGKnn7QMR6MEgdbzdynS6uIaFOl04vo4jDCl0HOyr_nU07isrLxXJjkzMdHEkrvoUBTXCDS2XO7CqQcvmA5A62pyrbJCTLLT2nn-Uby-wToei5ClOBEystqZYMcepvdB1UM9KY7B5U2Ukf3asXbZvFMuqcYMfBsjHUfx7bqOWvDJGkjjnuIM0MYdfKAtF8dysHnkL9neQPoZLB_xA3QhYpAWGNPBv5T0GeUVCihMlNZ_cm6RZVUjsRViG2fmQbf6zwWP=w395-h223-no?authuser=0">
                                  <img
                                  style={{height:"100%", width:"100%",objectFit:"cover"}}
                                    src="https://lh3.googleusercontent.com/xl0chom9hjX4IkhFeM1UoTb_xwWCdTkcIawCQmqxrGZbbzRWa_SYqVUX53khRjgs2DoE2wwvxowtaz0h3m2Rt1p8sDMsqj5Tcjt4RiItYta4md0zs--cco45EB72wq3CfufC3X4UJOZ354vAS-pZa__lvo3PdlsqwC6bUVYpzseYc-rrLnYZ5VCbLbhFi4TQf6nbzTUSWzBlmeuVeduks582oTM9EjVGP_Uf0LIllYl0W8VSajnb9TCjbJquuemo0g3tWQdX4kk-hHmLQRrjQ8kdcWaynixNnTXmxidq314zLSbDbuK5dI-h2UgkEC4S6UwZQQG1mEUxPfu0zKFsoqI7QC6d7AD3-udQS2sn2kw89BzM4Lv9kOELc4Ic_FABprEHJBf4DZD89-WnBMw_QVKgsXXnTweNa0C0hzgYV9SkYGH38DQjiO0fProhgWMJsZF8cHPuZlfHXdB9iJolgGKnn7QMR6MEgdbzdynS6uIaFOl04vo4jDCl0HOyr_nU07isrLxXJjkzMdHEkrvoUBTXCDS2XO7CqQcvmA5A62pyrbJCTLLT2nn-Uby-wToei5ClOBEystqZYMcepvdB1UM9KY7B5U2Ukf3asXbZvFMuqcYMfBsjHUfx7bqOWvDJGkjjnuIM0MYdfKAtF8dysHnkL9neQPoZLB_xA3QhYpAWGNPBv5T0GeUVCihMlNZ_cm6RZVUjsRViG2fmQbf6zwWP=w395-h223-no?authuser=0"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://various-brush.surge.sh/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Jobly
                                  </a>
                                </h3>
                                <span>React / NodeJS</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}
{/* 
                          <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                          >
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/14.jpg">
                                  <img
                                    src="/img/portfolio/14.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Ice Cream
                                  </a>
                                </h3>
                                <span>Photography</span>
                              </div>
                            </div>
                          </li> */}
                          {/* End single image block */}

                          {/* <li data-aos="fade-right" data-aos-duration="1200">
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/22.jpg">
                                  <img
                                    src="/img/portfolio/22.jpg"
                                    alt="Design"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Shane Design
                                  </a>
                                </h3>
                                <span>Design</span>
                              </div>
                            </div>
                          </li> */}
                          {/* End single image block */}

                          {/* <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                          >
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/7.jpg">
                                  <img
                                    src="/img/portfolio/7.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Sweet Cherry
                                  </a>
                                </h3>
                                <span>Photography</span>
                              </div>
                            </div>
                          </li> */}
                          {/* End single image block */}

                          {/* <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                          >
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/3.jpg">
                                  <img
                                    src="/img/portfolio/3.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://www.behance.net/ib-themes"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Behance Shoot
                                  </a>
                                </h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li> */}
                          {/* End single image block */}
                        </ul>
                        {/* End portfolio list */}
                      </TabPanel>
                      {/* END ALL PORTFOLIO GALLERY */}

                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li data-aos="fade-right" data-aos-duration="1200">
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/22.jpg">
                                  <img
                                    src="/img/portfolio/22.jpg"
                                    alt="Design"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Shane Design
                                  </a>
                                </h3>
                                <span>Design</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                          >
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/7.jpg">
                                  <img
                                    src="/img/portfolio/7.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Sweet Cherry
                                  </a>
                                </h3>
                                <span>Photography</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}
                        </ul>
                        {/* End portfolio list */}
                      </TabPanel>

                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li data-aos="fade-right" data-aos-duration="1200">
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/1.jpg">
                                  <img
                                    src="/img/portfolio/1.jpg"
                                    alt="Design"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://www.instagram.com/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    My Story
                                  </a>
                                </h3>
                                <span>Design</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                          >
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/2.jpg">
                                  <img
                                    src="/img/portfolio/2.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Design Trend
                                  </a>
                                </h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}
                        </ul>
                        {/* End single image block */}
                      </TabPanel>

                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li data-aos="fade-right" data-aos-duration="1200">
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/7.jpg">
                                  <img
                                    src="/img/portfolio/7.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Sweet Cherry
                                  </a>
                                </h3>
                                <span>Photography</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                          >
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/15.jpg">
                                  <img
                                    src="/img/portfolio/15.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://www.behance.net/ib-themes"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Behance Shoot
                                  </a>
                                </h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}
                        </ul>
                        {/* End single image block */}
                      </TabPanel>
                    </SRLWrapper>
                    {/* End tabpanel */}
                  </div>
                  {/* End list wrapper */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SimpleReactLightbox>
    </div>
  );
};

export default PortfolioTwo;
