const DUMMY_EVENTS = [
  {
    id: "m1",
    title: "Meetup in Park",
    description: "Meetup in the local park with food and games!",
    location: "Local Park",
    date: "2023-05-18",
    image: "image/apple-event.jpg",
    isFeatured: true,
  },
  {
    id: "m2",
    title: "Downtown Meetup",
    description: "Meetup in the downtown area. Coffee and conversations.",
    location: "Downtown Cafe",
    date: "2023-06-01",
    image: "image/deer-event.jpg",
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
}

export default DUMMY_EVENTS;
