import { MongoClient, ObjectId } from "mongodb";
import MeetUpDetails from "../../components/meetups/MeetUpDetails";
import MeetupItem from "../../components/meetups/MeetupItem";
// MongoClient

function ShowDetails(props) {
  // console.log(props);
  let meetup = JSON.parse(props.meetups);

  return (
    <div>
      <MeetUpDetails
        image={meetup.image}
        title={meetup.title}
        address={meetup.address}
        description={meetup.description}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://arpitsinghyadav19:Arpit6280@cluster0.ukwpzd9.mongodb.net/test?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch the data from an API
  const meetupId = context.params.meetupId;
  let id = new ObjectId(meetupId);
  console.log(typeof meetupId);
  console.log(meetupId);
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://arpitsinghyadav19:Arpit6280@cluster0.ukwpzd9.mongodb.net/test?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.findOne({
      _id: id,
    });

    // console.log("meetups -", meetups);
    client.close();
    return {
      props: {
        meetups: JSON.stringify(meetups),
      },
    };
  } catch (e) {
    console.log(e);
  }
}

export default ShowDetails;
