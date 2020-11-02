import React from "react";
import { Main } from "../main";
import { Pricing } from "../Pricing";
import { homeObjOne, homeObjTwo, homeObjFour } from "./serData";

export const Services = () => {
  return (
    <>
      <Main {...homeObjOne} />
      <Main {...homeObjTwo} />
      <Main {...homeObjFour} />

      <Pricing />
    </>
  );
};
