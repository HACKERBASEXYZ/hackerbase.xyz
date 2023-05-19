import { users } from "@/utils/data";

export async function GET() {
    return new Response(JSON.stringify(users), { status: 200 });
}