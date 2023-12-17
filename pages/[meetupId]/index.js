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

export default ShowDetails;
