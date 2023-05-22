import { User } from "@/types/user";

export async function getUsers(email: string | undefined) {
  const res = await fetch("http://localhost:3000/api/getUser", {
    cache: "no-cache",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function updateUser(user: User) {
  const res = await fetch("http://localhost:3000/api/getUser", {
    cache: "no-cache",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    return new Response(JSON.stringify("Error on update user data"), {
      status: res.status,
      statusText: res.statusText,
    });
  }

  return new Response(JSON.stringify(res.json()), { status: 200 });
}
