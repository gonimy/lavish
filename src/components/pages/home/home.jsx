import React from "react";
import { Main } from "../../main";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./data";
export const Home = () => {
  return (
    <>
      <Main {...homeObjOne} />
      <Main {...homeObjThree} />
      <Main {...homeObjTwo} />
      <Main {...homeObjFour} />
    </>
  );
};
