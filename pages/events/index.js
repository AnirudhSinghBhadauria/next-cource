import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "@/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage({events}) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;

export async function getStaticProps() {

  const allEvents = await getAllEvents()

  return {
    props: {events : allEvents},
    revalidate: 60,
  };
}
