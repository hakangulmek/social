import Image from "next/image";
const Comments = () => {
  return (
    <div className="flex">
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/30800337/pexels-photo-30800337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={40}
          height={40}
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="Write a comment..."
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="flex flex-col gap-4 mt-4">
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi
          aspernatur facere voluptates sed totam rerum amet explicabo deserunt
          voluptatum tempore accusamus, quo nihil possimus maxime nemo quibusdam
          tempora consectetur.
        </p>
      </div>
    </div>
  );
};
export default Comments;
