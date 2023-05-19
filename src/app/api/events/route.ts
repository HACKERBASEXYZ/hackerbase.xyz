import { events } from "@/utils/data";

export async function GET() {
    return new Response(JSON.stringify(events), { status: 200 });
}