import Link from "next/link";
import React from "react";
import classes from "./eventItems.module.scss";
import Button from "../ui/Button";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="images" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.adress}>
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link href={exploreLink}>Explore Events</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
