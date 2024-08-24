document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

document.addEventListener("dragstart", function (event) {
  event.preventDefault();
});

document.addEventListener("drop", function (event) {
  event.preventDefault();
});

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const cardImage = document.getElementById("card-image");
  const contentContainer = document.getElementById("content-container");

  const scrollThreshold = 500;

  if (scrollPosition < scrollThreshold) {
    const scaleValue = 1 - scrollPosition / scrollThreshold;
    const translateYValue = scrollPosition / 2;
    const opacityValue = 1 - scrollPosition / scrollThreshold;

    cardImage.style.transform = `scale(${scaleValue}) translateY(-${translateYValue}px)`;
    cardImage.style.opacity = `${opacityValue}`;

    contentContainer.style.transform = `scale(${
      0.5 + scrollPosition / scrollThreshold / 2
    }) translateY(${translateYValue}px)`;
    contentContainer.style.opacity = `${scrollPosition / scrollThreshold}`;
  } else {
    cardImage.style.transform = "scale(0.5) translateY(-250px)";
    cardImage.style.opacity = "0";

    contentContainer.style.transform = "scale(1) translateY(-60px)";
    contentContainer.style.opacity = "1";
  }
});
