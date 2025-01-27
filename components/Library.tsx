"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {

    const onClick = () => {
        //Later
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
                List of songs
            </div>
        </div>
    );
};

export default Library;