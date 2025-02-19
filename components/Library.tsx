"use client";

import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";

interface LibraryProps {
    songs: Song[];
}

const Library: React.FC<LibraryProps> = ({songs}) => {
    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const { user } = useUser();

    const onPlay = useOnPlay(songs);

    const onClick = () => {
        if(!user) {
            return authModal.onOpen();
        }

        return uploadModal.onOpen();
    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist className="text-neutral-400" size={20} />
                    <p className="font-medium text-neutral-400">Your Library</p>
                </div>
                <AiOutlinePlus onClick={onClick} className="text-neutral-400 cursor-pointer hover:text-white transition" size={20} />
            </div>
            <div className="flex flex-col gap-y-2 px-3 mt-4">
                {songs.map((song) => (
                    <MediaItem key={song.id} onClick={(id: string) => onPlay(id)} data={song} />
                ))}
            </div>
        </div>
    );
};

export default Library;