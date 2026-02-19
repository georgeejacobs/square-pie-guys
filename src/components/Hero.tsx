"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section data-test="page-section" data-section-theme="bright" className="page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      
        section-height--custom
      
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    bright" data-animation="none" data-fluid-engine-section="" id="yui_3_17_2_1_1771485672319_100" data-active="true">
      <div className="section-border">
        <div className="section-background">
        
          
        
        </div>
      </div>
      <div className="content-wrapper" style={{
          paddingTop: 'calc(0vmax / 10)',
          paddingBottom: 'calc(0vmax / 10)'
        }} id="yui_3_17_2_1_1771485672319_99">
        <div className="content" id="yui_3_17_2_1_1771485672319_98">
          
          
          
          
          
          
          
          
          
          
          <div data-fluid-engine="true" id="yui_3_17_2_1_1771485672319_97">
            <style jsx>{`

.fe-698a0a3e60fce413c1f376a0 {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 0.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (0.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(22,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 0.0px;
  column-gap: 0.0px;
  overflow-x: hidden;
  overflow-x: clip;
}

@media (min-width: 768px) {
  .background-width--inset .fe-698a0a3e60fce413c1f376a0 {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-698a0a3e60fce413c1f376a0 {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 0.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (0.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(22,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


  .fe-block-285af37c613630428606 {
    grid-area: 3/2/10/10;
    z-index: 1;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-285af37c613630428606 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-285af37c613630428606 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-285af37c613630428606 {
      grid-area: 3/2/14/13;
      z-index: 1;

      

      
    }

    .fe-block-285af37c613630428606 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-285af37c613630428606 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-c0ad296aeae3862dfb63 {
    grid-area: 11/2/18/10;
    z-index: 4;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-c0ad296aeae3862dfb63 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-c0ad296aeae3862dfb63 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-c0ad296aeae3862dfb63 {
      grid-area: 15/2/22/12;
      z-index: 4;

      

      
    }

    .fe-block-c0ad296aeae3862dfb63 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-c0ad296aeae3862dfb63 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-b9aa47891e245e329759 {
    grid-area: 11/4/17/9;
    z-index: 5;

    @media (max-width: 767px) {
      
        
      
      
        display: none;
        visibility: hidden;
      
    }
  }

  .fe-block-b9aa47891e245e329759 .sqs-block {
    justify-content: center;
  }

  .fe-block-b9aa47891e245e329759 .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-b9aa47891e245e329759 {
      grid-area: 8/13/16/19;
      z-index: 5;

      
        
      

      
    }

    .fe-block-b9aa47891e245e329759 .sqs-block {
      justify-content: center;
    }

    .fe-block-b9aa47891e245e329759 .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

  .fe-block-a705943738e3a5a1af83 {
    grid-area: 16/2/22/10;
    z-index: 6;

    @media (max-width: 767px) {
      
        
      
      
        display: none;
        visibility: hidden;
      
    }
  }

  .fe-block-a705943738e3a5a1af83 .sqs-block {
    justify-content: center;
  }

  .fe-block-a705943738e3a5a1af83 .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-a705943738e3a5a1af83 {
      grid-area: 6/18/18/26;
      z-index: 6;

      
        
      

      
    }

    .fe-block-a705943738e3a5a1af83 .sqs-block {
      justify-content: center;
    }

    .fe-block-a705943738e3a5a1af83 .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

  .fe-block-97a7dc9199a5474f666d {
    grid-area: 19/2/21/10;
    z-index: 3;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-97a7dc9199a5474f666d .sqs-block {
    justify-content: center;
  }

  .fe-block-97a7dc9199a5474f666d .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-97a7dc9199a5474f666d {
      grid-area: 11/20/13/24;
      z-index: 2;

      

      
    }

    .fe-block-97a7dc9199a5474f666d .sqs-block {
      justify-content: center;
    }

    .fe-block-97a7dc9199a5474f666d .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

`}</style>
            <div className="fluid-engine fe-698a0a3e60fce413c1f376a0" id="yui_3_17_2_1_1771485672319_96">
              <div className="fe-block fe-block-285af37c613630428606" style={{ mixBlendMode: 'normal' }}>
                <div className="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-sqsp-block="text" id="block-285af37c613630428606">
                  <div className="sqs-block-content">
                    <div className="sqs-html-content" data-sqsp-text-block-content="">
                      <h1 style={{ whiteSpace: 'pre-wrap' }}>This is your sign to Order some pizza.</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fe-block fe-block-c0ad296aeae3862dfb63" style={{ mixBlendMode: 'normal' }}>
                <div className="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-sqsp-block="text" id="block-c0ad296aeae3862dfb63">
                  <div className="sqs-block-content">
                    <div className="sqs-html-content" data-sqsp-text-block-content="">
                      <p className="" style={{ whiteSpace: 'pre-wrap' }}>
                        <strong>You didn't come here just to come here — it's time to order some pizza </strong>😌.
                      </p>
                      <p className="" style={{ whiteSpace: 'pre-wrap' }}>
                        Support local and order directly from us for better pricing, better pizza, and more of what you love!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fe-block fe-block-b9aa47891e245e329759" id="yui_3_17_2_1_1771485672319_95">
                <div className="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block sqs-text-ready" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" id="block-b9aa47891e245e329759">
                  <div className="sqs-block-content" id="yui_3_17_2_1_1771485672319_94" style={{ height: '100%', width: '100%' }}>
                    <div className="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-center combination-animation-site-default individual-animation-site-default sqs-narrow-width animation-loaded" data-component-id="b9aa47891e245e329759" data-test="image-block-fluid-outer-wrapper" data-is-image-stretched="false" data-is-mask-applied="false" data-media-focal-point="0.5,0.5" id="yui_3_17_2_1_1771485672319_93">
                      <div className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper" data-animation-role="image" id="yui_3_17_2_1_1771485672319_92">
                        <div className="fluid-image-container sqs-image-content js-image-container" style={{ overflow: 'hidden', maskImage: '-webkit-radial-gradient(center, white, black)', height: '100%', width: '228px' }} data-sqsp-image-block-image-container="" id="yui_3_17_2_1_1771485672319_91">
                          <div className="js-content-mode-element content-fit" id="yui_3_17_2_1_1771485672319_90">
                            <Image
                              data-stretch="false"
                              data-src="/image-10.webp"
                              data-image="/image-10.webp"
                              data-image-dimensions="500x500"
                              data-image-focal-point="0.5,0.5"
                              data-sqsp-image-block-image=""
                              alt=""
                              data-licensed-asset-preview="false"
                              data-load="false"
                              src="/image-10.webp"
                              width={500}
                              height={500}
                              sizes="(max-width: 640px) 100vw, (max-width: 767px) 62.5vw, 25vw"
                              style={{ display: 'block', objectPosition: 'var(--image-component-focal-point)' as any, objectFit: 'var(--image-component-object-fit)' as any } as any}
                              loading="lazy"
                            />
                            <div className="fluidImageOverlay"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fe-block fe-block-a705943738e3a5a1af83" id="yui_3_17_2_1_1771485672319_110">
                <div className="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block sqs-text-ready" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" id="block-a705943738e3a5a1af83">
                  <div className="sqs-block-content" style={{ height: '100%', width: '100%' }}>
                    <div className="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-center combination-animation-site-default individual-animation-site-default sqs-narrow-width animation-loaded" data-component-id="a705943738e3a5a1af83" data-test="image-block-fluid-outer-wrapper" data-is-image-stretched="false" data-is-mask-applied="false" data-media-focal-point="0.5,0.5">
                      <div className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper" data-animation-role="image">
                        <div className="fluid-image-container sqs-image-content js-image-container" style={{ overflow: 'hidden', maskImage: '-webkit-radial-gradient(center, white, black)', height: '100%', width: '315px' }} data-sqsp-image-block-image-container="">
                          <div className="js-content-mode-element content-fit">
                            <Image
                              data-stretch="false"
                              data-src="/image-11.webp"
                              data-image="/image-11.webp"
                              data-image-dimensions="500x500"
                              data-image-focal-point="0.5,0.5"
                              data-sqsp-image-block-image=""
                              alt=""
                              data-licensed-asset-preview="false"
                              data-load="false"
                              src="/image-11.webp"
                              width={500}
                              height={500}
                              sizes="(max-width: 640px) 100vw, (max-width: 767px) 62.5vw, 25vw"
                              style={{ display: 'block', objectPosition: 'var(--image-component-focal-point)' as any, objectFit: 'var(--image-component-object-fit)' as any } as any}
                              loading="lazy"
                            />
                            <div className="fluidImageOverlay"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fe-block fe-block-97a7dc9199a5474f666d">
                <div className="sqs-block button-block sqs-block-button sqs-text-ready" data-block-type="53" id="block-97a7dc9199a5474f666d">
                  <div className="sqs-block-content" id="yui_3_17_2_1_1771485672319_113">
                    <div className="sqs-block-button-container sqs-block-button-container--center" data-animation-role="button" data-sqsp-animation-type="block" data-sqsp-animation-delay="1s" data-sqsp-text-block-content="" id="yui_3_17_2_1_1771485672319_112">
                      <a href="https://order.toasttab.com/online/square-pie-guys-2639-mission-st" className="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" data-sqsp-button="" target="_blank">
                        ORDER HERE 🍕
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