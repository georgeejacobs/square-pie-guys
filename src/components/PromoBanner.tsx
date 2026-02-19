"use client"

import Image from "next/image"

export default function PromoBanner() {
  return (
    <header data-test="header" id="header" className="white header theme-col--primary" data-section-theme="white" data-header-style="solid" data-first-focusable-element="" tabIndex={-1} style={{}} data-controllers-bound="Header">
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
          <div id="yui_3_17_2_1_1771517851052_297" className="yui3-widget sqs-widget sqs-announcement-bar">
            <div id="yui_3_17_2_1_1771517851052_299" className="sqs-announcement-bar-content">
              <a className="sqs-announcement-bar-url" target="_blank" href="https://opnl.co/squarepieguys-app" aria-labelledby="announcement-bar-text-inner-id"></a>

              <div className="sqs-announcement-bar-text">
                <span className="sqs-announcement-bar-close" tabIndex={0} role="button" aria-label="Close Announcement"></span>
                <div id="announcement-bar-text-inner-id" className="sqs-announcement-bar-text-inner">
                  <p data-rte-preserve-empty="true" style={{'white-space':'pre-wrap'} as any}><strong>$29 OG Bundle Deal is Here!</strong></p>
                  <p data-rte-preserve-empty="true" style={{'white-space':'pre-wrap'} as any}><em>1 pep + 1 cheese pizza = $29</em></p>
                  <p data-rte-preserve-empty="true" style={{'white-space':'pre-wrap'} as any}><strong>Order Here!</strong></p>
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
                    
                    <Image src="/image-7.webp" alt="Square Pie Guys" style={{display:'block'}} loading="eager" decoding="async" data-loader="raw" width={1500} height={400} />

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
                              SPG App Terms
                            </span>
                          </a>
                        </div>
                      
                      
                    
                  </div>
                </div>
              
              

                    </nav>
                  </div>
                </div>
              
              
              
            </div>

            
            
            
            {/* Cart */}
            <div className="header-actions header-actions--right">
              
              

              

              
              <div className="header-actions-action header-actions-action--cart">
                <a href="/cart" className="Cart icon icon--stroke" data-animation-role="header-element" data-test="template-cart">
                  <div className="icon--stroke-svg-container">
                    <div>
                      <svg className="icon icon--stroke" width="61" height="49" viewBox="0 0 61 49" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.5 8C0.5 7.17157 1.17157 6.5 2 6.5H11.8107C12.4934 6.5 13.0821 6.98394 13.2164 7.65219L14.4635 14H59C59.6067 14 60.1284 14.3669 60.3324 14.9282C60.5363 15.4895 60.3777 16.1264 59.9389 16.5L48.9389 26.5C48.6554 26.7427 48.2836 26.8685 47.9054 26.8493L17.6491 25.9172L18.5635 31H50C50.8284 31 51.5 31.6716 51.5 32.5C51.5 33.3284 50.8284 34 50 34H17C16.3173 34 15.7286 33.5161 15.5943 32.8478L11.2057 9.5H2C1.17157 9.5 0.5 8.82843 0.5 8ZM15.1365 17L16.8509 23.9172L46.0946 23.8507L55.4722 17H15.1365Z"></path>
                        <path d="M18 40C19.6569 40 21 41.3431 21 43C21 44.6569 19.6569 46 18 46C16.3431 46 15 44.6569 15 43C15 41.3431 16.3431 40 18 40Z"></path>
                        <path d="M45 40C46.6569 40 48 41.3431 48 43C48 44.6569 46.6569 46 45 46C43.3431 46 42 44.6569 42 43C42 41.3431 43.3431 40 45 40Z"></path>
                      </svg>
                    </div>
                    <div className="header-cart-quantity" data-test="cart-quantity">0</div>
                  </div>
                </a>
              </div>
              
              
            </div>
          </div>

          <div className="header-display-mobile" data-content-field="site-title">
            

            {/* Mobile logo */}
            
              <div className="header-title header-title--mobile" data-animation-role="header-element">
                
                  <div className="header-title-logo">
                    <a href="/" data-animation-role="header-element">
                    
                    <img src="/image-7.webp" alt="Square Pie Guys" style={{display:'block'}} loading="eager" decoding="async" data-loader="raw" />

                    </a>
                  </div>

                
                
              </div>
            

            {/* Mobile Actions */}
            <div className="header-actions header-actions--right">
              
              

              

              
              <div className="header-actions-action header-actions-action--cart">
                <a href="/cart" className="Cart icon icon--stroke" data-animation-role="header-element" data-test="template-cart">
                  <div className="icon--stroke-svg-container">
                    <div>
                      <svg className="icon icon--stroke" width="61" height="49" viewBox="0 0 61 49" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.5 8C0.5 7.17157 1.17157 6.5 2 6.5H11.8107C12.4934 6.5 13.0821 6.98394 13.2164 7.65219L14.4635 14H59C59.6067 14 60.1284 14.3669 60.3324 14.9282C60.5363 15.4895 60.3777 16.1264 59.9389 16.5L48.9389 26.5C48.6554 26.7427 48.2836 26.8685 47.9054 26.8493L17.6491 25.9172L18.5635 31H50C50.8284 31 51.5 31.6716 51.5 32.5C51.5 33.3284 50.8284 34 50 34H17C16.3173 34 15.7286 33.5161 15.5943 32.8478L11.2057 9.5H2C1.17157 9.5 0.5 8.82843 0.5 8ZM15.1365 17L16.8509 23.9172L46.0946 23.8507L55.4722 17H15.1365Z"></path>
                        <path d="M18 40C19.6569 40 21 41.3431 21 43C21 44.6569 19.6569 46 18 46C16.3431 46 15 44.6569 15 43C15 41.3431 16.3431 40 18 40Z"></path>
                        <path d="M45 40C46.6569 40 48 41.3431 48 43C48 44.6569 46.6569 46 45 46C43.3431 46 42 44.6569 42 43C42 41.3431 43.3431 40 45 40Z"></path>
                      </svg>
                    </div>
                    <div className="header-cart-quantity" data-test="cart-quantity">0</div>
                  </div>
                </a>
              </div>
              
              

              
              <div className="header-actions-action header-actions-action--social">
                

                
                
                  <a href="https://www.instagram.com/squarepieguys/" target="_blank" className="icon icon--stroke" data-animation-role="header-element">
                    <svg className="icon icon--stroke" width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 7.125C8.92893 7.125 7.25 8.80393 7.25 10.875C7.25 12.9461 8.92893 14.625 11 14.625C13.0711 14.625 14.75 12.9461 14.75 10.875C14.75 8.80393 13.0711 7.125 11 7.125Z" fill="none" strokeWidth="1.3"></path>
                      <rect x="3.5" y="3.5" width="15" height="15" rx="4" fill="none" strokeWidth="1.3"></rect>
                      <circle cx="16" cy="6" r="1"></circle>
                    </svg>
                  </a>
                
                
                  <a href="https://www.facebook.com/SquarePieGuys/" target="_blank" className="icon icon--stroke" data-animation-role="header-element">
                    <svg className="icon icon--stroke" width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12.5V19.5H12.5V12.5H15.5L16 9H12.5V7.5C12.5 6.5 13 6 14 6H16V2.5C15.5 2.5 14.5 2.5 13.5 2.5C10.5 2.5 9 4.5 9 7V9H6V12.5H9Z" fill="none" strokeWidth="1.3"></path>
                    </svg>
                  </a>
                
                
                  <a href="https://twitter.com/SquarePieGuys" target="_blank" className="icon icon--stroke" data-animation-role="header-element">
                    <svg className="icon icon--stroke" width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.5 4.09c-.66.33-1.43.55-2.26.67A4.05 4.05 0 0 0 20 2.2c-.82.48-1.77.81-2.8 1.01C16.51 2.48 15.4 2 14.16 2 11.89 2 10 3.85 10 6.08c0 .33.03.65.1.95-3.46-.18-6.53-1.83-8.58-4.35-.36.61-.56 1.32-.56 2.08 0 1.43.73 2.69 1.84 3.43-.68-.02-1.32-.21-1.88-.52v.05c0 1.99 1.41 3.65 3.29 4.02-.34.09-.7.14-1.07.14-.26 0-.52-.02-.77-.07.52 1.63 2.04 2.82 3.84 2.85A8.12 8.12 0 0 1 1 17.52 11.5 11.5 0 0 0 7.29 19.5c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0 0 21 4.99z" fill="none" strokeWidth="1.3"></path>
                    </svg>
                  </a>
                
              </div>
              
            </div>

            

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