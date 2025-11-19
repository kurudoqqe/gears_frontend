export const jumpToSection = (section_id) => {
  const feedbackId = document.querySelector(`#${section_id}`);
  window.scrollTo(0, feedbackId.offsetTop - 125);
};
