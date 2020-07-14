import React from "react";
import { graphql, PageProps } from "gatsby";
import Img from "gatsby-image";
import { Layout, SEO, Section, ConditionalLink } from "components";
import { differenceInDays } from "date-fns";

interface FooterImage {
  childImageSharp: {
    fluid: any;
  };
}

interface QueryResult {
  hero: FooterImage;
  placeholder: FooterImage;
  ddslogo: FooterImage;
  aflogo: FooterImage;
  avlogo: FooterImage;
  hackasatlogo: FooterImage;
}

const DefconPage: React.FC<PageProps<QueryResult>> = ({ data }) => {
  const event = new Date(2020, 7, 8);
  const daysRemaining = differenceInDays(event, new Date());

  return (
    <Layout>
      <SEO
        title="Defcon 2020"
        description="DDS Supports Defcon for 2020"
        url="https://dds.mil/work/defcon"
      />

      <div className="defcon-hero">
        <div className="hero">
          <Img fluid={data.hero.childImageSharp.fluid} />
          <div className="hero-inner hero-inner-expanded">
            <div className="hero-card">
              <h1>DEFCON 28</h1>
              <p>2020 Space Security Challenge Hack-a-Sat</p>
            </div>
          </div>
        </div>
      </div>

      <Section>
        <div className="defcon-content-wrapper">
          <h2>DDS @ DEFCON</h2>
          <p>
            Defense Digital Service returns to DEFCON for a second time to
            engage with the incredible community that attends each year. After
            our inaugural year during DEFCON 27, where we partnered with the Air
            Force to bring a CTF, flight simulator, and hands-on aviation
            workshops to Aviation Village, we are committed to participating in
            DEFCON each year. This year we return in partnership with the Air
            Force and have expanded our focus to include space security! We are
            excited to be a part of Aerospace Village where we are bigger and
            bolder in what we bring to share with, teach, and learn from the
            community! In addition to Bricks in the Air, our popular aviation
            hacking workshops, we are also bringing satellites big (via the
            hackasat CTF) and small (via SAT hacking workshops) to DEFCON. And
            yes, we are doing this in SAFEMODE!{" "}
          </p>

          <h2>Why Aerospace Village?</h2>
          <p>
            Aerospace is a cornerstone of our global infrastructure and economy.
            While passenger safety is at an all-time high, the adoption of
            connected technologies exposes aircraft, airports, and the aerospace
            ecosystem to new risks. Cybersecurity failure can impact human life
            and public safety; a crisis of confidence in the trustworthiness of
            air travel can undermine economic, national, and international
            security.
          </p>

          <h2>Aerospace Workshops</h2>
          <p>
            Designed to introduce the basics of aviation and space security to
            players, these workshops will feature a series of challenges that
            meet the skill level of the noob and pro alike! Since we cannot meet
            you in person in Vegas to share these workshops with you, we have
            created a rich web-enabled (no special VR equipment required)
            Virtual Reality environment through which you can access the
            workshops. During DEFCON, August 6-9, the VR environment can be
            accessed at DDSvirtual.com. The first 500 participants to complete
            one of the challenges will receive a free Bricks in the Air t-shirt!
          </p>

          <h2>Bricks In the Air (Aviation Workshops)</h2>
          <p>
            This series of 4 workshops offers you the chance to attempt sending
            messages to mock LEGO Technic aircraft over I2C to learn and
            experiment with direct injection attacks on a data bus. This year we
            have a few extra treats including the brand spanking new Spike Prime
            robot from lego!{" "}
          </p>
          <ul>
            <li>Category: Aircraft</li>
            <li>Technical Level: Introductory - Advanced</li>
            <li>Coding Language: C++, Python</li>
            <li>Workshop open: August 6-9, 2020 from 9AM-6PM EST</li>
          </ul>

          <p>The following kits will be featured in these workshops:</p>
          <ul>
            <li>LEGO Technic Cargo Plane 42025</li>
            <li>LEGO Technic Heavy Lift Helicopter 42052 </li>
            <li>LEGO Technic Helicopter 9396</li>
            <li>
              Fingers Crossed-New Release: Lego Technic Bell Boeing V-22 Osprey
              (42113)
            </li>
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
          <Img fluid={data.placeholder.childImageSharp.fluid} />
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
          <Img fluid={data.placeholder.childImageSharp.fluid} />
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
          <Img fluid={data.placeholder.childImageSharp.fluid} />
          <div className="section-content">
            <h3>NyanSat</h3>
            <p>
              Nyansat consists of three fun, non-competitive challenges:
              building your own satellite tracking antenna, exploiting a ground
              station modem, and participating in our livestreamed,
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
    hero: file(relativePath: { eq: "defcon-hero.jpg" }) {
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
