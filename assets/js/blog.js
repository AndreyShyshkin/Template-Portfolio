$(".read-more").on("click", function (event) {
  event.preventDefault();
  const paragraph = $(this).prev(".blog-text");
  const additionalText = $(this).data("additional-text");
  paragraph.text(paragraph.text() + " " + additionalText);
  $(this).hide();
});
