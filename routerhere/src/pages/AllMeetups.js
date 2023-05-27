const DUMMY_DATA = [
  {
    id: "cat",
    title: "First Meetup",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.guim.co.uk%2Fimg%2Fmedia%2F26392d05302e02f7bf4eb143bb84c8097d09144b%2F446_167_3683_2210%2Fmaster%2F3683.jpg%3Fwidth%3D1200%26quality%3D85%26auto%3Dformat%26fit%3Dmax%26s%3Da52bbe202f57ac0f5ff7f47166906403&tbnid=iqNUK8so7yD7gM&vet=12ahUKEwjco_OJyZb_AhWpGVkFHSTcD48QMygIegUIARD2AQ..i&imgrefurl=https%3A%2F%2Fwww.theguardian.com%2Flifeandstyle%2F2020%2Fsep%2F05%2Fwhat-cats-mean-by-miaow-japans-pet-guru-knows-just-what-your-feline-friend-wants&docid=V4qL_jTRbB2FuM&w=1200&h=720&q=cat&ved=2ahUKEwjco_OJyZb_AhWpGVkFHSTcD48QMygIegUIARD2AQ",
    address: "123 Main St, Some City, Some State, 12345",
  },
  {
    id: "dog",
    title: "Second Meetup",
    image:
      "https://www.google.com/search?q=dog&tbm=isch&ved=2ahUKEwjco_OJyZb_AhWpGVkFHSTcD48Q2-cCegQIABAA&oq=dog&gs_lcp=CgNpbWcQA1AAWABgAGgAcAB4AIABAIgBAJIBAJgBAKoBC2d3cy13aXotaW1n&sclient=img&ei=UIdyZNy7Iamz5NoPpLi_-Ag&bih=1031&biw=2048#imgrc=hZOZMtGMqallhM",
    address: "456 Central Ave, Another City, Another State, 67890",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>{DUMMY_DATA.map((meetup) => {
        return <li>{meetup.id}</li>
      })}</ul>
    </section>
  );
}

export default AllMeetupsPage;
