import EventList from "@/components/Event/EventList";
import { getFeaturedEvents } from "@/Dummy-Data";

const HomePage = () => {
  const featruedEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featruedEvents} />
    </div>
  );
};

export default HomePage;
