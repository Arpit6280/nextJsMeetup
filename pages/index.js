import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

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
function HomePage(props) {
  return (
    <div>
      <MeetupList meetups={props.meetups} />
    </div>
  );
}

export async function getStaticProps() {
  // fetch the data from an API
  return {
    props: {
      meetups: DUMMY_DATA,
    },
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch the data from an API
//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     },
//   };
// }

export default HomePage;
