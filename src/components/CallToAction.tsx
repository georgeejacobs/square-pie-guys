"use client"

export default function CallToAction() {
  return (
    <section data-test="page-section" data-section-theme="bright" className="page-section has-section-divider
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      
        section-height--custom
      
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    bright" data-animation="none" data-fluid-engine-section="" style={{ minHeight: '1vh', paddingTop: '184px' }} data-active="true">
      <div className="section-border" style={{ clipPath: 'url(#section-divider-6930bd19e0cd98208c29ff2e)' }}>
        <div className="section-background">
        
          
        
        </div>
      </div>
      <div className="content-wrapper" style={{
          paddingTop: 'calc(1vmax / 10)', 
          paddingBottom: 'calc(1vmax / 10)'
        }}>
        <div className="content">
          
          
          
          
          
          
          
          
          
          
          <div data-fluid-engine="true">
            <style jsx>{`
              .fe-6930bd19e0cd98208c29ff2c {
                --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
                --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

                display: grid;
                position: relative;
                grid-area: 1/1/-1/-1;
                grid-template-rows: repeat(2,minmax(24px, auto));
                grid-template-columns:
                  minmax(var(--grid-gutter), 1fr)
                  repeat(8, minmax(0, var(--cell-max-width)))
                  minmax(var(--grid-gutter), 1fr);
                row-gap: 11.0px;
                column-gap: 11.0px;
                overflow-x: hidden;
                overflow-x: clip;
              }

              @media (min-width: 768px) {
                .background-width--inset .fe-6930bd19e0cd98208c29ff2c {
                  --inset-padding: calc(var(--sqs-site-gutter) * 2);
                }

                .fe-6930bd19e0cd98208c29ff2c {
                  --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
                  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
                  --inset-padding: 0vw;

                  --row-height-scaling-factor: 0.0215;
                  --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

                  grid-template-rows: repeat(2,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
                  grid-template-columns:
                    minmax(var(--grid-gutter), 1fr)
                    repeat(24, minmax(0, var(--cell-max-width)))
                    minmax(var(--grid-gutter), 1fr);
                }
              }

              .fe-block-4ec6f7970b0f5f240202 {
                grid-area: 1/1/3/11;
                z-index: 2;
              }

              .fe-block-4ec6f7970b0f5f240202 .sqs-block {
                justify-content: center;
              }

              .fe-block-4ec6f7970b0f5f240202 .sqs-block-alignment-wrapper {
                align-items: center;
              }

              @media (min-width: 768px) {
                .fe-block-4ec6f7970b0f5f240202 {
                  grid-area: 1/1/3/27;
                  z-index: 2;
                }

                .fe-block-4ec6f7970b0f5f240202 .sqs-block {
                  justify-content: center;
                }

                .fe-block-4ec6f7970b0f5f240202 .sqs-block-alignment-wrapper {
                  align-items: center;
                }
              }
            `}</style>
            <div className="fluid-engine fe-6930bd19e0cd98208c29ff2c">
              <div className="fe-block fe-block-4ec6f7970b0f5f240202" style={{ mixBlendMode: 'normal' }}>
                <div className="sqs-block marquee-block sqs-block-marquee" data-blend-mode="NORMAL" data-block-type="70" data-sqsp-block="scrolling" id="block-4ec6f7970b0f5f240202">
                  <div className="sqs-block-content">
                    <div className="Marquee" style={{ fontSize: '1.2rem', '--marquee-font-size-value': '1.2' } as any} data-ready="true">
                      <div className="Marquee-inner">
                        <div className="Marquee-content">
                          <span className="Marquee-item">YOU SAY PIZZA</span>
                          <span className="Marquee-item">🍕</span>
                          <span className="Marquee-item">WE SAY PIE</span>
                          <span className="Marquee-item">🍕</span>
                          <span className="Marquee-item">IT'S ALL YUM</span>
                          <span className="Marquee-item">🍕</span>
                        </div>
                      </div>
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