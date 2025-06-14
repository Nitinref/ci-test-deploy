import { client } from "@repo/db/client";

export default async function Home() {
  const users = await client.user.findMany({
    take: 50,                
    select: { username: true } 
  });

  return (
    <ul>
      {users.map(u => <li key={u.username}>{u.username}</li>)}
    </ul>
  );
}
