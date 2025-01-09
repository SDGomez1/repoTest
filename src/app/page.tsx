import { headers } from "next/headers";
import { fetchMutation } from "convex/nextjs";
import { api } from "../../convex/_generated/api";

export default async function Home() {
    const headersa = headers(); // Import headers from next/server
    const ip = headersa.get('x-forwarded-for') || headersa.get('x-real-ip') || 'IP not found';
    await fetchMutation(api.ips.addIp, { ip: ip })
    return (
        <div className="min-h-svh w-full bg-black flex justify-center items-center">
            <video src="./video.mp4" controls autoPlay>
            </video>

        </div>
    );
}
