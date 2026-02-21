"use client"

import Image from "next/image"

export default function Features() {
  return (
    <section data-test="page-section" data-section-theme="black-bold" className="page-section full-bleed-section layout-engine-section background-width--full-bleed section-height--large content-width--wide horizontal-alignment--center vertical-alignment--bottom has-background black-bold" data-animation="none">
      <div className="section-border">
        <div className="section-background">
          <div className="section-background-content">
            <Image 
              alt="" 
              crossOrigin="anonymous" 
              src="/image-0.webp" 
              width={2220} 
              height={1644} 
              sizes="(max-width: 799px) 200vw, 100vw" 
              className="background-image-fx" 
              style={{ display: 'block', objectPosition: '50% 50%', visibility: 'visible' } as any}
              loading="lazy" 
            />
            <div className="section-background-canvas background-fx-canvas"></div>
          </div>
          <div className="section-background-overlay" style={{ opacity: '0.14' }}></div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content">
          <div>
            <style jsx>{`

              #block-ae2cfd5144aff2bb1d2c {
                --sqs-block-content-flex: 1;
              }
            `}</style>
            <div className="fluid-engine fe-697f96a8134cbc609c3273d3">
              <div className="fe-block fe-block-5dacb88ca2ca00706e81" style={{ mixBlendMode: 'normal' }}>
                <div className="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-sqsp-block="text" id="block-5dacb88ca2ca00706e81">
                  <div className="sqs-block-content">
                    <div className="sqs-html-content" data-sqsp-text-block-content="">
                      <pre><code>P-lo PiE</code></pre>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fe-block fe-block-85141784fcf8b3d64446" style={{ mixBlendMode: 'normal' }}>
                <div className="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-sqsp-block="text" id="block-85141784fcf8b3d64446">
                  <div className="sqs-block-content">
                    <div className="sqs-html-content" data-sqsp-text-block-content="">
                      <div className="sqsrte-scaled-text-container loaded">
                        <span className="sqsrte-scaled-text" style={{ fontSize: '131.7px' }}>
                          <h1 style={{ whiteSpace: 'pre-wrap' }}>THE P-LO PIE IS HERe. </h1>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fe-block fe-block-ae2cfd5144aff2bb1d2c">
                <div className="sqs-block website-component-block sqs-block-website-component sqs-block-button button-block" data-block-type="1337" data-definition-name="website.components.button" data-sqsp-block="button" id="block-ae2cfd5144aff2bb1d2c">
                  <div className="sqs-block-content">
                    <div className="sqs-block-button-container  sqs-block-button-container--center sqs-stretched" data-animation-role="button" data-button-size="medium" data-button-type="primary"> 
                      <a href="/seasonalmenu" className="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" data-sqsp-button="" target="_blank">
                        MORE HERE!
                      </a>
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