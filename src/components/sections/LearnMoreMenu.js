import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import { Link } from "react-router-dom";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const LearnMoreMenu = ({
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
          <h4 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            <div style={styles.container}>
              <div style={styles.item}>
                <a href="#aboutNOBLE">About NOBLE</a>
              </div>
              <div style={styles.item}>
                <a href="#features">News</a>
              </div>
              <div style={styles.item}>
                <Link to="/document">Documentation</Link>
              </div>
              <div style={styles.item}>
                <a href="#pricing" to="#0">Pricing</a>
              </div>
              <div style={styles.item}>
                <a href="#legacySystems" to="#0">Legacy Systems</a>
              </div>
            </div>
          </h4>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          ></div>
        </div>
      </div>
    </section>
  );
};

LearnMoreMenu.propTypes = propTypes;
LearnMoreMenu.defaultProps = defaultProps;

const styles = {
  container: {
    display: "flex",
  },
  item: {
    padding: "20px",
  },
};
export default LearnMoreMenu;
