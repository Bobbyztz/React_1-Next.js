import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    //navigate programmatically
    //if use replace instead of push, we can't go back
    //if using a String: router.push('/clients/max/projecta');
    //if not using a String
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projectA" },
    });
  }

  return (
    <div>
      <h1>Client's Projects Page</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
}
