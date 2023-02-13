import React from "react";
import EventItem from "./EventItem";
import classes from './eventList.module.scss'

const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map(({ id, location, date, title, image }) => (
        <EventItem
          key={id}
          id={id}
          title={title}
          location={location}
          date={date}
          image={image}
        />
      ))}
    </ul>
  );
};

export default EventList;
