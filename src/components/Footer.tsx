"use client"

export default function Footer() {
  return (
    <footer className="sections" id="footer-sections" data-footer-sections="">
      <section data-test="page-section" data-section-theme="bright" className="page-section has-section-divider
        full-bleed-section
        layout-engine-section
      background-width--full-bleed
        section-height--custom
      content-width--wide
      horizontal-alignment--center
      vertical-alignment--middle
      bright" data-animation="none" data-fluid-engine-section="" style={{ minHeight: '7vh' }}>
        <div className="section-border" style={{ clipPath: 'url(#section-divider-658f00a2f272f378735b0764)' }}>
          <div className="section-background">
          </div>
        </div>
        <div className="content-wrapper" style={{
          paddingTop: 'calc(7vmax / 10)', 
          paddingBottom: 'calc(7vmax / 10)'
        }}>
          <div className="content">
            <div data-fluid-engine="true">
              <style jsx>{`
                .fe-658f00a2f272f378735b0763 {
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
                  .background-width--inset .fe-658f00a2f272f378735b0763 {
                    --inset-padding: calc(var(--sqs-site-gutter) * 2);
                  }

                  .fe-658f00a2f272f378735b0763 {
                    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
                    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
                    --inset-padding: 0vw;

                    --row-height-scaling-factor: 0.0215;
                    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

                    grid-template-rows: repeat(1,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
                    grid-template-columns:
                      minmax(var(--grid-gutter), 1fr)
                      repeat(24, minmax(0, var(--cell-max-width)))
                      minmax(var(--grid-gutter), 1fr);
                  }
                }

                .fe-block-78d5c65ecdc06f397a7d {
                  grid-area: 1/1/3/11;
                  z-index: 1;
                }

                .fe-block-78d5c65ecdc06f397a7d .sqs-block {
                  justify-content: center;
                }

                .fe-block-78d5c65ecdc06f397a7d .sqs-block-alignment-wrapper {
                  align-items: center;
                }

                @media (min-width: 768px) {
                  .fe-block-78d5c65ecdc06f397a7d {
                    grid-area: 1/1/2/27;
                    z-index: 1;
                  }

                  .fe-block-78d5c65ecdc06f397a7d .sqs-block {
                    justify-content: center;
                  }

                  .fe-block-78d5c65ecdc06f397a7d .sqs-block-alignment-wrapper {
                    align-items: center;
                  }
                }
              `}</style>
              <div className="fluid-engine fe-658f00a2f272f378735b0763">
                <div className="fe-block fe-block-78d5c65ecdc06f397a7d" style={{ mixBlendMode: 'normal' }}>
                  <div className="sqs-block marquee-block sqs-block-marquee" data-blend-mode="NORMAL" data-block-type="70" data-sqsp-block="scrolling" id="block-78d5c65ecdc06f397a7d">
                    <div className="sqs-block-content">
                      <div className="Marquee" style={{ fontSize: '1.2rem', '--marquee-font-size-value': '1.2' } as any} data-ready="true">
                        <div className="Marquee-body" data-animation-direction="left" data-animation-speed="1.0">
                          <div className="Marquee-items" aria-hidden="true">
                            <div className="Marquee-item">You Say Pizza</div>
                            <div className="Marquee-item">🍕</div>
                            <div className="Marquee-item">We Say Pie</div>
                            <div className="Marquee-item">🍕</div>
                            <div className="Marquee-item">It's All Yum</div>
                            <div className="Marquee-item">🍕</div>
                          </div>
                          <div className="Marquee-items" aria-hidden="true">
                            <div className="Marquee-item">You Say Pizza</div>
                            <div className="Marquee-item">🍕</div>
                            <div className="Marquee-item">We Say Pie</div>
                            <div className="Marquee-item">🍕</div>
                            <div className="Marquee-item">It's All Yum</div>
                            <div className="Marquee-item">🍕</div>
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
    </footer>
  );
}