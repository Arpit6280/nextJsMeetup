import React, { Fragment } from "react";
import classes from "./MeetupItem.module.css";

function MeetUpDetails(props) {
  return (
    <Fragment>
      <img src={props.image} alt="" />
      <h1>{props.title} </h1>
      <address>{props.address} </address>
      <p>{props.description} </p>
    </Fragment>
  );
}

export default MeetUpDetails;
