import Image from "next/image";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import Comments from "./Comments";
const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/30800337/pexels-photo-30800337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Mehmet Gündüz</span>
        </div>
        <MdOutlineMoreHoriz width={16} height={16} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/30800337/pexels-photo-30800337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi
          aspernatur facere voluptates sed totam rerum amet explicabo deserunt
          voluptatum tempore accusamus, quo nihil possimus maxime nemo quibusdam
          tempora consectetur.
        </p>
      </div>
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-3">
          <div className="flex items-center gap-1 bg-slate-100 p-2 rounded-md">
            <BiSolidLike width={16} height={16} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123
              <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-1 bg-slate-100 p-2 rounded-md">
            <FaComment width={16} height={16} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123
              <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="pl-48">
          <div className="flex items-center gap-1 bg-slate-100 p-2 rounded-md">
            <FaShare width={16} height={16} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123
              <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <div>
        <Comments />
      </div>
    </div>
  );
};
export default Post;
