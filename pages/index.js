import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "@/api-util";
import { useContext } from "react";
import { notificationContext } from "@/store/NotificationContext";

function HomePage(props) {
  const { notification, nStatus, changeNStatus, changeNotification } =
    useContext(notificationContext);

  const nHandeler = () => {
    changeNotification({
      title: "testing",
      status: "success",
      message: "testing succesfull!",
    });
    changeNStatus(true);

    setTimeout(() => {
      changeNStatus(false);
    }, 3000);
  };

  console.log(nStatus);

  return (
    <div>
      <EventList items={props.events} />
      <button onClick={nHandeler}>Show Notification</button>
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
