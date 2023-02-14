import React, { useRef } from "react";
import Button from "../ui/Button";
import classes from "./eventSearch.module.scss";
import { useRouter } from "next/router";

const EventSearch = (props) => {
  const yearInput = useRef();
  const monthInput = useRef();
  const { push } = useRouter();
  const submitHandeler = (event) => {
    event.preventDefault();

    const selctedYear = yearInput.current.value;
    const selctedMonth = monthInput.current.value;

    props.onSearch(selctedYear, selctedMonth);
  };

  return (
    <form onSubmit={submitHandeler} className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInput}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInput}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Button</Button>
    </form>
  );
};

export default EventSearch;
