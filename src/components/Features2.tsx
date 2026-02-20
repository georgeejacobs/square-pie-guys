"use client";

import Image from "next/image";

export default function Features2() {
  return (
    <section 
      data-test="page-section" 
      data-section-theme="bright" 
      className="page-section full-bleed-section layout-engine-section background-width--full-bleed section-height--custom content-width--wide horizontal-alignment--center vertical-alignment--middle bright" 
      data-animation="none" 
      id="yui_3_17_2_1_1771614652502_150"
    >
      <div className="section-border">
        <div className="section-background"></div>
      </div>
      <div 
        className="content-wrapper" 
        style={{ paddingTop: 'calc(0vmax / 10)', paddingBottom: 'calc(0vmax / 10)' }} 
        id="yui_3_17_2_1_1771614652502_149"
      >
        <div className="content" id="yui_3_17_2_1_1771614652502_148">
          <div id="yui_3_17_2_1_1771614652502_147">
            
            <div className="fluid-engine fe-65a1c9d0ac1b343be05159cc" id="yui_3_17_2_1_1771614652502_146">
              <div className="fe-block fe-block-7b816d4d13531865e314" id="yui_3_17_2_1_1771614652502_145">
                <div className="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block sqs-text-ready" data-aspect-ratio="117.61126270797615" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" id="block-7b816d4d13531865e314">
                  <div className="sqs-block-content" id="yui_3_17_2_1_1771614652502_144" style={{ height: '100%', width: '100%' }}>
                    <div className="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-center combination-animation-site-default individual-animation-site-default" data-component-id="7b816d4d13531865e314" data-test="image-block-fluid-outer-wrapper" data-is-image-stretched="true" data-is-mask-applied="false" data-media-focal-point="0.5,0.5" id="yui_3_17_2_1_1771614652502_143">
                      <div className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper" data-animation-role="image" id="yui_3_17_2_1_1771614652502_142">
                        <div className="fluid-image-container sqs-image-content js-image-container" style={{ overflow: 'hidden', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }} id="yui_3_17_2_1_1771614652502_141">
                          <div className="js-content-mode-element content-fill" id="yui_3_17_2_1_1771614652502_137">
                            <Image
                              src="/image-1.webp"
                              alt="A family meal with various dishes including a large rectangular pizza with toppings, a slice of pepperoni pizza, fried chicken wings garnished with green onions, a bowl of salad with lettuce and cheese, a side of French fries, and glasses of pink and red drinks."
                              width={4996}
                              height={3331}
                              sizes="100vw"
                              style={{ display: 'block', objectPosition: 'var(--image-component-focal-point)' as any, objectFit: 'var(--image-component-object-fit)' as any } as any}
                            />
                            <div className="imageEffectContainer"></div>
                            <div className="fluidImageOverlay"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fe-block fe-block-db73a2bc0e9f3fe93b8a" style={{ mixBlendMode: 'normal' }}>
                <div className="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-sqsp-block="text" id="block-db73a2bc0e9f3fe93b8a">
                  <div className="sqs-block-content">
                    <div className="sqs-html-content" data-sqsp-text-block-content="">
                      <h1 style={{ whiteSpace: 'pre-wrap' }}>On mondays we order the big box.</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fe-block fe-block-42ea9b9c194822fa3437" style={{ mixBlendMode: 'normal' }}>
                <div className="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-sqsp-block="text" id="block-42ea9b9c194822fa3437">
                  <div className="sqs-block-content">
                    <div className="sqs-html-content" data-sqsp-text-block-content="">
                      <p className="" style={{ whiteSpace: 'pre-wrap' }}>
                        <strong>Don't you just hate Mondays? Well, we don't! On Mondays we order the Big Box and double our trouble.</strong>
                      </p>
                      <p className="" style={{ whiteSpace: 'pre-wrap' }}>
                        On Mondays and Mondays only, you'll find "The Big Box Deal" as a menu item (no promo code required). Select your first pizza, and then select your second pizza for $12.05.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fe-block fe-block-3051c7258fdf7da45539">
                <div className="sqs-block website-component-block sqs-block-website-component sqs-block-button button-block" data-block-type="1337" data-definition-name="website.components.button" data-sqsp-block="button" id="block-3051c7258fdf7da45539">
                  <div className="sqs-block-content">
                    <div className="button-component-root button-block-outer-wrapper design-layout-inline-block button-position-center combination-animation-site-default individual-animation-site-default" data-component-id="3051c7258fdf7da45539">
                      <div className="button-animation-wrapper">
                        <div className="sqs-block-alignment-wrapper" data-alignment="center">
                          <a href="https://order.northsidesocialcoffee.com/menu/square-pie-guys" target="_blank" rel="noopener" className="sqs-block-button-element--medium sqs-block-button-element sqs-button-element--primary" data-initialized="true">
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
        </div>
      </div>
    </section>
  );
}