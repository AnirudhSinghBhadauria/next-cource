import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "@/api-util";
import HeadContent from "@/components/Head/HeadContent";

function HomePage(props) {
  return (
    <div>
      <HeadContent
        title="NEXT | 2023"
        name='description'
        content="Evnets available on the internet."
      />
      <EventList items={props.events} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
