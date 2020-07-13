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
        <div className="defcon-image-section flipped">
          <div className="gatsby-image-wrapper">
            <div className="defcon-countdown">
              <h2>Countdown to Hack-a-Sat CTF Event</h2>
              <p className="defcon-counter">{daysRemaining}</p>
              <span className="defon-counter-label">Days</span>
            </div>
          </div>
          <div className="section-content">
            <h3>About HAS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dignissim turpis odio, vitaealiquet metus auctor ut. Suspendisse
              purus enim, pharetra sed posuere vitae, finibus eu erat.Nunc quis
              erat tortor. Nulla nisl risus, pulvinar nec diam nec, euismod
              consequat nunc. Namturpis ante, malesuada in libero et, blandit
              elementum.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="defcon-image-section">
          <Img fluid={data.placeholder.childImageSharp.fluid} />
          <div className="section-content">
            <h3>Bricks in the Air</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dignissim turpis odio, vitaealiquet metus auctor ut. Suspendisse
              purus enim, pharetra sed posuere vitae, finibus eu erat.Nunc quis
              erat tortor. Nulla nisl risus, pulvinar nec diam nec, euismod
              consequat nunc. Namturpis ante, malesuada in libero et, blandit
              elementum.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="defcon-image-section">
          <Img fluid={data.placeholder.childImageSharp.fluid} />
          <div className="section-content">
            <h3>About HAS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dignissim turpis odio, vitaealiquet metus auctor ut. Suspendisse
              purus enim, pharetra sed posuere vitae, finibus eu erat.Nunc quis
              erat tortor. Nulla nisl risus, pulvinar nec diam nec, euismod
              consequat nunc. Namturpis ante, malesuada in libero et, blandit
              elementum.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="defcon-image-section">
          <Img fluid={data.placeholder.childImageSharp.fluid} />
          <div className="section-content">
            <h3>About HAS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dignissim turpis odio, vitaealiquet metus auctor ut. Suspendisse
              purus enim, pharetra sed posuere vitae, finibus eu erat.Nunc quis
              erat tortor. Nulla nisl risus, pulvinar nec diam nec, euismod
              consequat nunc. Namturpis ante, malesuada in libero et, blandit
              elementum.
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
