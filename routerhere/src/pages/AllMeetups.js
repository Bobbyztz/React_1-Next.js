import MeetupList from "../components/meetups/MeetipList";

const DUMMY_DATA = [
  {
    id: "cat",
    title: "First Meetup",
    image:
      "https://en.wikipedia.org/wiki/Cat#/media/File:Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
    address: "123 Main St, Some City, Some State, 12345",
    description: "here is a cat",
  },
  {
    id: "dog",
    title: "Second Meetup",
    image:
      "",
    address: "456 Central Ave, Another City, Another State, 67890",
    description: "here is a dog",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA}/>
    </section>
  );
}

export default AllMeetupsPage;
