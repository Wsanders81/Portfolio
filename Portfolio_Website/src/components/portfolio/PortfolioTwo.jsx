import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
import javaScript from '../../images/icons/javascript.svg';
import python from '../../images/icons/python.svg';
import react from '../../images/icons/react.svg';
import redux from '../../images/icons/redux.svg';
import node from '../../images/icons/nodejs-icon.svg';
import flask from '../../images/icons/flask.svg';
import jobly from '../../images/icons/jobly.png';
import material from '../../images/icons/material-ui.svg';
import storypaint from '../../images/icons/Storypaint.png';
import musicBox from '../../images/icons/musicbox.png';
import '../../styles/Portfolio.css';
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
										<span
											style={{
												backgroundColor : 'rgba(134,220,217)'
											}}
										>
											Portfolio
										</span>
										<h3>Projects</h3>
									</div>
								</div>
							</div>
							{/* End shane_tm_title */}
							<div className="portfolio_filter">
								<Tabs>
									<TabList>
										<Tab />
										<Tab />
										<Tab />
										<Tab />
									</TabList>
									{/* End tablist */}
									<div className="portfolio_list has-effect">
										<SRLWrapper>
											<TabPanel>
												<ul className="gallery_zoom">
													<li
														data-aos="fade-right"
														data-aos-duration="1200"
													>
														<div className="inner">
															<div className="entry shane_tm_portfolio_animation_wrap">
																<a href="https://i.ibb.co/Fq9nxcK/Forktacular.jpg">
																	<img
																		style={{
																			height    :
																				'100%',
																			width     :
																				'100%',
																			objectFit :
																				'cover'
																		}}
																		src="https://i.ibb.co/Fq9nxcK/Forktacular.jpg"
																		alt="Forktacular"
																	/>
																</a>
															</div>
															<div className="mobile_title">
																<h3 className="Portfolio-project-title">
																	<a
																		href="https://forktacular.herokuapp.com/"
																		rel="noopener noreferrer"
																		target="_blank"
																	>
																		Visit:
																		Forktacular
																	</a>
																	<span className="Portfolio-project-icons-one">
																		<img
																			className="Portfolio-icon"
																			alt="python"
																			src={
																				python
																			}
																		/>
																		<img
																			className="Portfolio-icon icon-two"
																			src={
																				javaScript
																			}
																			alt="JavaScript"
																		/>
																	</span>
																</h3>
															</div>
														</div>
														<h3>Forktacular</h3>
														<p>
															A recipe site where
															users can create,
															share and search for
															recipes. Utilizes
															the Spoonacular API,
															Python, Flask,
															JQuery and
															JavaScript.
														</p>
													</li>
													{/* End single image block */}

													<li
														data-aos="fade-right"
														data-aos-duration="1200"
														data-aos-delay="100"
													>
														<div className="inner">
															<div className="entry shane_tm_portfolio_animation_wrap">
																<a href={jobly}>
																	<img
																		style={{
																			height    :
																				'100%',
																			width     :
																				'100%',
																			objectFit :
																				'contain'
																		}}
																		src={
																			jobly
																		}
																		alt="Jobly"
																	/>
																</a>
															</div>
															<div className="mobile_title">
																<h3 className="Portfolio-project-title">
																	<a
																		href="https://various-brush.surge.sh/"
																		rel="noopener noreferrer"
																		target="_blank"
																	>
																		Visit:
																		Jobly
																	</a>
																	<span className="Portfolio-project-icons-two">
																		<img
																			className="Portfolio-icon"
																			alt="react"
																			src={
																				react
																			}
																		/>
																		<img
																			className="Portfolio-icon"
																			src={
																				node
																			}
																			alt="JavaScript"
																		/>
																		<img
																			className="Portfolio-icon"
																			src={
																				material
																			}
																			alt="JavaScript"
																		/>
																	</span>
																</h3>
															</div>
														</div>
														<h3>Jobly</h3>
														<p>
															A fun mock job board
															website created
															using React, NodeJS,
															Express and
															MaterialUI.
														</p>
													</li>
													<li
														data-aos="fade-right"
														data-aos-duration="1200"
														data-aos-delay="100"
													>
														<div className="inner">
															<div className="entry shane_tm_portfolio_animation_wrap">
																<a
																	href={
																		storypaint
																	}
																>
																	<img
																		style={{
																			height    :
																				'100%',
																			width     :
																				'100%',
																			objectFit :
																				'cover'
																		}}
																		src={
																			storypaint
																		}
																		alt="story paint"
																	/>
																</a>
															</div>
															<div className="mobile_title">
																<h3>
																	<a
																		href="https://storyPaint.surge.sh/"
																		rel="noopener noreferrer"
																		target="_blank"
																	>
																		Visit:
																		StoryPaint
																	</a>
																</h3>
																<span className="Portfolio-project-icons-three">
																	<img
																		className="Portfolio-icon"
																		alt="react"
																		src={
																			react
																		}
																	/>
																	<img
																		className="Portfolio-icon icon-two"
																		src={
																			node
																		}
																		alt="JavaScript"
																	/>
																	<img
																		className="Portfolio-icon icon-three"
																		src={
																			material
																		}
																		alt="JavaScript"
																	/>
																</span>
															</div>
														</div>
														<h3>StoryPaint</h3>
														<p>
															Team submission for
															Mintbean Hackathon
															event. A coloring
															book along with a
															story displaying
															SVGs that children
															can color. Uses
															React, Redux, NodeJS
															and Express.
														</p>
													</li>
													<li
														data-aos="fade-right"
														data-aos-duration="1200"
														data-aos-delay="100"
													>
														<div className="inner">
															<div className="entry shane_tm_portfolio_animation_wrap">
																<a
																	href={
																		musicBox
																	}
																>
																	<img
																		style={{
																			height    :
																				'100%',
																			width     :
																				'100%',
																			objectFit :
																				'cover'
																		}}
																		src={
																			musicBox
																		}
																		alt="story paint"
																	/>
																</a>
															</div>
															<div className="mobile_title">
																<h3>
																	<a
																		href="https://savory-stitch.surge.sh/"
																		rel="noopener noreferrer"
																		target="_blank"
																	>
																		Visit:
																		MusicBox
																	</a>
																</h3>
																<span className="Portfolio-project-icons-one">
																	<img
																		className="Portfolio-icon"
																		alt="react"
																		src={
																			react
																		}
																	/>
																	
																	<img
																		className="Portfolio-icon "
																		src={
																			material
																		}
																		alt="JavaScript"
																	/>
																</span>
															</div>
														</div>
														<h3>MusicBox</h3>
														<p>
															Simple music app utilizing the audioDB API to enable users to search for info, albums and videos from their favorite artists. 
														</p>
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
													<li
														data-aos="fade-right"
														data-aos-duration="1200"
													>
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
																		Shane
																		Design
																	</a>
																</h3>
																<span>
																	Design
																</span>
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
																		Sweet
																		Cherry
																	</a>
																</h3>
																<span>
																	Photography
																</span>
															</div>
														</div>
													</li>
													{/* End single image block */}
												</ul>
												{/* End portfolio list */}
											</TabPanel>

											<TabPanel>
												<ul className="gallery_zoom">
													<li
														data-aos="fade-right"
														data-aos-duration="1200"
													>
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
																<span>
																	Design
																</span>
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
																		Design
																		Trend
																	</a>
																</h3>
																<span>
																	Branding
																</span>
															</div>
														</div>
													</li>
													{/* End single image block */}
												</ul>
												{/* End single image block */}
											</TabPanel>

											<TabPanel>
												<ul className="gallery_zoom">
													<li
														data-aos="fade-right"
														data-aos-duration="1200"
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
																		Sweet
																		Cherry
																	</a>
																</h3>
																<span>
																	Photography
																</span>
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
																		Behance
																		Shoot
																	</a>
																</h3>
																<span>
																	Branding
																</span>
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
