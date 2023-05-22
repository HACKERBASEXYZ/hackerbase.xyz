import { NextRequest } from "next/server";
import { createRouteHandlerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import { User } from "@/types/user";

export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerSupabaseClient({
    headers,
    cookies,
  });

  const body = await req.json();

  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", body);

  return new Response(JSON.stringify(data), { status: 200 });
}

export async function PATCH(req: NextRequest) {
  const supabase = createRouteHandlerSupabaseClient({
    headers,
    cookies,
  });

  const body: User = await req.json();

  const { data, error } = await supabase
    .from("users")
    .update({
      email: body.email,
      lastName: body.lastName,
      firstName: body.firstName,
    })
    .eq("id", body.id);

  if (error) {
    return new Response(JSON.stringify("Error on update user data"), {
      status: 500,
      statusText: error.message,
    });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}
