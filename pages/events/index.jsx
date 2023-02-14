import { getAllEvents } from "@/Dummy-Data";
import React, { Fragment } from "react";
import EventList from "@/components/Event/EventList";
import EventSearch from "@/components/Event/EventSearch";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const allEvents = getAllEvents();
  const {push} = useRouter();

  const findEventHandeler = (year, month) => push(`/events/${year}/${month}`);

  return (
    <Fragment>
      <EventSearch onSearch={findEventHandeler} />
      <EventList items={allEvents} />
    </Fragment>
  );
};

export default AllEventsPage;
