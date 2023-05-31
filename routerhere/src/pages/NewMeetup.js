import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {

  function addMeetupHandler(meetupData){}

  return (
    <section>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  );
}

export default NewMeetupPage;
