import MeetupList from "../components/meetups/MeetupList";

function HomePage() {
  const DUMMY_DATA = [
    {
      id: "m1",
      title: "A First Meetup",
      address: "Dwarka New Delhi",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    },
    {
      id: "m2",
      title: "A second Meetup",
      address: "Najafgarh New Delhi",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    },
  ];

  return (
    <div>
      <MeetupList meetups={DUMMY_DATA} />
    </div>
  );
}

export default HomePage;
