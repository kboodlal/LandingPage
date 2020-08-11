import React from "react";
import Accounts from "../components/sections/Accounts";
import ATOProcess from "../components/sections/ATOProcess";
import DevSecOps from "../components/sections/DevSecOps";

const Documentation = () => {
  return (
    <>
      <div>
        <Accounts className="illustration-section-01" />
        <ATOProcess className="illustration-section-01" />
        <DevSecOps className="illustration-section-01" />
      </div>
    </>
  );
};

export default Documentation;
