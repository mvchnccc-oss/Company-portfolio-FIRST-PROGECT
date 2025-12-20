import React from "react";
import SolutionsHero from "../Components/SolutionComponents/SolutionsHero";
import Problems from "../Components/SolutionComponents/Problems";
import HowItWorks from "../Components/SolutionComponents/HowItWorks";
import SolutionsCTA from "../Components/SolutionComponents/SolutionsCTA";
import SolutionDetails from "../Components/SolutionComponents/SolutionDetails";
import UseCases from "../Components/SolutionComponents/UseCases";

export default function Solution() {
  return (
    <>
      <SolutionsHero />
      <Problems />
      <SolutionDetails />
      <HowItWorks />
      <UseCases />
      <SolutionsCTA />
    </>
  );
}
