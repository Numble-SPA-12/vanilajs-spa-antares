import Link from "common/components/Link";

const NewPostLink = () => {
  return Link({
    href: "/posts/new",
    label: "New Post",
    className:
      "w-full py-3 rounded-lg bg-black text-white font-semibold text-lg mb-4 flex justify-center",
  });
};

export default NewPostLink;
