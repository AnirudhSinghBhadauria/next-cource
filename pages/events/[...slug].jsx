import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "@/dummy-data";

const FilteredEvents = () => {
  const router = useRouter();
  const year = router.query.slug[0];
  const month = router.query.slug[1];

  const nYear = +year;
  const nMonth = +month;

  if (router.query.slug) {
    return <p className="center">Loading...</p>;
  }

  if (
    isNaN(nYear) ||
    isNaN(nMonth) ||
    nMonth < 1 ||
    nYear > 2023 ||
    nMonth > 12 ||
    nYear < 2021
  ) {
    return <p>Invalid Input. Please Adjust your input.</p>;
  }

  const Events = getFilteredEvents({ year: nYear, month: nMonth });

  console.log(Events);

  return <div>FilteredEvents</div>;
};

export default FilteredEvents;
