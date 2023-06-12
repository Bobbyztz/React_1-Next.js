import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "max", name: "Maxlalala" },
    { id: "manu", name: "Manulululu" },
  ];

  return (
    <div>
      <h1>The clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}<br></br></Link>
            <Link href={
              {
                pathname:"/clients/[id]",
                query:{id:client.id},
              }
            }>Alt-{client.name}<br></br></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
