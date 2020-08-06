import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Features = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h3
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Features
            </h3>
            <div
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              <h6 style={styles.question}>What does it mean to be NOBLE</h6>
              <ul style={styles.list}>
                <li>Cloud environment</li>
                <li>DevSecOps</li>
                <li>
                  Incorporating cyber (rapid _ RAISE accreditation process)
                </li>
                <li>Built to run on PaaS</li>
                <li>Engineering - building applications</li>
                <li>IA (see SE plan rules/tenets)</li>
                <li>Cloud architecture</li>
                <li>Data architecture</li>
                <li>Cyber</li>
              </ul>
              <h6 style={styles.question}>
                What are the key components of NOBLE?
              </h6>
              <p>DaaS, PaaS, IAS</p>
              <h6 style={styles.question}>
                What are the key features of NOBLE?
              </h6>
              <ul style={styles.list}>
                <li>Elastic Stack</li>
                <li>Emerging technologies from around the globe</li>
                <li>Forgerock</li>
                <li>ICA statuses</li>
                <li>Margritte agent</li>
                <li>Openshift</li>
                <li>Technical aspect of agile</li>
              </ul>
              <h6 style={styles.question}>What is NOBLE's data environment?</h6>
              <ul style={styles.list}>
                <li>AWS Cloud9 IDE</li>
                <li>
                  Data focused integrated platform - AWARE platform connects all
                  Logistics Information Technology Functional Area Manager (Log
                  IT FAM) programs via open REST-API - bringing user
                  applications, Data Lakes, and Enterprise Data Warehouses (EDW)
                  in a distributed data environment.
                </li>
                <li>
                  Image - large circle with 4 circles around it, center circle
                  is "Data Lake", other circles are "Centralized Content",
                  "Scalability", "Distributed Access Control", and "Agility".
                  AWARE connects all Logistic Information Technology Functional
                  Area Managers
                </li>
              </ul>
              <h6 style={styles.question}>What data are contained in NOBLE?</h6>
              <p>Data we have from NMRO, NAMS, and legacy projects</p>
              <h6 style={styles.question}>
                What are NOBLE's technical specifications?
              </h6>
              <p>Links to documents</p>
              <h6 style={styles.question}>
                What interfaces exist in NOBLE today?
              </h6>
              <h6 style={styles.question}>What tools are used by NOBLE?</h6>
              <p>TBD</p>
              <h6 style={styles.question}>
                Where can I learn more about NRDE?
              </h6>
              <ul style={styles.list}>
                <li>Link to CSA page on NRDE</li>
                <li>Brief list of tools we are using</li>
                <li>Pipeline image</li>
              </ul>
            </div>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  question: {
    margin: "0px",
  },
  list: {
    "list-style": "none",
  },
};
Features.propTypes = propTypes;
Features.defaultProps = defaultProps;

export default Features;
