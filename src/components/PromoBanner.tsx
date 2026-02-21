"use client"

export default function PromoBanner() {
  return (
    <header data-test="header" id="header" className="white header theme-col--primary" data-section-theme="white" data-header-style="solid" tabIndex={-1}>
      <svg style={{display:'none'}} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
        <symbol id="circle">
          <path d="M11.5 17C14.5376 17 17 14.5376 17 11.5C17 8.46243 14.5376 6 11.5 6C8.46243 6 6 8.46243 6 11.5C6 14.5376 8.46243 17 11.5 17Z" fill="none"></path>
        </symbol>

        <symbol id="circleFilled">
          <path d="M11.5 17C14.5376 17 17 14.5376 17 11.5C17 8.46243 14.5376 6 11.5 6C8.46243 6 6 8.46243 6 11.5C6 14.5376 8.46243 17 11.5 17Z"></path>
        </symbol>

        <symbol id="dash">
          <path d="M11 11H19H3"></path>
        </symbol>

        <symbol id="squareFilled">
          <rect x="6" y="6" width="11" height="11"></rect>
        </symbol>

        <symbol id="square">
          <rect x="7" y="7" width="9" height="9" fill="none" stroke="inherit"></rect>
        </symbol>
        
        <symbol id="plus">
          <path d="M11 3V19"></path>
          <path d="M19 11L3 11"></path>
        </symbol>
        
        <symbol id="closedArrow">
          <path d="M11 11V2M11 18.1797L17 11.1477L5 11.1477L11 18.1797Z" fill="none"></path>
        </symbol>
        
        <symbol id="closedArrowFilled">
          <path d="M11 11L11 2" stroke="inherit" fill="none"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M2.74695 9.38428L19.038 9.38428L10.8925 19.0846L2.74695 9.38428Z" strokeWidth="1"></path>
        </symbol>
        
        <symbol id="closedArrowHead" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/symbol">
          <path d="M18 7L11 15L4 7L18 7Z" fill="none" stroke="inherit"></path>
        </symbol>
        
        
        <symbol id="closedArrowHeadFilled" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/symbol">
          <path d="M18.875 6.5L11 15.5L3.125 6.5L18.875 6.5Z"></path>
        </symbol>
        
        <symbol id="openArrow">
          <path d="M11 18.3591L11 3" stroke="inherit" fill="none"></path>
          <path d="M18 11.5L11 18.5L4 11.5" stroke="inherit" fill="none"></path>
        </symbol>
        
        <symbol id="openArrowHead">
          <path d="M18 7L11 14L4 7" fill="none"></path>
        </symbol>

        <symbol id="pinchedArrow">
          <path d="M11 17.3591L11 2" fill="none"></path>
          <path d="M2 11C5.85455 12.2308 8.81818 14.9038 11 18C13.1818 14.8269 16.1455 12.1538 20 11" fill="none"></path>
        </symbol>

        <symbol id="pinchedArrowFilled">
          <path d="M11.05 10.4894C7.04096 8.73759 1.05005 8 1.05005 8C6.20459 11.3191 9.41368 14.1773 11.05 21C12.6864 14.0851 15.8955 11.227 21.05 8C21.05 8 15.0591 8.73759 11.05 10.4894Z" strokeWidth="1"></path>
          <path d="M11 11L11 1" fill="none"></path>
        </symbol>

        <symbol id="pinchedArrowHead">
          <path d="M2 7.24091C5.85455 8.40454 8.81818 10.9318 11 13.8591C13.1818 10.8591 16.1455 8.33181 20 7.24091" fill="none"></path>
        </symbol>
        
        <symbol id="pinchedArrowHeadFilled">
          <path d="M11.05 7.1591C7.04096 5.60456 1.05005 4.95001 1.05005 4.95001C6.20459 7.89547 9.41368 10.4318 11.05 16.4864C12.6864 10.35 15.8955 7.81365 21.05 4.95001C21.05 4.95001 15.0591 5.60456 11.05 7.1591Z"></path>
        </symbol>
      </svg>

      <div className="sqs-announcement-bar-dropzone">
        <div className="sqs-announcement-bar-custom-location">
          <div id="yui_3_17_2_1_1771649929298_297" className="yui3-widget sqs-widget sqs-announcement-bar">
            <div id="yui_3_17_2_1_1771649929298_299" className="sqs-announcement-bar-content">
              <a className="sqs-announcement-bar-url" target="_blank" href="https://opnl.co/squarepieguys-app" aria-labelledby="announcement-bar-text-inner-id"></a>

              <div className="sqs-announcement-bar-text">
                <span className="sqs-announcement-bar-close" tabIndex={0} role="button" aria-label="Close Announcement"></span>
                <div id="announcement-bar-text-inner-id" className="sqs-announcement-bar-text-inner">
                  <p data-rte-preserve-empty="true" style={{whiteSpace:'pre-wrap'}}><strong>Did you know we're rated the top 3 Detroit-style pizzas in the whole country? </strong></p><p data-rte-preserve-empty="true" style={{whiteSpace:'pre-wrap'}}><strong>Order Here!</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-announcement-bar-wrapper">
        
        <a href="#page" className="header-skip-link sqs-button-element--primary">
          Skip to Content
        </a>
        

        
        <div className="header-border" data-header-style="solid" data-header-border="false" data-test="header-border" style={{}}></div>
        <div className="header-dropshadow" data-header-style="solid" data-header-dropshadow="false" data-test="header-dropshadow" style={{}}></div>
        
        
          <div>
            <div className="header-background-solid" data-header-style="solid" data-test="header-background-solid" style={{opacity: 'calc(100 * .01)'}}></div>
          </div>
        

        <div className="header-inner container--fluid header-layout--with-commerce header-mobile-layout-logo-left-nav-right header-layout-branding-center-nav-center" data-test="header-inner">
          {/* Background */}
          <div className="header-background theme-bg--primary"></div>

          <div className="header-display-desktop" data-content-field="site-title">
            
            

            {/* Burger */}
            <div className="header-burger menu-overlay-has-visible-non-navigation-items" data-animation-role="header-element">
              <button className="header-burger-btn burger" data-test="header-burger">
                <span className="js-header-burger-open-title visually-hidden">Open Menu</span>
                <span hidden className="js-header-burger-close-title visually-hidden">Close Menu</span>
                <div className="burger-box">
                  <div className="burger-inner header-menu-icon-tripleLineHamburger">
                    <div className="top-bun"></div>
                    <div className="patty"></div>
                    <div className="bottom-bun"></div>
                  </div>
                </div>
              </button>
            </div>

            
            {/* Social */}
            
          
            
            {/* Title and nav wrapper */}
            <div className="header-title-nav-wrapper">
              

              

              
                
                {/* Title */}
                
                  <div className="header-title" data-animation-role="header-element">
                    
                      <div className="header-title-logo">
                        <a href="/" data-animation-role="header-element">
                        
                          <img src="/image-7.webp" alt="Square Pie Guys" style={{display:'block'}} loading="eager" decoding="async" data-loader="raw" />

                        </a>
                      </div>

                    
                    
                  </div>
                
              
                
                {/* Nav */}
                <div className="header-nav">
                  <div className="header-nav-wrapper">
                    <nav className="header-nav-list">
                      

                      
                        <div className="header-nav-item header-nav-item--folder">
                          <button className="header-nav-folder-title" data-href="/menu-1" data-animation-role="header-element" aria-expanded="false" aria-controls="menu">
                          <span className="header-nav-folder-title-text">
                            Menu
                          </span>
                          </button>
                          <div className="header-nav-folder-content" id="menu">
                            
                              
                                <div className="header-nav-folder-item">
                                  <a href="/menu">
                                    <span className="header-nav-folder-item-content">
                                      Current Menu 
                                    </span>
                                  </a>
                                </div>
                              
                              
                            
                              
                                <div className="header-nav-folder-item">
                                  <a href="/seasonalmenu">
                                    <span className="header-nav-folder-item-content">
                                      Seasonal Menu
                                    </span>
                                  </a>
                                </div>
                              
                              
                            
                          </div>
                        </div>
                      
                      


                      
                        <div className="header-nav-item header-nav-item--folder">
                          <button className="header-nav-folder-title" data-href="/the-mission" data-animation-role="header-element" aria-expanded="false" aria-controls="about">
                          <span className="header-nav-folder-title-text">
                            About
                          </span>
                          </button>
                          <div className="header-nav-folder-content" id="about">
                            
                              
                                <div className="header-nav-folder-item">
                                  <a href="/community">
                                    <span className="header-nav-folder-item-content">
                                      The Mission 
                                    </span>
                                  </a>
                                </div>
                              
                              
                            
                              
                                <div className="header-nav-folder-item">
                                  <a href="/squarepiehub">
                                    <span className="header-nav-folder-item-content">
                                      The Hub
                                    </span>
                                  </a>
                                </div>
                              
                              
                            
                              
                                <div className="header-nav-folder-item">
                                  <a href="/team-1">
                                    <span className="header-nav-folder-item-content">
                                      The Team + Careers
                                    </span>
                                  </a>
                                </div>
                              
                              
                            
                              
                                <div className="header-nav-folder-item">
                                  <a href="/press">
                                    <span className="header-nav-folder-item-content">
                                      Press
                                    </span>
                                  </a>
                                </div>
                              
                              
                            
                              
                                <div className="header-nav-folder-item">
                                  <a href="/blog">
                                    <span className="header-nav-folder-item-content">
                                      Square Pie Guys Blog
                                    </span>
                                  </a>
                                </div>
                              
                              
                            
                          </div>
                        </div>
                      
                      


                      
                        <div className="header-nav-item header-nav-item--folder">
                          <button className="header-nav-folder-title" data-href="/locationss" data-animation-role="header-element" aria-expanded="false" aria-controls="locations">
                          <span className="header-nav-folder-title-text">
                            Locations
                          </span>
                          </button>
                          <div className="header-nav-folder-content" id="locations">
                            
                              
                                <div className="header-nav-folder-item">
                                  <a href="/currentlocations">
                                    <span className="header-nav-folder-item-content">
                                      Locations
                                    </span>
                                  </a>
                                </div>
                              
                              
                            
                              
                                <div className="header-nav-folder-item">
                                  <a href="/newlocations">
                                    <span className="header-nav-folder-item-content">
                                      Coming Soon
                                    </span>
                                  </a>
                                </div>
                              
                              
                            
                          </div>
                        </div>
                      
                      


                      
                        <div className="header-nav-item header-nav-item--collection">
                          <a href="/catering" data-animation-role="header-element">
                            Catering
                          </a>
                        </div>
                      
                      
                      


                      
                        <div className="header-nav-item header-nav-item--folder">
                          <button className="header-nav-folder-title" data-href="/faq-1" data-animation-role="header-element" aria-expanded="false" aria-controls="faq">
                          <span className="header-nav-folder-title-text">
                            FAQ
                          </span>
                          </button>
                          <div className="header-nav-folder-content" id="faq">
                            
                              
                                <div className="header-nav-folder-item">
                                  <a href="/faq">
                                    <span className="header-nav-folder-item-content">
                                      Frequently Asked Questions
                                    </span>
                                  </a>
                                </div>
                              
                              
                            
                              
                                <div className="header-nav-folder-item">
                                  <a href="/allergiess">
                                    <span className="header-nav-folder-item-content">
                                      Allergies Info 
                                    </span>
                                  </a>
                                </div>
                              
                              
                            
                              
                                <div className="header-nav-folder-item">
                                  <a href="/nutritioninfo">
                                    <span className="header-nav-folder-item-content">
                                      Nutrition Info 
                                    </span>
                                  </a>
                                </div>
                              
                              
                            
                              
                                <div className="header-nav-folder-item">
                                  <a href="/spgappterms">
                                    <span className="header-nav-folder-item-content">
                                      SPG App Terms + Conditions
                                    </span>
                                  </a>
                                </div>
                              
                              
                            
                          </div>
                        </div>
                      
                      


                      
                        <div className="header-nav-item header-nav-item--folder">
                          <button className="header-nav-folder-title" data-href="/join-rewards" data-animation-role="header-element" aria-expanded="false" aria-controls="discounts">
                          <span className="header-nav-folder-title-text">
                            Discounts
                          </span>
                          </button>
                          <div className="header-nav-folder-content" id="discounts">
                            
                              
                                <div className="header-nav-folder-item">
                                  <a href="/discounts-deals">
                                    <span className="header-nav-folder-item-content">
                                      Discounts + Deals
                                    </span>
                                  </a>
                                </div>
                              
                              
                            
                              
                                <div className="header-nav-folder-item">
                                  <a href="/rewards">
                                    <span className="header-nav-folder-item-content">
                                      Rewards
                                    </span>
                                  </a>
                                </div>
                              
                              
                            
                              
                                <div className="header-nav-folder-item">
                                  <a href="/giftcards">
                                    <span className="header-nav-folder-item-content">
                                      Gift Cards
                                    </span>
                                  </a>
                                </div>
                              
                              
                            
                          </div>
                        </div>
                      
                      

                    </nav>
                  </div>
                </div>
              
            </div>
            
            {/* Actions */}
            

            

            

            

            

            

            

            <div className="header-actions header-actions--right">
              
                <div className="header-actions-action header-actions-action--social">
                  

                  

                  
                    
                      <a className="icon icon--fill" target="_blank" href="https://www.instagram.com/squarepieguys/" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"/></svg>
                      </a>
                    
                  
                    
                      <a className="icon icon--fill" target="_blank" href="https://www.facebook.com/squarepieguys" aria-label="Facebook">
                        <svg className="icon--facebook" viewBox="0 0 32 32"><path d="M8.646 15.12h2.174v10.24h4.45V15.12h2.863l.406-3.677h-3.27V9.285c0-1.04.2-1.447 1.208-1.447h2.062V4.16h-2.868c-3.064 0-4.684 1.566-4.684 4.563v3.721H8.646v3.677z" fill="currentColor"/></svg>
                      </a>
                    
                  
                    
                      <a className="icon icon--fill" target="_blank" href="https://www.tiktok.com/@squarepieguys" aria-label="TikTok">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor"><path d="M500,1000A500,500,0,1,1,1000,500,500.56,500.56,0,0,1,500,1000ZM626.48,240.34v77.66c26.12,18.69,57.26,29.72,90.66,30.22V263.78c-29.28-8.65-53.96-28.06-69.48-54.71-.46-.8-.87-1.62-1.31-2.43h-59.31V442.2c-.22,79.48-64.53,143.79-144,143.79S299.21,521.68,299,442.2s64.53-143.79,144-143.79a142.82,142.82,0,0,1,24.71,2.16v-80c-8.1-1.13-16.34-1.75-24.71-1.75C325.26,218.78,218.78,325.26,218.78,443S325.26,667.22,443,667.22,667.22,560.74,667.22,443v-139c23.66,18.48,53.32,29.62,85.43,29.62V254.13a87.05,87.05,0,0,1-15.4-1.37C713.91,260.57,693.4,277.91,626.48,240.34Z"/></svg>
                      </a>
                    
                  
                    
                  
                    
                  

                </div>
              
                
                  <div className="header-actions-action header-actions-action--cta">
                    <a href="https://order.squarepieguys.com/" className="btn btn--border-thin header-cta-btn btn--primary-inverse" data-animation-role="header-element">
                      <span className="btn-label">VIEW MENU</span>
                    </a>
                  </div>
                
              

              

            </div>
            

            

          </div>
        </div>

      </div>
    <style jsx>{`
@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
              .header-blur-background {
                  
                      -webkit-backdrop-filter: blur(12px);
                      backdrop-filter: blur(12px);
                  
                  
              }
          }

.top-bun, 
              .patty, 
              .bottom-bun {
                height: 3px;
              }
`}</style>
</header>
  )
}