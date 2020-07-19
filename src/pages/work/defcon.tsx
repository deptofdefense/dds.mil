import React from "react";
import { graphql, PageProps } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import { Layout, SEO, ConditionalLink } from "components";

// @ts-ignore
import bitaGif from "../../assets/Defcon-bita.gif";

interface FooterImage {
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
  hero: FooterImage;
  sec2bg: FooterImage;
  sec3bg: FooterImage;
  sec4bg: FooterImage;
  bita: FooterImage;
  cpx: FooterImage;
  ddsat: FooterImage;
  nyansat: FooterImage;
  ddslogo: FooterImage;
  aflogo: FooterImage;
  avlogo: FooterImage;
  hackasatlogo: FooterImage;
}

const DefconPage: React.FC<PageProps<QueryResult>> = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Defcon 2020"
        description="DDS Supports Defcon for 2020"
        url="https://dds.mil/work/defcon"
      />

      <div className="defcon-hero">
        <Img fluid={data.hero.childImageSharp.fluid} />
        <div className="defcon-hero-content">
          <img
            src="https://via.placeholder.com/350"
            className="defcon-hero-skull"
            alt="skull"
          />
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
              objectPosition="bottom right"
            />
            <img
              src="https://via.placeholder.com/350"
              className="defcon-feature-img"
              alt="skull"
            />
          </div>
          <div className="defcon-sec2-right">
            <h2>DDS @ DEFCON</h2>
            <p>
              The Defense Digital Service is partnering with the U.S. Department
              of the Air Force to host the 2020 Space Security Challenge, the
              first ever Hack-A-Satellite experience at Def Con 28, now
              completely online in Safe Mode due to the Covid-19 pandemic. To
              watch the Hack-A-Sat Capture the Flag (CTF) final event taking
              place during Aug 7-9, 2020, visit{" "}
              <a href="http://hackasat.com">Hackasat.com.</a>
            </p>

            <p>
              At the same time, we encourage you to play! We are hosting 4
              virtual, hands-on, educational aerospace workshops in Aerospace
              Village for you to learn about aviation and space security in our
              virtual domain <a href="#">insert website and link</a>:
            </p>

            <ul>
              <li>Bricks-in-the-Air</li>
              <li>CPX SimpleSat</li>
              <li>DDSat-1</li>
              <li>Nyan-Sat</li>
            </ul>
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
            skill levels, from introductory to advanced.
          </p>
          <p>
            Access the rich web-enabled Virtual Reality environment from home at
            [website]. No special VR equipment is required.
          </p>
          <p className="defcon-sec3-p3">
            <b>
              The first 500 participants to complete one of the challenges will
              receive a free Bricks-in-the-Air t-shirt!
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
            <div className="defcon-workshop">
              <div className="defcon-workshop-bg-purple" />
              <Img fluid={data.bita.childImageSharp.fluid} />

              <div className="defcon-workshop-copy">
                <h3>Bricks In The Air (Aviation Workshops)</h3>
                <p>
                  In this series of four workshops, you will attempt to send
                  messages to a mock LEGO® technic aircraft over I2C to
                  experiment with direct injection attacks on a data bus. This
                  year, we’ve integrated the newly released Spike Prime robot
                  from LEGO® bricks.
                </p>
                <p>
                  Category: Aircraft
                  <br />
                  Technical Level: Introductory to Advanced
                  <br />
                  Coding Language: C++, Python
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
                <p>
                  <b>Get involved!</b>
                </p>
                <p>
                  Instruction Videos:
                  <br />
                  Twitch:
                  <br />
                  Discord: <br />
                </p>
              </div>
            </div>

            <div className="defcon-workshop">
              <div className="defcon-workshop-bg-purple" />
              <Img
                fluid={data.cpx.childImageSharp.fluid}
                className="defcon-bita-img"
              />
              <div className="defcon-workshop-copy defcon-fixup-image">
                <h3>CPX Simplesat</h3>
                <p>
                  CPX SimpleSat was built to allow you to experiment with
                  attacking a mock satellite through a ground station, mimicking
                  the types of commands used in Hack-a-Sat to gain control of
                  the Satellite. No previous experience required.
                </p>
                <p>
                  Category: Satellite
                  <br />
                  Technical Level: Introductory
                  <br />
                  Coding Languages: Python and CircuitPython
                  <br />
                  Workshop open: August 6-9, 2020 from 9AM-6PM EST
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
                <p>
                  <b>Get involved!</b>
                </p>
                <p>
                  Instruction Videos:
                  <br />
                  Twitch: twitch.tv/CPXSATAfrica | twitch.tv/CPXSATAsia
                  |twitch.tv/CPXSATNorthAmerica twitch.tv/CPXSATEurope
                  |twitch.tv/CPXSATAntarctica
                  <br />
                  Discord: CPX-SimpleSat-text; CPS-SimpleSat-voice
                  <br />
                </p>
              </div>
            </div>

            <div className="defcon-workshop">
              <div className="defcon-workshop-bg-purple" />
              <Img fluid={data.ddsat.childImageSharp.fluid} />
              <div className="defcon-workshop-copy defcon-fixup-image">
                <h3>DDSAT-1</h3>
                <p>
                  Here you’ll get to experiment with RF exploitation by
                  attacking a mock satellite over RF while it is talking to a
                  mock ground station.
                </p>
                <p>
                  Category: Satellite
                  <br />
                  Technical Level: Intermediate - Advanced
                  <br />
                  Coding Language: Python
                  <br />
                  Workshop open: August 6-9, 2020 from 10AM-5PM EST
                  <br />
                </p>
                <p>
                  <b>Get involved!</b>
                </p>
                <p>
                  Instruction Videos:
                  <br />
                  Twitch: twitch.tv/DDSAT1
                  <br />
                  Discord:
                  <br />
                </p>
              </div>
            </div>

            <div className="defcon-workshop">
              <div className="defcon-workshop-bg-purple" />
              <Img fluid={data.nyansat.childImageSharp.fluid} />
              <div className="defcon-workshop-copy">
                <h3>NYANSAT</h3>
                <p>
                  Nyan-Sat consists of three fun, non-competitive challenges:
                  building your own satellite tracking antenna, exploiting a
                  ground station modem, and participating in our live streamed,
                  internet-accessible, community ground station event.
                </p>
                <p>
                  Category: Satellite
                  <br />
                  Technical Level: Intermediate - Advanced
                  <br />
                  Coding Language: TBA
                  <br />
                  Workshop open: August 6-9, 2020 from 10AM-5PM EST
                  <br />
                </p>
                <p>
                  <b>Get involved!</b>
                </p>
                <p>
                  Instruction Videos:
                  <br />
                  Twitch: twitch.tv/nyansat
                  <br />
                  Discord: NyanSat-text; NyanSat-voice
                  <br />
                  Forums: https://discord.gg/nsSMEdv
                  <br />
                  Website: https://nyan-sat.com/
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
    hero: file(relativePath: { eq: "defcon/defcon-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 90) {
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
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sec4bg: file(relativePath: { eq: "defcon/defcon-sec4bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
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
    ddslogo: file(relativePath: { eq: "DDS-logo-black-2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    aflogo: file(relativePath: { eq: "AF-logo-black-2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    avlogo: file(relativePath: { eq: "AV-logo-2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hackasatlogo: file(relativePath: { eq: "hackasat-logo-black-2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
