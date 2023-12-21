import { Fragment } from "react";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(response);
    const data = await response.json();
    console.log(data);
    // console.log(enteredMeetupData);
  }
  return (
    <Fragment>
      <Head>
        <title>Add New Meetups</title>
        <meta name="description" content="Add new Meet ups App" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
}
export default NewMeetupPage;
