import Image from "next/image";
import { BsEmojiAstonishedFill } from "react-icons/bs";
const Comments = () => {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/30800337/pexels-photo-30800337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={40}
          height={40}
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <BsEmojiAstonishedFill
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
export default Comments;
