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
        title="DDS @ DEFCON"
        description="For the second year, the Defense Digital Service is partnering with the U.S. Department of the Air Force to participate in Aerospace Village at Def Con 28. This year we have expanded our scope beyond aviation to include space, specifically, satellites!"
        url="/defcon"
        image={data.social.childImageSharp.original}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,200;0,300;0,400;0,500;0,700;1,200;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </SEO>

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
                  DEFCON<b>28</b>
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
                DEFCON<b>28</b>
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
              <h2>DDS @ DEFCON</h2>
              <p>
                For the second year, the Defense Digital Service is partnering
                with the U.S. Department of the Air Force to participate in
                Aerospace Village at Def Con 28. This year we have expanded our
                scope beyond aviation to include space, specifically,
                satellites! In addition to hosting the 2020 Space Security
                Challenge, the first ever Hack-A-Satellite CTFat Def Con, we are
                also bringing a series of interactive workshops to Def Con in
                complete Safemode.
              </p>

              <p>
                We have created a rich, web based virtual reality environment
                for you to interact with each of our workshops . Get ready to
                watch the final event of the CTF at{" "}
                <a href="https://hackasat.com">hackasat.com</a> and get fully
                immersed in the gameplay of our workshops at{" "}
                <a href="https://dds-virtual.com">dds-virtual.com</a>.
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
            players, these workshops will feature a series of challenges for all
            skill levels, from introductory to advanced. We have crafted these
            around a rich story for enhanced gameplay. In order to play you will
            need a Twitch account.{" "}
            <b>You do not need a verified email address to play.</b> Our twitch
            is integrated with the Discord server to send updates on gameplay.
            Access the rich web-enabled Virtual Reality environment from home at{" "}
            <a href="https://dds-virtual.com">dds-virtual.com</a>.
            <b> No special VR equipment is required.</b>
          </p>
          <p className="defcon-sec3-p3">
            <b>
              The first 500 participants to complete one of the Bricks in the
              Air, Simple SAT or CPX-SAT challenges will receive a free
              Bricks-in-the-Air t-shirt!
            </b>
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
                  In this series of four workshops, you will attempt to send
                  messages to a mock LEGO® technic aircraft over I2C to
                  experiment with direct injection attacks on a data bus. This
                  year, we’ve integrated the newly released Spike Prime robot
                  from LEGO® bricks.
                </p>
                <p>
                  <b>Technical Level</b>: Introductory
                  <br />
                  <b>Coding Language</b>: C++, Python
                  <br />
                  <b>Workshop Open</b>: August 6-9, 2020 from 10AM-6PM PST
                  <br />
                </p>
                <p>The following kits will be featured in these workshops:</p>
                <p>
                  LEGO® Technic Cargo Plane 42025
                  <br />
                  LEGO® Technic Heavy Lift Helicopter 42052
                  <br />
                  LEGO® Technic Helicopter 9396
                  <br />
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
                  CPX SimpleSat was built to allow you to experiment with
                  attacking a mock satellite through a ground station, mimicking
                  the types of commands used in Hack-a-Sat to gain control of
                  the Satellite. No previous experience required.
                </p>
                <p>
                  <b>Technical Level</b>: Introductory
                  <br />
                  <b>Coding Languages</b>: Python and CircuitPython
                  <br />
                  <b>Workshop Open</b>: August 6-9, 2020 from 10AM-6PM PST
                  <br />
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
                  Here you’ll get to experiment with RF exploitation by
                  attacking a mock satellite over RF while it is talking to a
                  mock ground station.
                </p>
                <p>
                  <b>Technical Level</b>: Intermediate - Advanced
                  <br />
                  <b>Coding Language</b>: Python
                  <br />
                  <b>Workshop Open</b>: August 6-9, 2020 from 10AM-6PM PST
                  <br />
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
                  Nyan-Sat consists of three fun, non-competitive challenges:
                  building your own satellite tracking antenna, exploiting a
                  ground station modem, and participating in our live streamed,
                  internet-accessible, community ground station event.
                </p>
                <p>
                  <b>Technical Level</b>: Intermediate - Advanced
                  <br />
                  <b>Workshop open</b>: August 6-9, 2020 from 10AM-5PM EST
                  <br />
                  <b>Workshop closes</b>: August 10, 2020 at 5 PM EST
                  <br />
                </p>
                <p>
                  <b>Get involved!</b>
                </p>
                <p>
                  Discord: NyanSat-text; NyanSat-voice
                  <br />
                  Forums:{" "}
                  <a href="https://discord.gg/nsSMEdv">discord.gg/nsSMEdv</a>
                  <br />
                  Website: <a href="https://nyan-sat.com/">nyan-sat.com</a>
                  <br />
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
            <Img fluid={data.hackasatlogo.childImageSharp.fluid} />
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
