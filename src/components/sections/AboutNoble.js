import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const AboutNOBLE = ({
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
              About NOBLE?
            </h3>
            <div
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              <h6 style={styles.question}>What is NOBLE?</h6>
              <p>
                The Naval Operational Business Logistics Enterprise (NOBLE)
                family of systems is comprised of several COTS-based solutions
                for Naval operational forces including Naval Maintenance
                Readiness O? (NMRO) and Naval Operational Supply System (NOSS).
              </p>
              <h6 style={styles.question}>What is AWARE?</h6>
              <p>
                Agile Warfighter Analytics Readiness Environment (AWARE) is a
                multi-layer cloud hosted analytics tool that hosts the NOBLE
                family of systems.
              </p>
              <h6 style={styles.question}>
                Who are NOBLE's DoD and industry partners?
              </h6>
              <p>TBD</p>
              <h6 style={styles.question}>What are NOBLE's accreditations?</h6>
              <p>Data, Cloud, Architecture, Architecture products</p>
              <h6 style={styles.question}>
                What are NOBLE's authroizations to operate (ATOs)?
              </h6>
              <p>TBD</p>
              <h6 style={styles.question}>
                How do the pieces of NOBLE fit together?
              </h6>
              <p>Provide visual tree to show how everything links together</p>
              <h6 style={styles.question}>
                Where are demand signals for NOBLE coming from?
              </h6>
              <p>Table of who is asking for NOBLE</p>
              <h6 style={styles.question}>
                Where can I find NOBLE's strategic documents?
              </h6>
              <ul style={styles.list}>
                <li>DoN Data Superiority Vision</li>
                <li>2018 The SPAWAR List</li>
                <li>Data Migration Strategy</li>
                <li>Edge Computing</li>
                <li>Improving Fleet Readiness through Data Fusion</li>
                <li>Demand and Supply Forecasting</li>
                <li>Dataversity - Online Resource</li>
              </ul>
              <h6 style={styles.question}>
                Where can I learn more about the NOBLE program?
              </h6>
              <p>
                Links to selected NOBLE briefs (e.g. program overview brief)
              </p>
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
AboutNOBLE.propTypes = propTypes;
AboutNOBLE.defaultProps = defaultProps;

export default AboutNOBLE;
