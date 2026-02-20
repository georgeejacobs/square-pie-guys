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
        
      <div className="sqs-announcement-bar-dropzone"><div className="sqs-announcement-bar-custom-location"><div id="yui_3_17_2_1_1771607579847_284" className="yui3-widget sqs-widget sqs-announcement-bar"><div id="yui_3_17_2_1_1771607579847_286" className="sqs-announcement-bar-content"><a className="sqs-announcement-bar-url" target="_blank" href="https://opnl.co/squarepieguys-app" aria-labelledby="announcement-bar-text-inner-id"></a>

      <div className="sqs-announcement-bar-text">
        <span className="sqs-announcement-bar-close" tabIndex={0} role="button" aria-label="Close Announcement"></span>
        <div id="announcement-bar-text-inner-id" className="sqs-announcement-bar-text-inner">
          <p data-rte-preserve-empty="true" style={{whiteSpace:'pre-wrap'}}><strong>Did you know we're rated the top 3 Detroit-style pizzas in the whole country? </strong></p><p data-rte-preserve-empty="true" style={{whiteSpace:'pre-wrap'}}><strong>Order Here!</strong></p>
        </div>
      </div></div></div></div></div>

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
                  

                  

                  
                    <div className="showOnMobile">
                      

                    </div>

                    <div className="showOnDesktop">
                      

                    </div>
                  

                  
                  

                  

                  

                  

                  
                  <div className="header-actions-action header-actions-action--cta">
                    <div className="btn-wrapper">
                      <a href="https://order.squarepieguys.com/" className="btn btn--border" target="_blank">ORDER NOW</a>
                    </div>
                  </div>
                  

                </div>
                
              
            </div>

            <div className="header-display-mobile" data-content-field="site-title">
              

              

              

              

              

              
              
                
                {/* Social */}
                
              
                
                {/* Title */}
                <div className="header-title" data-animation-role="header-element">
                  
                    <div className="header-title-logo">
                      <a href="/" data-animation-role="header-element">
                      
        <img src="/image-7.webp" alt="Square Pie Guys" style={{display:'block'}} loading="eager" decoding="async" data-loader="raw" />

                      </a>
                    </div>

                  
                  
                </div>
                
              
                
                {/* Actions */}
                <div className="header-actions header-actions--right">
                  

                  

                  
                    <div className="showOnMobile">
                      

                    </div>

                    <div className="showOnDesktop">
                      

                    </div>
                  

                  
                  

                  

                  

                  

                  
                  <div className="header-actions-action header-actions-action--cta">
                    <div className="btn-wrapper">
                      <a href="https://order.squarepieguys.com/" className="btn btn--border" target="_blank">ORDER NOW</a>
                    </div>
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