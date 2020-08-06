import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Services = ({
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
              Services
            </h3>
            <div
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              <h6 style={styles.question}>ATO / cyber accreditation</h6>
              <p>
                if you have an application, we can help you fast track through
                rmf accreditation and take advantage of RAISE (see RMF in a
                Day). Relies on DevSecOps pipeline.
              </p>
              <h6 style={styles.question}>
                Big Data integration / data-focused integrated platform
              </h6>
              <p>
                The NOBLE AWARE platform connects all Logistics Information
                Technology Functional Area Manager (Log IT FAM) programs via
                open REST-API--bringing user applications, Data Lakes, and
                Enterprise Data Warehouses (EDW) in a distributed data
                environment.
              </p>
              <h6 style={styles.question}>Containerized app hosting</h6>
              <p>
                Openshift docker/OCI (open containerized images). Smaller
                footprint of a virtual machine that can be run in a
                microservices environment.
              </p>
              <h6 style={styles.question}>Data Analytics</h6>
              <p>
                Self-service analytics, Data management and analytics (in DaaS
                have analytics, code can be outside of DaaS - see NAVAIR and
                https://confluence.di2e.net/pages/viewpage.action?pageId=649509826).
                Goals: Descriptive, diagnostic, predictive, prescriptive, and
                cognitive analytics.
              </p>
              <h6 style={styles.question}>Data Analyst Workbench</h6>
              <p>
                With Data Analyst Workbench, you can create nice graphic reports
                to view trends from the data independently, e.g. NMRO + NOSS,
                summary of what we are doing well and what we are lacking, can
                analyze data and create reports using Palantir DaaS).
              </p>
              <h6 style={styles.question}>Provide Tools</h6>
              <p>
                DevOps tools – provide or leverage tools via CSA and PaaS
                (OpenShip PaaS, ForgeRock, Elk Logging). SDK with Palantir. Data
                migration and engineering pipeline. Data analyst workbench.
                Openshift management tools (covers containerized tool). CSA
                tools like Ansible for IT automation and Source2Image Docker.
                For continuous monitoring, CM tools we can use (from
                Elasticstack).
              </p>
              <h6 style={styles.question}>DevSecOps Pipeline built in</h6>
              <p>
                [CI/CD/CM] continuous integration, deployment, and monitoring
              </p>
              <h6 style={styles.question}>DoD API service broker</h6>
              <p>
                Integration via connections to external applications (ERP, DSP,
                DLA). Capability to broker external applications.
              </p>
              <h6 style={styles.question}>
                Safely store your classified data{" "}
              </h6>
              <p>
                AWARE DaaS IL4, IL5, and IL6 accredited environment accommodates
                DoD Classified Information up to SECRET level. (Add ATO/RMF
                Accredited Solutions)
              </p>
              <h6 style={styles.question}>
                Self-Service BYOD (bring your own data)
              </h6>
              <p>
                Part of DaaS. If you have an Excel spreadsheet you want to
                integrate with NOBLE data, you can upload it into the DaaS and
                can run reports/graphics on it.
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
Services.propTypes = propTypes;
Services.defaultProps = defaultProps;

export default Services;
