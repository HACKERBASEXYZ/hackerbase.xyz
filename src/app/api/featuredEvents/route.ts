import { featuredEvents } from "@/utils/data";

export async function GET() {
    return new Response(JSON.stringify(featuredEvents), { status: 200 });
}