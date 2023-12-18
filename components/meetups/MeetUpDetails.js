import React, { Fragment } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetUpDetails(props) {
  return (
    <Fragment>
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
          </div>
        </Card>
      </li>
    </Fragment>
  );
}

export default MeetUpDetails;
