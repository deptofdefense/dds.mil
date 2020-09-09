import React from "react";
import { graphql, PageProps } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import { Layout, SEO, ConditionalLink } from "components";

interface ImageQuery {
  childImageSharp: {
    fluid: any;
  };
}

interface SocialImage {
  childImageSharp: {
    fluid: any;
    original: {
      src: string;
      width: number;
      height: number;
    };
  };
}

interface QueryResult {
  social: SocialImage;
  hero: ImageQuery;
  heroskull: ImageQuery;
  herodatebg: ImageQuery;
  sec2bg: ImageQuery;
  sec3bg: ImageQuery;
  sec4bg: ImageQuery;
  sec2img: ImageQuery;
  bita: ImageQuery;
  cpx: ImageQuery;
  ddsat: ImageQuery;
  nyansat: ImageQuery;
  ddslogo: ImageQuery;
  aflogo: ImageQuery;
  avlogo: ImageQuery;
  hackasatlogo: ImageQuery;
}

const DefconPage: React.FC<PageProps<QueryResult>> = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="DDS @ DEF CON"
        description="For the second year, the Defense Digital Service is partnering with the U.S. Department of the Air Force to participate in Aerospace Village at DEF CON 28. This year we have expanded our scope beyond aviation to include space, specifically satellites!"
        url="/defcon"
        image={data.social.childImageSharp.original}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,200;0,300;0,400;0,500;0,700;1,200;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </SEO>
      <div className="defcon-banner">
        <div className="defcon-banner-inner">
          {/* <span className="defcon-banner-src-first"></span> */}
          <span className="defcon-banner-sec-sec">
            Thanks for a great DEF CON 28 SAFEMODE
          </span>
          <span className="defcon-banner-sec-th">
            &nbsp;Check back here for our plans for DEF CON 29
          </span>
          {/* <div className="defcon-banner-sec-learn">LEARN MORE</div> */}
        </div>
      </div>

      <div className="defcon-hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          className="defcon-hero-bg"
        />
        <div className="defcon-hero-content">
          <div className="defcon-hero-skull">
            <Img fluid={data.heroskull.childImageSharp.fluid} />
          </div>
          <div className="defcon-hero-copy">
            <div>
              <h1>AEROSPACE WORKSHOPS</h1>
            </div>
            <div>
              <h2>
                <span className="theAt">@</span>
                <span>
                  DEF&nbsp;CON<b>28</b>
                  <br />
                  <b>SAFEMODE</b>
                </span>
              </h2>
            </div>
            <div className="defcon-date-wrapper">
              <Img fluid={data.herodatebg.childImageSharp.fluid} />
              <span className="defcon-month">AUGUST</span>
              <div className="defcon-days">
                <span className="defcon-day">6</span>
                <span className="defcon-tac">&mdash;</span>
                <span className="defcon-day">9</span>
              </div>
              <span className="defcon-year">2020</span>
            </div>
          </div>
        </div>

        <div className="defcon-hero-content defcon-hero-content-mobile">
          <div className="defcon-hero-copy">
            <h1>AEROSPACE WORKSHOPS</h1>
            <h2>
              <span className="theAt">@</span>
            </h2>
          </div>

          <div className="defcon-hero-skull">
            <Img fluid={data.heroskull.childImageSharp.fluid} />
          </div>

          <div className="defcon-hero-copy">
            <h2>
              <span>
                DEF&nbsp;CON<b>28</b>
                <br />
                <b>SAFEMODE</b>
              </span>
            </h2>
            <div className="defcon-date-wrapper">
              <Img fluid={data.herodatebg.childImageSharp.fluid} />
              <span className="defcon-month">AUGUST</span>
              <div className="defcon-days">
                <span className="defcon-day">6</span>
                <span className="defcon-tac">&mdash;</span>
                <span className="defcon-day">9</span>
              </div>
              <span className="defcon-year">2020</span>
            </div>
          </div>
        </div>
      </div>

      <div className="defcon-sec2">
        <div className="defcon-border-blue" />
        <div className="defcon-border-black" />
        <div className="defcon-border-purple" />
        <div className="defcon-border-botblue" />
        <div className="defcon-sec2-content">
          <div className="defcon-sec2-left">
            <Img
              fluid={data.sec2bg.childImageSharp.fluid}
              className="defcon-sec2-bg"
              objectPosition="bottom right"
            />

            <div className="defcon-feature-img-wrapper">
              <div className="defcon-feature-img">
                <Img fluid={data.sec2img.childImageSharp.fluid} />
              </div>
            </div>
          </div>
          <div className="defcon-sec2-right">
            <div className="defcon-sec2-right-content">
              <h2>DDS @ DEF&nbsp;CON</h2>
              <p>
                For the second year running, DDS partnered with the United
                States Air Force to participate in Aerospace Village at DEF CON
                28. Together, we hosted the 2020 Space Security Challenge, the
                first-ever Hack-A-Satellite CTF at DEF CON, and a series of
                interactive workshops on aerospace hacking.
              </p>
              <p>
                With nothing but some ingenuity and a whole lot of LEGO®
                building bricks, Defense Digital Service engineers rigged up
                four aviation workshops, three satellite hacking workshops, and
                one ground station workshop with partner Red Balloon Security
                for DEF CON 28 SAFEMODE participants to test their skills
                hacking real devices from the comfort of their own homes.
              </p>
              <p>
                We had a blast hosting 2,300 participants across our Bricks in
                the Air, CPX SimpleSat, DDSat-1, and NyanSat workshops!
                Conversations on Twitch and Discord throughout the weekend
                proved to us once again that hands-on experiences like these,
                especially from a distance during a global health pandemic, are
                essential in training the next generation of security
                researchers.
              </p>
              <p>
                Our twitch streams and virtual space, dds-virtual.mil, are now
                offline. If you wish to keep learning, explore our open resource
                libraries on GitHub, including all of our public code for our
                virtual workshops:
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/deptofdefense/dds-at-DEFCON"
                >
                  DDS at DEF CON
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/deptofdefense/hack-a-sat-library"
                >
                  Satellite Hacking Library
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/deptofdefense/hack-aviation-library"
                >
                  Aviation Hacking Library
                </a>
              </p>
              <p>
                To stay informed of what we’ll be hosting at DEF CON 29, follow
                DDS on Twitter at @defensedigital or check back here.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="defcon-sec3">
        <Img fluid={data.sec3bg.childImageSharp.fluid} />
        <div className="defcon-sec3-content">
          <h2>AEROSPACE WORKSHOPS</h2>
          <p>
            Designed to introduce the basics of aviation and space security to
            players, these workshops featured a series of challenges for all
            skill levels, from introductory to advanced. We crafted these around
            a rich story for enhanced gameplay.
          </p>
        </div>
      </div>

      <div className="defcon-sec4">
        <div className="defcon-border-topblue" />
        <Img
          fluid={data.sec4bg.childImageSharp.fluid}
          className="defcon-bg-img"
        />
        <div className="defcon-sec4-content-wrapper">
          <div className="defcon-sec4-content">
            <div className="defcon-workshop defcon-bita-workshop">
              <div className="defcon-workshop-bg-purple" />
              <Img
                fluid={data.bita.childImageSharp.fluid}
                alt="Bricks in the air (aviation workshops)"
              />

              <div className="defcon-workshop-copy">
                {/* <h3>Bricks In The Air (Aviation Workshops)</h3> */}
                <p>
                  In this series of four workshops, participants attempted to
                  send messages to a mock LEGO® technic aircraft over I2C to
                  experiment with direct injection attacks on a data bus. This
                  year, we integrated the newly released Spike Prime robot from
                  LEGO® bricks.
                </p>
                <p>
                  <b>Technical Level</b>: Introductory
                  <br />
                  <b>Coding Language</b>: C++, Python
                  <br />
                </p>
                <p>The following kits were used in these workshops:</p>
                <p>
                  LEGO® Technic Cargo Plane 42025
                  <br />
                  LEGO® Technic Heavy Lift Helicopter 42052
                  <br />
                  LEGO® Technic Helicopter 9396
                  <br />
                </p>
                <p>
                  Want to get smarter on Aviation Hacking?{" "}
                  <ConditionalLink to="https://github.com/deptofdefense/hack-aviation-library">
                    <em>Check out this resource library we created.</em>
                  </ConditionalLink>
                </p>
              </div>
            </div>

            <div className="defcon-workshop">
              <div className="defcon-workshop-bg-purple" />
              <Img
                fluid={data.cpx.childImageSharp.fluid}
                className="defcon-workshop-smaller"
                alt="CPX Simplesat"
              />
              <div className="defcon-workshop-copy defcon-ddsat-copy">
                {/* <h3>CPX Simplesat</h3> */}
                <p>
                  CPX SimpleSat was built to allow participants to experiment
                  with attacking a mock satellite through a ground station,
                  mimicking the types of commands used in Hack-a-Sat to gain
                  control of the Satellite. No previous experience was required.
                </p>
                <p>
                  <b>Technical Level</b>: Introductory
                  <br />
                  <b>Coding Languages</b>: Python and CircuitPython
                  <br />
                </p>
                <p>
                  Want to get smarter on SAT Hacking?{" "}
                  <ConditionalLink to="https://github.com/deptofdefense/hack-a-sat-library">
                    <em>Check out this resource library we created.</em>
                  </ConditionalLink>
                </p>
              </div>
            </div>

            <div className="defcon-workshop defcon-ddsat">
              <div className="defcon-workshop-bg-purple" />
              <Img
                fluid={data.ddsat.childImageSharp.fluid}
                className="defcon-workshop-smaller"
                alt="DDSAT-1"
              />
              <div className="defcon-workshop-copy defcon-ddsat-copy">
                {/* <h3>DDSAT-1</h3> */}
                <p>
                  Here participants got to experiment with RF exploitation by
                  attacking a mock satellite over RF while it was talking to a
                  mock ground station.
                </p>
                <p>
                  <b>Technical Level</b>: Intermediate - Advanced
                  <br />
                  <b>Coding Language</b>: Python
                  <br />
                </p>
                <p>
                  Want to get smarter on SAT Hacking?{" "}
                  <ConditionalLink to="https://github.com/deptofdefense/hack-a-sat-library">
                    <em>Check out this resource library we created.</em>
                  </ConditionalLink>
                </p>
              </div>
            </div>

            <div className="defcon-workshop">
              <div className="defcon-workshop-bg-purple" />
              <Img
                fluid={data.nyansat.childImageSharp.fluid}
                className="defcon-workshop-smaller"
                alt="NYANSAT"
              />
              <div className="defcon-workshop-copy defcon-nyansat-copy">
                {/* <h3>NYANSAT</h3> */}
                <p>
                  Nyan-Sat consisted of three fun, non-competitive challenges:
                  building your own satellite tracking antenna, exploiting a
                  ground station modem, and participating in our live-streamed,
                  internet-accessible, community ground station event.
                </p>
                <p>
                  <b>Technical Level</b>: Intermediate - Advanced
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="defcon-sec5">
        <div className="defcon-sec5-content">
          <div className="defcon-footer-item">
            <ConditionalLink to="https://airforce.com">
              <Img fluid={data.aflogo.childImageSharp.fluid} />
            </ConditionalLink>
          </div>

          <div className="defcon-footer-item">
            <ConditionalLink to="https://www.hackasat.com/">
              <Img fluid={data.hackasatlogo.childImageSharp.fluid} />
            </ConditionalLink>
          </div>

          <ConditionalLink to="https://dds.mil" className="defcon-footer-item">
            <Img fluid={data.ddslogo.childImageSharp.fluid} />
          </ConditionalLink>

          <ConditionalLink
            to="https://aerospacevillage.org"
            className="defcon-footer-item"
          >
            <Img fluid={data.avlogo.childImageSharp.fluid} />
          </ConditionalLink>
        </div>
      </div>
    </Layout>
  );
};

