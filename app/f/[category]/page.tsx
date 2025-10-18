import { loadAudioFiles } from "@/lib/loadAudioFiles";
import { categories } from "@/data/categories";
import Link from "next/link";


export function generateStaticParams() {
  return categories;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const audioFiles = await loadAudioFiles();

  let { category } = await params;
  let filteredAudioFiles = category == "all" ? audioFiles : audioFiles.filter(audio => audio.categories.includes(category));

  return (
    <div className="flex h-screen">
      <div className="grow overflow-hidden border-r border-gray-200"><div className="flex h-[70px] items-center justify-between border-b border-gray-200 p-4">
        <div className="flex items-center">
          <h1 className="flex items-center text-xl font-semibold capitalize">
            {category == "all" ? "Training Library" : categories.find((cat => cat.id == category))?.title}
            <span className="ml-2 text-sm text-gray-400">{filteredAudioFiles.length}</span>
          </h1>
        </div>
      </div>
        <div className="h-[calc(100vh-64px)] overflow-auto">
          {filteredAudioFiles.map((audio) => {
            return (
              <Link
                key={audio.id}
                href={`/f/${category}/${audio.id}`}
                className="block cursor-pointer border-b border-gray-100 hover:bg-gray-50"
              >
                <div
                  className="flex items-center"
                >
                  <div className="flex grow items-center overflow-hidden p-4">
                    <div className="mr-4 w-[250px] shrink-0">
                      <span className="truncate font-medium">
                        {audio.title}
                      </span>
                    </div>
                    <div className="flex grow items-center overflow-hidden">
                      <span className="mr-2 max-w-[400px] min-w-[175px] truncate font-medium">
                        {audio.categories.map((category) => {
                          return categories.find(c => c.id == category)!.title
                        }).filter(Boolean)
                          .join(", ")}
                      </span>
                    </div>
                  </div>
                  <div className="flex w-40 shrink-0 items-center justify-end p-4">
                    <span className="text-sm text-gray-500">
                      {audio.duration}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
