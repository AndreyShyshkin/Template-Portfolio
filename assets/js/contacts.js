$(".card-toggle").on("click", function () {
	$(".card-toggle").removeClass("active");
	$(this).addClass("active");
  console.log('this: ', this);

	let isAnimating = false;

	if (!isAnimating) {
		isAnimating = true;

		$(".card").find(".card-content").css("z-index", 0);
		$(".card").removeClass("active");

		let that = $(this);

		$(this).siblings().css("z-index", 1);

		setTimeout(function () {
			that
				.parent()
				.toggleClass("active")
				.find(".card-content")
				.on("transitionend", function () {
					isAnimating = false;
				});

        const isOverViewActive = $(".card--overview").hasClass("active");
        const $cardToggleLinks = $(".card-toggle");
          $cardToggleLinks.each(function () {
            const $link = $(this);
            const $icon = $link.find(".card-toggle__icon");
            
            if (isOverViewActive) {
              $link.css("border-color", "transparent");
              $icon.css("fill", "#161616");
              $link.on("mouseover", handleOverViewMouseOver);
              $link.on("mouseout", handleMouseOut);
            } else {
              if (!$link.hasClass("active")) {
                $link.css("border-color", "transparent");
                $icon.css("fill", "#161616");
              } else {
                $link.css("border-color", "#fff");
                $icon.css("fill", "#fff");
              }
              $link.off("mouseover", handleOverViewMouseOver);
              $link.off("mouseout", handleMouseOut);
              $link.on("mouseover", handleBlockMouseOver);
              $link.on("mouseout", handleMouseOut);
            }})
		}, 10);
	} else {
		return;
	}
  $(".card-toggle").on("mouseover", handleOverViewMouseOver);
  $(".card-toggle").on("mouseout", handleMouseOut);
});

$("input,textarea").blur(function () {
	if ($(this).val()) {
		$(this).parent().addClass("filled");
	} else {
		$(this).parent().removeClass("filled");
	}
});

$(".contact-btn").on("click", function () {
	$(".contact-form").toggleClass("active");
});
$(".contact-form button[type=submit], .contact-form .close").on(
	"click",
	function (e) {
		e.preventDefault();
		$(".contact-form").toggleClass("active");
	}
);

const allCardToggleLinks = $(".card-toggle");
allCardToggleLinks.on("mouseover", handleOverViewMouseOver);
allCardToggleLinks.on("mouseout", handleMouseOut);

function handleOverViewMouseOver(event) {
  const $link = $(event.currentTarget);
  const $icon = $link.find(".card-toggle__icon");
  $icon.css("fill", "#f90");
  $link.css("border-color", "#f90");
}

function handleMouseOut(event) {
  const $link = $(event.currentTarget);
  const $icon = $link.find(".card-toggle__icon");
  
  if (!$link.hasClass("active")) {
    $icon.css("fill", "#161616");
    $link.css("border-color", "transparent");
  }
}

function handleBlockMouseOver(event) {
  const $link = $(event.currentTarget);
  const $icon = $link.find(".card-toggle__icon");
  $icon.css("fill", "#fff");
  $link.css("border-color", "#fff");
}

