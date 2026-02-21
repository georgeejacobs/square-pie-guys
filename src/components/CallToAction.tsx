"use client"

import Image from "next/image"

export default function CallToAction() {
  return (
    <section data-test="page-section" data-section-theme="white" className="page-section full-bleed-section layout-engine-section background-width--full-bleed section-height--medium content-width--wide horizontal-alignment--center vertical-alignment--middle has-background white" data-animation="none" id="yui_3_17_2_1_1771649240720_205">
      <div className="section-border">
        <div className="section-background">
          <Image 
            alt="" 
            src="/image-5.png"
            width={2532} 
            height={1404} 
            sizes="(max-width: 799px) 200vw, 100vw" 
            style={{ display: 'block', objectPosition: '50% 50%' }} 
            loading="lazy" 
            decoding="async"
          />
          <div className="section-background-overlay" style={{ opacity: '0.15' }}></div>
        </div>
      </div>
      <div className="content-wrapper" id="yui_3_17_2_1_1771649240720_204">
        <div className="content" id="yui_3_17_2_1_1771649240720_203">
          <div id="yui_3_17_2_1_1771649240720_202">
            
            <div className="fluid-engine fe-6596f6510337c27da4828ba5" id="yui_3_17_2_1_1771649240720_201">
              <div className="fe-block fe-block-1ef399867fe80a1a9b64" id="yui_3_17_2_1_1771649240720_200">
                <div className="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block sqs-text-ready" data-aspect-ratio="100" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" id="block-1ef399867fe80a1a9b64">
                  <div className="sqs-block-content" id="yui_3_17_2_1_1771649240720_199" style={{ height: '100%', width: '100%' }}>
                    <div className="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-center combination-animation-site-default individual-animation-site-default" data-component-id="1ef399867fe80a1a9b64" data-test="image-block-fluid-outer-wrapper" data-is-image-stretched="false" data-is-mask-applied="true" data-media-focal-point="0.5,0.5" id="yui_3_17_2_1_1771649240720_198">
                      <div className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper" data-animation-role="image" id="yui_3_17_2_1_1771649240720_197">
                        <div className="fluid-image-container sqs-image-content js-image-container" data-shape-mask="eight-sided-shield" style={{ overflow: 'hidden', clipPath: 'url("#1ef399867fe80a1a9b64")', width: '100%', height: '657px' }} id="yui_3_17_2_1_1771649240720_196">
                          <div className="js-content-mode-element content-fill" id="yui_3_17_2_1_1771649240720_193">
                            <Image 
                              data-stretch="false" 
                              src="https://images.squarespace-cdn.com/content/v1/64b164dfe7e65e1a8cd14aff/385cb7e5-20b6-4330-83c4-e09263d49567/061222_SPG_Ghirardelli_EDITED_MelatiCitrawireja_-53+%281%29+%281%29.jpg" 
                              alt="Top-down view of various bowls and plates with salad, fried chicken, pasta salad, and chicken wings, on a wooden table." 
                              width={5397} 
                              height={3598} 
                              sizes="100vw" 
                              style={{ display: 'block', objectPosition: 'var(--image-component-focal-point)' as any, objectFit: 'var(--image-component-object-fit)' as any } as any} 
                              loading="lazy" 
                              decoding="async"
                            />
                            <div className="fluidImageOverlay"></div>
                          </div>
                        </div>
                        <svg data-image-mask-id="1ef399867fe80a1a9b64" width="0" height="0" style={{ position: 'absolute' }}>
                          <defs>
                            <clipPath id="1ef399867fe80a1a9b64" clipPathUnits="objectBoundingBox">
                              <path d="M0.5,0 L0.957,0.065,1,0.5,0.957,0.935 L0.5,1,0.043,0.935,0,0.5,0.043,0.065,0.5,0"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fe-block fe-block-23ee79784a4739adc244" style={{ mixBlendMode: 'normal' }}>
                <div className="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-sqsp-block="text" id="block-23ee79784a4739adc244">
                  <div className="sqs-block-content">
                    <div className="sqs-html-content">
                      <h1 style={{ whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--accent">Give the gift of Pie</span></h1>
                      <p className="" style={{ whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--accent">Grab a gift card today to share the pizza love with all the people you love! </span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fe-block fe-block-yui_3_17_2_1_1706211787573_32812">
                <div className="sqs-block website-component-block sqs-block-website-component sqs-block-button button-block" data-block-type="2" id="block-yui_3_17_2_1_1706211787573_32812">
                  <div className="sqs-block-content">
                    <div className="sqs-button-element--medium sqs-button-element sqs-block-button-element" id="yui_3_17_2_1_1771649240720_194">
                      <a className="sqs-block-button-element-link" href="/gift-cards" target="_blank" rel="noopener">
                        GIFT CARDS
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