import { LeftSidebar } from '@/components/left-sidebar';
import { notFound } from 'next/navigation';
import { loadAudioFiles } from "@/lib/loadAudioFiles";
import { AudioPlayer } from '@/components/AudioPlayer';

export async function generateStaticParams() {
    return (await loadAudioFiles()).flatMap(audio => (
        audio.categories.map(category => ({
            category: category,
            id: audio.id,
        }))));
}

export default async function TrackPage({
    params,
}: {
    params: Promise<{ category: string; id: string }>;
}) {
    const id = (await params).id;

    const selectedAudioFile = (await loadAudioFiles()).find(a => a.id === id);

    if (!selectedAudioFile) {
        notFound();
    }

    return (
        <div className="flex h-full grow">
            <LeftSidebar />
            <div className="grow overflow-auto p-2 sm:p-6">
                <div className="mx-auto max-w-4xl">
                    <AudioPlayer
                        src={selectedAudioFile.src}
                        title={selectedAudioFile.title}
                    />
                </div>
            </div>
        </div>
    );
}