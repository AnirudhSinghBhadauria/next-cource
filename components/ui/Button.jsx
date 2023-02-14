import React from "react";
import Link from "next/link";
import classes from "./button.module.scss";

const Button = (props) => {
  if (props.link) {
    return (
      <Link className={classes.btn} href={props.href}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={props.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
