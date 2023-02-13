import React from "react";
import { useRouter } from "next/router";

const FilteredEvents = () => {
  const { query } = useRouter();
  
  return <div>FilteredEvents</div>;
};

export default FilteredEvents;
