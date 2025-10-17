import { LeftSidebar } from '@/components/left-sidebar';
import { notFound } from 'next/navigation';
import { audioFiles } from "@/data/audioFiles";
import { AudioPlayer } from '@/components/AudioPlayer';

export default async function TrackPage({
    params,
}: {
    params: Promise<{ name: string; id: string }>;
}) {
    const id = (await params).id;

    const selectedAudioFile = audioFiles.find(a => a.id === id);

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