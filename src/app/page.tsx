
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";

export default function Home() {
  return (
    <div className="site-container">

      <Navbar />

      <main>

        {/* EXISTING CAROUSEL */}
        <section id="home">
          <HeroSection />
        </section>


        {/* 01 - ABOUT COMPANY */}
        <section id="about" className="about-editorial">

            <div className="about-content">

              <div className="about-heading">

                <p className="editorial-label">
                  INTRODUCING ASTON MARTIN
                </p>

                <h1>
                  A British marque with a history
                  of performance.
                </h1>

              </div>

              <div className="about-copy">

                <p className="about-lead">
                  Aston Martin is a British automotive
                  manufacturer founded in 1913.
                  The company produces luxury sports
                  cars, grand tourers, and SUVs.
                </p>

                <p>
                  Based in Gaydon, England, Aston Martin
                  combines automotive engineering,
                  distinctive exterior design, and
                  carefully developed interiors.
                </p>

                <a href="#heritage" className="editorial-link">
                  EXPLORE OUR HISTORY
                </a>

              </div>

            </div>

        </section>


        {/* 02 - COMPANY HISTORY */}
        <section
          id="heritage"
          className="history-editorial"
        >

          <div className="history-shell">

            <div className="history-heading">

              <h2>
                Over a century
                <br />
                in motion.
              </h2>

              <p className="history-intro">
                From its founding in England to its
                position in the modern automotive
                industry, Aston Martin has developed
                a distinctive British identity.
              </p>

            </div>


            {/* EDITORIAL TIMELINE */}
            <div className="history-timeline">

              <article className="timeline-entry">

                <span className="timeline-number">
                  1913
                </span>

                <div className="timeline-content">

                  <h3>The Beginning</h3>

                  <p>
                    Aston Martin was founded by
                    Lionel Martin and Robert Bamford
                    in England.
                  </p>

                </div>

              </article>


              <article className="timeline-entry">

                <span className="timeline-number">
                  02
                </span>

                <div className="timeline-content">

                  <h3>Motorsport</h3>

                  <p>
                    Motorsport became an important
                    part of the brand's history and
                    automotive development.
                  </p>

                </div>

              </article>


              <article className="timeline-entry">

                <span className="timeline-number">
                  03
                </span>

                <div className="timeline-content">

                  <h3>The Modern Era</h3>

                  <p>
                    The company continues to develop
                    luxury sports cars, grand tourers,
                    and SUVs.
                  </p>

                </div>

              </article>

            </div>

          </div>

        </section>


        {/* 03 - OUR APPROACH */}
        <section
          id="craftsmanship"
          className="approach-editorial"
        >

          <div className="approach-shell">

            <div className="approach-heading">

              <h2>
                The details make
                the difference.
              </h2>

              <p>
                The development of an Aston Martin
                involves more than performance.
                Design, engineering, and materials
                all play an important role.
              </p>

            </div>


            {/* THREE EDITORIAL ROWS */}
            <div className="approach-list">

              <article className="approach-row">

                <span className="approach-number">
                  01
                </span>

                <h3>Design</h3>

                <p>
                  Exterior proportions, interior
                  layouts, and distinctive styling
                  define the appearance of each car.
                </p>

              </article>


              <article className="approach-row">

                <span className="approach-number">
                  02
                </span>

                <h3>Engineering</h3>

                <p>
                  Vehicle engineering focuses on
                  performance, handling, technology,
                  and driving experience.
                </p>

              </article>


              <article className="approach-row">

                <span className="approach-number">
                  03
                </span>

                <h3>Craftsmanship</h3>

                <p>
                  Materials, interior finishes, and
                  attention to detail are considered
                  throughout the manufacturing process.
                </p>

              </article>

            </div>

          </div>

        </section>


        {/* 04 - OUR CARS */}
        <section id="cars" className="cars-editorial">

          <div className="cars-overlay">

            <div className="cars-content">

              <h2>
                Explore Our Cars
              </h2>

              <p>
                Discover the Aston Martin range
                and its approach to modern automotive
                design and performance.
              </p>

              <a href="#home" className="cars-link">
                BACK TO TOP
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="editorial-footer">

        <div className="footer-main">

          <div className="footer-brand">
            ASTON MARTIN
          </div>

          <p>
            BRITISH AUTOMOTIVE MANUFACTURER
          </p>

        </div>

        <div className="footer-bottom">

          <span>
            PROJECT ASTON MARTIN.
          </span>

          <span>
            © 2026
          </span>

        </div>

      </footer>

    </div>
  );
}
