"use client"

import Image from "next/image"

export default function Specials() {
  return (
    <section 
      data-test="page-section" 
      data-section-theme="bright" 
      className="page-section layout-engine-section background-width--full-bleed section-height--large content-width--wide horizontal-alignment--center vertical-alignment--middle bright" 
      data-section-id="673a8e8ba4ae1d4c8b1c8ff7" 
      data-page-sections="673a8e8ba4ae1d4c8b1c8ff5,673a8e8ba4ae1d4c8b1c8ff6,673a8e8ba4ae1d4c8b1c8ff7,673a8e8ba4ae1d4c8b1c8ff8,673a8e8ba4ae1d4c8b1c8ff9,673a8e8ba4ae1d4c8b1c8ffa,673a8e8ba4ae1d4c8b1c8ffb,673a8e8ba4ae1d4c8b1c8ffc,673a8e8ba4ae1d4c8b1c8ffd,673a8e8ba4ae1d4c8b1c8ffe" 
      style={{
        paddingTop: '17vmax',
        paddingBottom: '17vmax'
      }}
    >
      <div className="section-border">
        <div className="section-background"></div>
      </div>
      <div 
        className="content-wrapper" 
        style={{
          paddingLeft: 'calc(var(--sqs-site-gutter) * 0.5)', 
          paddingRight: 'calc(var(--sqs-site-gutter) * 0.5)'
        }}
      >
        <div className="content">
          <div data-fluid-engine="true">
            <style dangerouslySetInnerHTML={{
              __html: `
                .fe-block-e037bcb736d1b1d28f4c {
                  grid-area: 1 / 1 / 2 / 13;
                  z-index: 2;
                }
                
                @media (max-width: 767px) {
                  .fe-block-e037bcb736d1b1d28f4c {
                    grid-area: 1 / 1 / 2 / 5;
                  }
                }
              `
            }} />
            <div className="fluid-engine fe-673a8ee2a4ae1d4c8b1c8ffc">
              <div className="fe-block fe-block-e037bcb736d1b1d28f4c">
                <div 
                  className="sqs-block html-block sqs-block-html" 
                  data-block-type="2" 
                  id="block-e037bcb736d1b1d28f4c"
                >
                  <div className="sqs-block-content">
                    <div className="sqs-html-content">
                      <h1 
                        style={{
                          textAlign: 'center',
                          whiteSpace: 'pre-wrap'
                        }}
                      >
                        <strong>Today's Deal Spotlight</strong>
                      </h1>
                      <p 
                        className="" 
                        style={{
                          whiteSpace: 'pre-wrap',
                          textAlign: 'center'
                        }}
                      >
                        Don't miss out on the exclusive offer that's available TODAY ONLY. 
                        Get it before it's gone!
                      </p>
                      <p 
                        className="" 
                        style={{
                          whiteSpace: 'pre-wrap',
                          textAlign: 'center'
                        }}
                      >
                        <a href="/deals">
                          <Image 
                            src="/image-9.webp" 
                            alt="Deals Calendar"
                            width={800}
                            height={600}
                          />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}