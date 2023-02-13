import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "@/Dummy-Data";
import EventSummary from "@/components/EventDetails/EventSummary";
import EventLogistics from "@/components/EventDetails/EventLogistics";
import EventContent from "@/components/EventDetails/EventContent";

const EventDetailPage = () => {
  const { query } = useRouter();

  const fetchedEvent = getEventById(query.eventId);

  if (!fetchedEvent) return <p>No Event Found.</p>;

  console.log(fetchedEvent);
  return (
    <Fragment>
      <EventSummary title={fetchedEvent.title} />
      <EventLogistics
        date={fetchedEvent.date}
        address={fetchedEvent.address}
        image={fetchedEvent.image}
        imageAlt={fetchedEvent.imageAlt}
      />
      <EventContent>
        <p>{fetchedEvent.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;
