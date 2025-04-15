import Image from "next/image";
import { BsEmojiAstonishedFill } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
const Comments = () => {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/30800337/pexels-photo-30800337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={40}
          height={40}
          alt=""
          className="w-8 h-8 rounded-full"
        />
        <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <BsEmojiAstonishedFill
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div>
        <div className="flex gap-4 justify-between mt-6">
          <Image
            alt=""
            src="https://images.pexels.com/photos/31580558/pexels-photo-31580558/free-photo-of-kumlu-sahilde-sepet-tekneli-balikcilar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Berdan Mardinli</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum
              totam voluptate sint pariatur quo consequuntur possimus officia,
              minima temporibus sit dignissimos itaque voluptates fuga, dolorum
              rerum nihil deserunt ad.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <BiSolidLike
                  width={16}
                  height={16}
                  className="cursor-pointer"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">
                  123
                  <span className="hidden md:inline"> Likes</span>
                </span>
              </div>
              <div>Reply</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comments;
