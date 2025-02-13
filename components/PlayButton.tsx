import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
    return (
        <button className="opacity-0 group-hover:opacity-100 bg-green-500 rounded-full flex items-center drop-shadow-md translate-y-1/4 group-hover:translate-y-0 hover:scale-110 p-4 transition translate">    
            <FaPlay className="text-black" size={25} /> 
        </button>
    );
}

export default PlayButton;