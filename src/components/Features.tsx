"use client"

import Image from "next/image"

export default function Features() {
  return (
    <section data-test="page-section" data-section-theme="white" className="page-section has-section-divider full-bleed-section layout-engine-section background-width--full-bleed section-height--medium content-width--wide horizontal-alignment--center vertical-alignment--middle has-background white" data-animation="none" id="yui_3_17_2_1_1771526982979_166">
      <div className="section-border" style={{ clipPath: 'url(#section-divider-6585f6588bffa766875dc1bf)' }}>
        <div className="section-background">
          <Image 
            alt=""
            src="/image-5.png"
            width={2532}
            height={1404}
            sizes="(max-width: 799px) 200vw, 100vw"
            style={{ display: 'block', objectPosition: '50% 50%' }}
            loading="lazy"
          />
          <div className="section-background-overlay" style={{ opacity: 0.15 }}></div>
        </div>
      </div>
      <div className="content-wrapper" id="yui_3_17_2_1_1771526982979_165">
        <div className="content" id="yui_3_17_2_1_1771526982979_164">
          <div id="yui_3_17_2_1_1771526982979_163">
            
            <div className="fluid-engine fe-6585f6588bffa766875dc1be" id="yui_3_17_2_1_1771526982979_162">
              <div className="fe-block fe-block-yui_3_17_2_1_1705085365777_87191" id="yui_3_17_2_1_1771526982979_161">
                <div className="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block sqs-text-ready" data-aspect-ratio="100" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" id="block-yui_3_17_2_1_1705085365777_87191">
                  <div className="sqs-block-content" id="yui_3_17_2_1_1771526982979_160" style={{ height: '100%', width: '100%' }}>
                    <div className="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-center combination-animation-site-default individual-animation-site-default" data-component-id="yui_3_17_2_1_1705085365777_87191" data-test="image-block-fluid-outer-wrapper" data-is-image-stretched="false" data-is-mask-applied="true" data-media-focal-point="0.5,0.5" id="yui_3_17_2_1_1771526982979_159">
                      <div className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper" data-animation-role="image" id="yui_3_17_2_1_1771526982979_158">
                        <div className="fluid-image-container sqs-image-content js-image-container" data-shape-mask="eight-sided-shield" style={{ overflow: 'hidden', clipPath: 'url("#yui_3_17_2_1_1705085365777_87191")', width: '100%', height: '657px' }} data-sqsp-image-block-image-container="" id="yui_3_17_2_1_1771526982979_157">
                          <div className="js-content-mode-element content-fill" id="yui_3_17_2_1_1771526982979_154">
                            <Image
                              src="/image-2.jpg"
                              alt="Meal spread including pizza, lasagna, fried chicken with fries, tomato salad, bread with sauce, and various side dishes with drinks on a wooden table."
                              width={5876}
                              height={3917}
                              sizes="100vw"
                              style={{ 
                                display: 'block', 
                                objectPosition: 'var(--image-component-focal-point)' as any, 
                                objectFit: 'var(--image-component-object-fit)' as any 
                              } as any}
                              loading="lazy"
                            />
                            <div className="fluidImageOverlay"></div>
                          </div>
                        </div>
                        <svg data-image-mask-id="yui_3_17_2_1_1705085365777_87191" width="0" height="0" style={{ position: 'absolute' }}>
                          <defs>
                            <clipPath id="yui_3_17_2_1_1705085365777_87191" clipPathUnits="objectBoundingBox">
                              <path d="M0.5,0 L0.957,0.065,1,0.5,0.957,0.935 L0.5,1,0.043,0.935,0,0.5,0.043,0.065,0.5,0"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fe-block fe-block-d5c56f40dea6490c6a02" style={{ mixBlendMode: 'normal' }}>
                <div className="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-sqsp-block="text" id="block-d5c56f40dea6490c6a02">
                  <div className="sqs-block-content">
                    <div className="sqs-html-content" data-sqsp-text-block-content="">
                      <h1 style={{ whiteSpace: 'pre-wrap' }}>
                        <span className="sqsrte-text-color--accent">GET ZERO DELIVERY FEES + CASH-BACK REWARDS.</span>
                      </h1>
                      <p style={{ whiteSpace: 'pre-wrap' }}>
                        Order from the Guys directly and <strong><em>earn BI!</em></strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fe-block fe-block-yui_3_17_2_1_1705085365777_95078">
                <div className="sqs-block button-block sqs-block-button">
                  <div className="sqs-block-content">
                    <div className="sqs-block-button-container sqs-block-button-container--center" data-animation-role="button">
                      <a href="/order-online" className="sqs-block-button-element--medium sqs-block-button-element">
                        ORDER NOW
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