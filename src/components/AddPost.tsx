import Image from "next/image";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { FaCameraRetro } from "react-icons/fa";
import { FaFileVideo } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { TbCalendarEvent } from "react-icons/tb";
const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg  gap-4 justify-between text-sm">
      <div className="flex gap-4 w-full">
        <Image
          src="https://images.pexels.com/photos/31509434/pexels-photo-31509434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          width={48}
          height={48}
          className="w-14 h-14 rounded-full ring-2 object-cover "
        />
        <div className="flex-1">
          <div className="flex gap-4">
            <textarea
              placeholder="What's on your mind?"
              className="flex-1 bg-stone-100 rounded-lg p-2"
            ></textarea>
            <BsEmojiHeartEyes
              width={20}
              height={20}
              className="h-5 w-5 cursor-pointer self-end"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center pr-16 mt-2 text-gray-400 flex-wrap">
        <div className="flex items-center gap-2 cursor-pointer">
          <FaCameraRetro width={20} height={20} />
          <span className="font-medium">Photo</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <FaFileVideo width={20} height={20} />
          <span className="font-medium">Video</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <VscGraph width={20} height={20} />
          <span className="font-medium">Poli</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <TbCalendarEvent width={20} height={20} />
          <span className="font-medium">Event</span>
        </div>
      </div>
    </div>
  );
};
export default AddPost;
