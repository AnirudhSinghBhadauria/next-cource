import React from "react";
import Link from "next/link";
import classes from "./button.module.scss";

const Button = (props) => {
  return (
    <Link className={classes.btn} href={props.href}>
      {props.children}
    </Link>
  );
};

export default Button;
