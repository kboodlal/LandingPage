import React from "react";
import AboutNOBLE from "../components/sections/AboutNoble";
import LearnMoreMenu from "../components/sections/LearnMoreMenu";

const LearnMore = () => {
  return (
    <>
      <div>
        <LearnMoreMenu></LearnMoreMenu>
        <AboutNOBLE id="aboutNOBLE"></AboutNOBLE>
      </div>
    </>
  );
};

export default LearnMore;
