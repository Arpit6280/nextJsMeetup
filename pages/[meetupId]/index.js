import MeetUpDetails from "../../components/meetups/MeetUpDetails";
import MeetupItem from "../../components/meetups/MeetupItem";

function ShowDetails() {
  return (
    <div>
      <MeetUpDetails
        image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
        title="First Meetup"
        address="New Delhi Dwarka"
        description="This is first meetup"
      />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
        params: {
          meetupId: "m2",
        },
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch the data from an API
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "New Delhi Dwarka",
        description: "This is first meetup",
      },
    },
  };
}

export default ShowDetails;
