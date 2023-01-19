import {
  getFormSubmitHandler,
  imageUploaderClickHandler,
} from "../utils/eventHandlers";
import parseElementFromString from "common/utils/parseElementFromString";

const PostForm = (setState) => {
  const template = `
    <form id="post__form" class="flex-1 px-4 py-6 w-full flex flex-col gap-4">
      <section id="post__form__image" class="h-56 w-full bg-white rounded-md border border-gray-300 flex justify-center items-center overflow-hidden">
        <button type="button" class="text-gray-500 text-lg font-semibold flex gap-2">
          <i class="bi bi-image" ></i>
          <span>Upload Image</span>
        </button>
      </section>
      <section id="post__form__article" class="w-full min-h-[300px] bg-white rounded-md border border-gray-300 flex-1 flex flex-col justify-start items-start gap-4 p-8">
        <input 
          type="text" 
          placeholder="Your Post Title Here..." 
          class="w-full text-2xl font-bold text-black placeholder:text-gray-600 placeholder:text-2xl placeholder:font-bold focus:outline-none"  
        />
        <hr class="w-full" ></hr>
        <textarea
          placeholder="Your Post Content Here..."
          class="w-full text-black whitespace-pre-wrap flex-1 placeholder:text-gray-500 focus:outline-none resize-none"
        ></textarea>
      </section>
      <button type="submit" class="py-4 w-full bg-black text-white text-lg font-semibold rounded-md" >
        Submit
      </button>
    </form>
  `;

  const $form = parseElementFromString(template);
  $form.addEventListener("submit", getFormSubmitHandler(setState));
  const $imageUploader = $form.querySelector("#post__form__image");
  $imageUploader.addEventListener("click", imageUploaderClickHandler);

  return $form;
};

export default PostForm;
