import { audioFiles as localAudioFiles } from "@/data/audioFiles";
import { AudioFile } from "@/lib/audioStorage";

const REMOTE_CONTENT_URL = process.env.NEXT_PUBLIC_REMOTE_CONTENT_URL;

if (!REMOTE_CONTENT_URL) {
    console.warn("REMOTE_CONTENT_URL not set — using local fallback.");
}

export async function loadAudioFiles(): Promise<AudioFile[]> {
    try {
        if (!REMOTE_CONTENT_URL) {
            return localAudioFiles;
        }

        const res = await fetch(REMOTE_CONTENT_URL, { next: { revalidate: 60 } });

        if (!res.ok) throw new Error(`Failed to fetch remote audio files: ${res.status}`);

        const data = (await res.json()) as AudioFile[];

        return data;
    } catch (err) {
        console.warn("Falling back to local audio files:", (err as Error).message);
        return localAudioFiles;
    }
}