export default DefconPage;

export const query = graphql`
  query DefconPageQuery {
    social: file(relativePath: { eq: "defcon/defcon-social.png" }) {
      childImageSharp {
        original {
          src
          width
          height
        }
      }
    }
    hero: file(relativePath: { eq: "defcon/defcon-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroskull: file(relativePath: { eq: "defcon/defcon-hero-skull.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    herodatebg: file(relativePath: { eq: "defcon/date-circles-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sec2bg: file(relativePath: { eq: "defcon/defcon-sec2bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sec3bg: file(relativePath: { eq: "defcon/defcon-sec3bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sec4bg: file(relativePath: { eq: "defcon/defcon-sec4bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    sec2img: file(relativePath: { eq: "defcon/sec2-left-photo.png" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    cpx: file(relativePath: { eq: "defcon/sec4-cpx-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    bita: file(relativePath: { eq: "defcon/sec4-bita-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    ddsat: file(relativePath: { eq: "defcon/sec4-ddsat-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    nyansat: file(relativePath: { eq: "defcon/sec4-nyansat-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ddslogo: file(relativePath: { eq: "defcon/DDS-logo-black-2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    aflogo: file(relativePath: { eq: "defcon/AF-logo-black-2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    avlogo: file(relativePath: { eq: "defcon/AV-logo-2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hackasatlogo: file(
      relativePath: { eq: "defcon/hackasat-logo-black-2x.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
