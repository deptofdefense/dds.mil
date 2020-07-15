import React from "react";
import { graphql, PageProps } from "gatsby";
import Img from "gatsby-image";
import { Layout, SEO, Section, ConditionalLink } from "components";

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
  placeholder: FooterImage;
  ddslogo: FooterImage;
  aflogo: FooterImage;
  avlogo: FooterImage;
  hackasatlogo: FooterImage;
  cpxsimplesat: FooterImage;
  ddssat: FooterImage;
  nyansat: SocialImage;
}

const DefconPage: React.FC<PageProps<QueryResult>> = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Defcon 2020"
        description="DDS Supports Defcon for 2020"
        url="https://dds.mil/work/defcon"
        image={data.nyansat.childImageSharp.original}
      />

      <div className="defcon-hero">
        <Img fluid={data.hero.childImageSharp.fluid} />
      </div>

      <Section>
        <div className="defcon-content-wrapper">
          <h2>DDS @ DEFCON</h2>
          <p>
            The Defense Digital Service is partnering with the U.S. Department
            of the Air Force to host the 2020 Space Security Challenge, the
            first ever Hack-A-Satellite experience at Def Con 28, now completely
            online in Safe Mode due to the Covid-19 pandemic. To watch the
            Hack-A-Sat Capture the Flag (CTF) final event taking place during
            Aug 7-9, 2020, visit Hackasat.com.
          </p>

          <p>
            At the same time, we encourage you to play! We are hosting 4
            virtual, hands-on, educational aerospace workshops in Aerospace
            Village for you to learn about aviation and space security in our
            virtual domain [insert website and link]:
          </p>

          <ul>
            <li>Bricks-in-the-Air</li>
            <li>CPX SimpleSat</li>
            <li>DDSat-1</li>
            <li>Nyan-Sat</li>
          </ul>

          <h2>Aerospace Workshops</h2>
          <p>
            Designed to introduce the basics of aviation and space security to
            players, these workshops will feature a series of challenges for all
            skill levels, from introductory to advanced.
          </p>
          <p>
            Access the rich web-enabled Virtual Reality environment from home at
            [website]. No special VR equipment is required.
          </p>
          <p>
            <b>
              The first 500 participants to complete one of the challenges will
              receive a free Bricks-in-the-Air t-shirt!
            </b>
          </p>
          {/* <b>
              <em>
                Access the VR environment at DDSvirtual.com during DEFCON,
                August 6-9. The first 500 participants to complete one of the
                challenges will receive a free Bricks in the Air t-shirt!
              </em>
            </b>
          </p> */}

          <h2>Bricks In the Air (Aviation Workshops)</h2>
          <div className="defcon-bita-gif">
            <img
              src={bitaGif}
              alt="animated graphic with text for bricks in the air"
            />
          </div>
          <p>
            In this series of four workshops, you will attempt to send messages
            to a mock LEGO® technic aircraft over I2C to experiment with direct
            injection attacks on a data bus. This year, we’ve integrated the
            newly released Spike Prime robot from LEGO® bricks.
          </p>

          <p>
            Category: Aircraft
            <br />
            Technical Level: Introductory to Advanced
            <br />
            Coding Language: C++, Python
          </p>

          <p>The following kits will be featured in these workshops:</p>
          <ul>
            <li>LEGO® Technic Cargo Plane 42025</li>
            <li>LEGO® Technic Heavy Lift Helicopter 42052 </li>
            <li>LEGO® Technic Helicopter 9396</li>
          </ul>

          <p>
            <b>Get involved!</b>
          </p>
          <ul>
            <li>Instruction Videos:</li>
            <li>Twitch:</li>
            <li>Discord: Bricks-In-The-Air-text; Bricks-In-The-Air-voice</li>
          </ul>
        </div>
      </Section>
      <Section>
        <div className="defcon-content-wrapper">
          <h2>Hack-A-SAT (Satellite Workshops)</h2>
          <p>
            We are offering Satellite workshops that introduce satellite
            security via ground station access, RF signals and SAT listening.
          </p>
        </div>
        <div className="defcon-image-section">
          <Img fluid={data.cpxsimplesat.childImageSharp.fluid} />
          <div className="section-content">
            <h3>CPX SimpleSat</h3>
            <p>
              CPX SimpleSat was built to allow you to experiment with attacking
              a mock satellite through a ground station, mimicking the types of
              commands used in Hack-a-Sat to gain control of the Satellite. No
              previous experience required.
            </p>
            <p>
              Category: Satellite
              <br />
              Technical Level: Introductory
              <br />
              Coding Languages: Python and CircuitPython
              <br />
              Workshop open: August 6-9, 2020 from 9AM-6PM EST
            </p>
            <p>
              <b>Get involved!</b>
              <br />
              Instruction Videos:
              <br />
              Twitch:{" "}
              <a href="twitch.tv/CPXSATAfrica">twitch.tv/CPXSATAfrica</a> |{" "}
              <a href="twitch.tv/CPXSATAsia">twitch.tv/CPXSATAsia</a> |
              <a href="twitch.tv/CPXSATNorthAmerica">
                twitch.tv/CPXSATNorthAmerica
              </a>{" "}
              | <a href="twitch.tv/CPXSATEurope">twitch.tv/CPXSATEurope</a> |
              <a href="twitch.tv/CPXSATAntarctica">
                twitch.tv/CPXSATAntarctica
              </a>
              <br />
              Discord: CPX-SimpleSat-text; CPS-SimpleSat-voice <br />
              Forums:
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="defcon-image-section flipped">
          <Img fluid={data.ddssat.childImageSharp.fluid} />
          <div className="section-content">
            <h3>DDSAT-1</h3>
            <p>
              Here you’ll get to experiment with RF exploitation by attacking a
              mock satellite over RF while it is talking to a mock ground
              station.
            </p>
            <p>
              Category: Satellite
              <br />
              Technical Level: Intermediate - Advanced
              <br />
              Coding Language: Python
              <br />
              Workshop open: August 6-9, 2020 from 10AM-5PM EST
            </p>
            <p>
              <b>Get involved!</b>
              <br />
              Instruction Videos:
              <br />
              Twitch: <a href="twitch.tv/DDSAT1">twitch.tv/DDSAT1</a>
              <br />
              Discord: DDSat-1-text; DDSat-1-voice
              <br />
              Forums:
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="defcon-image-section">
          <Img fluid={data.nyansat.childImageSharp.fluid} />
          <div className="section-content">
            <h3>NyanSat</h3>
            <p>
              Nyan-Sat consists of three fun, non-competitive challenges:
              building your own satellite tracking antenna, exploiting a ground
              station modem, and participating in our live streamed,
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
            </p>
            <p>
              <b>Get involved!</b>
              <br />
              Instruction Videos:{" "}
              <a href="https://www.youtube.com/channel/UCL6iiQalM9yhQMm19XOpbdQ">
                YouTube
              </a>
              <br />
              Twitch: <a href="twitch.tv/nyansat">twitch.tv/nyansat</a>
              <br />
              Discord: NyanSat-text; NyanSat-voice
              <br />
              Forums: <a href="https://discord">https://discord</a>.gg/nsSMEdv
              <br />
              Website: <a href="https://nyan">https://nyan</a>-sat.com/
            </p>
          </div>
        </div>
      </Section>

      <Section accentYellow>
        <div className="defcon-footer">
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
      </Section>
    </Layout>
  );
};

export default DefconPage;

export const query = graphql`
  query DefconPageQuery {
    hero: file(relativePath: { eq: "Defcon-Hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    placeholder: file(relativePath: { eq: "press_logos.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    cpxsimplesat: file(relativePath: { eq: "Defcon-CPX-Simple-SAT.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    ddssat: file(relativePath: { eq: "Defcon-DDS-SAT1.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    nyansat: file(relativePath: { eq: "Defcon-NYAN-SAT.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
        original {
          src
          width
          height
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
