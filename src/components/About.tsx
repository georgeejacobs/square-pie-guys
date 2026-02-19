import Image from "next/image"

export default function About() {
  return (
    <header data-test="header" id="header" className="white header theme-col--primary" data-section-theme="white" data-controller="Header" data-current-styles="{
                                                                                                                                                                                                            &quot;layout&quot;: &quot;brandingCenterNavCenter&quot;,
                                                                                                                                                                                                            &quot;action&quot;: {
                                                                                                                                                                                                              &quot;href&quot;: &quot;https://order.online/business/square-pie-guys-233210/?hideModal=true&amp;pickup=true&quot;,
                                                                                                                                                                                                              &quot;buttonText&quot;: &quot;Order Now&quot;,
                                                                                                                                                                                                              &quot;newWindow&quot;: true
                                                                                                                                                                                                            },
                                                                                                                                                                                                            &quot;showSocial&quot;: false,
                                                                                                                                                                                                            &quot;socialOptions&quot;: {
                                                                                                                                                                                                              &quot;socialBorderShape&quot;: &quot;none&quot;,
                                                                                                                                                                                                              &quot;socialBorderStyle&quot;: &quot;outline&quot;,
                                                                                                                                                                                                              &quot;socialBorderThickness&quot;: {
                                                                                                                                                                                                                &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                                                                                                &quot;value&quot;: 1.0
                                                                                                                                                                                                              }
                                                                                                                                                                                                            },
                                                                                                                                                                                                            &quot;sectionTheme&quot;: &quot;white&quot;,
                                                                                                                                                                                                            &quot;menuOverlayTheme&quot;: &quot;bright&quot;,
                                                                                                                                                                                                            &quot;menuOverlayAnimation&quot;: &quot;fade&quot;,
                                                                                                                                                                                                            &quot;cartStyle&quot;: &quot;cart&quot;,
                                                                                                                                                                                                            &quot;cartText&quot;: &quot;Cart&quot;,
                                                                                                                                                                                                            &quot;showEmptyCartState&quot;: false,
                                                                                                                                                                                                            &quot;cartOptions&quot;: {
                                                                                                                                                                                                              &quot;iconType&quot;: &quot;solid-2&quot;,
                                                                                                                                                                                                              &quot;cartBorderShape&quot;: &quot;none&quot;,
                                                                                                                                                                                                              &quot;cartBorderStyle&quot;: &quot;outline&quot;,
                                                                                                                                                                                                              &quot;cartBorderThickness&quot;: {
                                                                                                                                                                                                                &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                                                                                                &quot;value&quot;: 1.0
                                                                                                                                                                                                              }
                                                                                                                                                                                                            },
                                                                                                                                                                                                            &quot;showButton&quot;: true,
                                                                                                                                                                                                            &quot;showCart&quot;: true,
                                                                                                                                                                                                            &quot;showAccountLogin&quot;: false,
                                                                                                                                                                                                            &quot;headerStyle&quot;: &quot;solid&quot;,
                                                                                                                                                                                                            &quot;languagePicker&quot;: {
                                                                                                                                                                                                              &quot;enabled&quot;: false,
                                                                                                                                                                                                              &quot;iconEnabled&quot;: false,
                                                                                                                                                                                                              &quot;iconType&quot;: &quot;globe&quot;,
                                                                                                                                                                                                              &quot;flagShape&quot;: &quot;shiny&quot;,
                                                                                                                                                                                                              &quot;languageFlags&quot;: [ ]
                                                                                                                                                                                                            },
                                                                                                                                                                                                            &quot;iconOptions&quot;: {
                                                                                                                                                                                                              &quot;desktopDropdownIconOptions&quot;: {
                                                                                                                                                                                                                &quot;size&quot;: {
                                                                                                                                                                                                                  &quot;unit&quot;: &quot;em&quot;,
                                                                                                                                                                                                                  &quot;value&quot;: 1.0
                                                                                                                                                                                                                },
                                                                                                                                                                                                                &quot;iconSpacing&quot;: {
                                                                                                                                                                                                                  &quot;unit&quot;: &quot;em&quot;,
                                                                                                                                                                                                                  &quot;value&quot;: 0.35
                                                                                                                                                                                                                },
                                                                                                                                                                                                                &quot;strokeWidth&quot;: {
                                                                                                                                                                                                                  &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                                                                                                  &quot;value&quot;: 1.0
                                                                                                                                                                                                                },
                                                                                                                                                                                                                &quot;endcapType&quot;: &quot;square&quot;,
                                                                                                                                                                                                                &quot;folderDropdownIcon&quot;: &quot;none&quot;,
                                                                                                                                                                                                                &quot;languagePickerIcon&quot;: &quot;openArrowHead&quot;
                                                                                                                                                                                                              },
                                                                                                                                                                                                              &quot;mobileDropdownIconOptions&quot;: {
                                                                                                                                                                                                                &quot;size&quot;: {
                                                                                                                                                                                                                  &quot;unit&quot;: &quot;em&quot;,
                                                                                                                                                                                                                  &quot;value&quot;: 1.0
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }">
      <div className="sqs-announcement-bar-dropzone"></div>
      <div className="header-announcement-bar-wrapper">
        <a href="#page" className="header-skip-link sqs-button-element--primary">Skip to Content</a>
        <div className="header-border" data-header-style="solid" data-header-usability-enabled="true" data-header-border="true" data-test-id="header-border" style={{borderBottomWidth: '1px'}}>
          <div className="header-dropshadow" data-header-style="solid" data-header-usability-enabled="true" data-header-dropshadow="false" data-test-id="header-dropshadow" style={{opacity: 0}}></div>
          <div className="header-inner container--fluid" data-test-id="header-inner">
            <div className="header-nav" data-test-id="header-nav">
              <div className="header-nav-item header-nav-item--folder" data-test="template-nav">
                <a href="/" className="header-nav-folder-title" data-test="template-nav-folder-title">LOCATIONS</a>
                <div className="header-nav-folder-content">
                  <div className="container header-menu-nav-folder-content">
                    <div className="header-menu-nav-folder-item-group">
                      <div className="header-menu-nav-folder-item-group-title">
                        <div className="header-menu-nav-folder-item header-menu-nav-folder-item--external">
                          <a href="https://order.online/business/square-pie-guys-233210/?hideModal=true&pickup=true" target="_blank" rel="noopener" data-test="template-nav">
                            <span className="visually-hidden">Opens external link</span>Castro Valley
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-nav-item" data-test="template-nav">
                <a href="/catering-1" className="" data-test="template-nav">CATERING</a>
              </div>
            </div>
            <div className="header-title-nav-wrapper" data-test-id="header-title-nav-wrapper">
              <div className="header-title" data-test-id="header-title">
                <h1 className="header-title-text">
                  <a href="/" rel="home">
                    <Image data-src="/image-7.webp" className="loaded" alt="Square Pie Guys" src="/image-7.webp" data-test="header-title-image" width={150} height={100} />
                  </a>
                </h1>
              </div>
            </div>
            <div className="header-actions header-actions--right" data-test-id="header-actions">
              <div className="showOnMobile"></div>
              <div className="showOnDesktop">
                <div className="header-nav">
                  <div className="header-nav-item header-nav-item--cta" data-test="template-nav">
                    <a href="https://order.online/business/square-pie-guys-233210/?hideModal=true&amp;pickup=true" className="btn btn--border" target="_blank" rel="noopener" data-test="template-nav">
                      <span className="visually-hidden">Opens external link</span>Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-burger" data-test-id="header-burger">
              <button className="header-burger-btn burger" data-test="header-burger">
                <span hidden>Open Menu</span>
                <div className="burger-box">
                  <div className="burger-inner"></div>
                </div>
              </button>
            </div>
          </div>
          <div className="header-menu header-menu--folder-list" data-test-id="header-menu" data-current-styles="{
                                    &quot;layout&quot;: &quot;brandingCenterNavCenter&quot;,
                                    &quot;action&quot;: {
                                      &quot;href&quot;: &quot;https://order.online/business/square-pie-guys-233210/?hideModal=true&amp;pickup=true&quot;,
                                      &quot;buttonText&quot;: &quot;Order Now&quot;,
                                      &quot;newWindow&quot;: true
                                    },
                                    &quot;showSocial&quot;: false,
                                    &quot;socialOptions&quot;: {
                                      &quot;socialBorderShape&quot;: &quot;none&quot;,
                                      &quot;socialBorderStyle&quot;: &quot;outline&quot;,
                                      &quot;socialBorderThickness&quot;: {
                                        &quot;unit&quot;: &quot;px&quot;,
                                        &quot;value&quot;: 1.0
                                      }
                                    },
                                    &quot;sectionTheme&quot;: &quot;white&quot;,
                                    &quot;menuOverlayTheme&quot;: &quot;bright&quot;,
                                    &quot;menuOverlayAnimation&quot;: &quot;fade&quot;,
                                    &quot;cartStyle&quot;: &quot;cart&quot;,
                                    &quot;cartText&quot;: &quot;Cart&quot;,
                                    &quot;showEmptyCartState&quot;: false,
                                    &quot;cartOptions&quot;: {
                                      &quot;iconType&quot;: &quot;solid-2&quot;,
                                      &quot;cartBorderShape&quot;: &quot;none&quot;,
                                      &quot;cartBorderStyle&quot;: &quot;outline&quot;,
                                      &quot;cartBorderThickness&quot;: {
                                        &quot;unit&quot;: &quot;px&quot;,
                                        &quot;value&quot;: 1.0
                                      }
                                    },
                                    &quot;showButton&quot;: true,
                                    &quot;showCart&quot;: true,
                                    &quot;showAccountLogin&quot;: false,
                                    &quot;headerStyle&quot;: &quot;solid&quot;,
                                    &quot;languagePicker&quot;: {
                                      &quot;enabled&quot;: false,
                                      &quot;iconEnabled&quot;: false,
                                      &quot;iconType&quot;: &quot;globe&quot;,
                                      &quot;flagShape&quot;: &quot;shiny&quot;,
                                      &quot;languageFlags&quot;: [ ]
                                    },
                                    &quot;iconOptions&quot;: {
                                      &quot;desktopDropdownIconOptions&quot;: {
                                        &quot;size&quot;: {
                                          &quot;unit&quot;: &quot;em&quot;,
                                          &quot;value&quot;: 1.0
                                        },
                                        &quot;iconSpacing&quot;: {
                                          &quot;unit&quot;: &quot;em&quot;,
                                          &quot;value&quot;: 0.35
                                        },
                                        &quot;strokeWidth&quot;: {
                                          &quot;unit&quot;: &quot;px&quot;,
                                          &quot;value&quot;: 1.0
                                        },
                                        &quot;endcapType&quot;: &quot;square&quot;,
                                        &quot;folderDropdownIcon&quot;: &quot;none&quot;,
                                        &quot;languagePickerIcon&quot;: &quot;openArrowHead&quot;
                                      },
                                      &quot;mobileDropdownIconOptions&quot;: {
                                        &quot;size&quot;: {
                                          &quot;unit&quot;: &quot;em&quot;,
                                          &quot;value&quot;: 1.0
                                        }
                                      }
                                    }
                                  }">
            <div className="header-menu-bg theme-bg--primary"></div>
            <div className="header-menu-nav">
              <nav className="header-menu-nav-list" data-test="header-menu-nav-list">
                <div data-folder="root" className="header-menu-nav-folder">
                  <div className="header-menu-nav-folder-item-group">
                    <div className="header-menu-nav-folder-item-group-title">
                      <div className="header-menu-nav-folder-item header-menu-nav-folder-item--collection">
                        <a href="/" className="" data-test="header-menu-nav-item">
                          <span className="header-menu-nav-item-content">Home</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="header-menu-nav-folder-item-group">
                    <div className="header-menu-nav-folder-item-group-title">
                      <div className="header-menu-nav-folder-item header-menu-nav-folder-item--folder">
                        <a className="header-menu-nav-folder-item-folder-title" data-test="header-menu-nav-item">
                          <span className="header-menu-nav-item-content">LOCATIONS</span>
                        </a>
                      </div>
                    </div>
                    <div className="header-menu-nav-folder-item-group-content">
                      <div className="header-menu-nav-folder-item header-menu-nav-folder-item--external">
                        <a href="https://order.online/business/square-pie-guys-233210/?hideModal=true&pickup=true" target="_blank" rel="noopener" className="" data-test="header-menu-nav-item">
                          <span className="visually-hidden">Opens external link</span>
                          <span className="header-menu-nav-item-content">Castro Valley</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="header-menu-nav-folder-item-group">
                    <div className="header-menu-nav-folder-item-group-title">
                      <div className="header-menu-nav-folder-item header-menu-nav-folder-item--collection">
                        <a href="/catering-1" className="" data-test="header-menu-nav-item">
                          <span className="header-menu-nav-item-content">CATERING</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="header-menu-nav-folder-item-group">
                    <div className="header-menu-nav-folder-item-group-title">
                      <div className="header-menu-nav-folder-item header-menu-nav-folder-item--external">
                        <a href="https://order.online/business/square-pie-guys-233210/?hideModal=true&amp;pickup=true" target="_blank" rel="noopener" className="" data-test="header-menu-nav-item">
                          <span className="visually-hidden">Opens external link</span>
                          <span className="header-menu-nav-item-content">Order Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}