import { Fragment } from "react";
import { getAllEvents, getEventById  } from "@/api-util";
import HeadContent from "@/components/Head/HeadContent";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

function EventDetailPage(props) {
  const { event } = props;

  if (!event) {
    return (
      <ErrorAlert>
        <HeadContent
          name="error"
          content="No Event Found!"
          title="NEXT | No Event Found"
        />
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <HeadContent
        title={`NEXT | ${props.eventId.toUpperCase()}`}
        name="specific Event"
        content="content about specific event"
      />
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event: event[0],
      eventId: eventId,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const allEvents = await getAllEvents();

  const paths = allEvents.map((events) => ({
    params: { eventId: events.id },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
