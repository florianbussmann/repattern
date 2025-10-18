import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { AudioWaveform, Menu } from 'lucide-react';
import { categories } from "@/data/categories";
import { loadAudioFiles } from "@/lib/loadAudioFiles";
import Link from 'next/link';

export async function NavMenu() {
    const audioFiles = await loadAudioFiles();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="mr-2 -ml-1 cursor-pointer rounded-full p-2 hover:bg-gray-100">
                    <Menu size={20} />
                </button>
            </SheetTrigger>
            <SheetContent
                side="left"
                className="p-6 w-[300px] transition-transform duration-200 ease-out data-[state=open]:duration-200 data-[state=open]:ease-out sm:w-[400px]"
            >
                <SheetTitle>Menu</SheetTitle>
                <nav className="mt-4 flex flex-col space-y-4 overflow-y-auto">
                    {categories.map((category) => {
                        return (
                            <Link
                                key={category.id}
                                href={`/f/${category.id}`}
                                className="flex items-center space-x-2 rounded p-2 text-gray-700 hover:bg-gray-100"
                            >
                                <AudioWaveform size={20} />
                                <div className="flex justify-between w-full">
                                    <span>{category.title}</span>
                                    <span className="text-sm text-gray-400">
                                        {(category.id == "all" ? audioFiles : audioFiles.filter(audio => audio.categories.includes(category.id))).length}
                                    </span></div>
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}