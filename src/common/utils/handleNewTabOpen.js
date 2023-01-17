import router from "common/router";

const handleNewTabOpen = (link, e) => {
  if (e.button === 0 && (e.ctrlKey || e.metaKey)) {
    window.open(link, "_blank");
  } else {
    router.push(link);
  }
};

export default handleNewTabOpen;
