import React from "react";
import { Link } from "react-router-dom";
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
