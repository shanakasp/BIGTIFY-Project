window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const cardImage = document.getElementById("card-image");
  const contentContainer = document.getElementById("content-container");

  const scrollThreshold = 500;

  if (scrollPosition < scrollThreshold) {
    cardImage.style.transform = `scale(${
      1 - scrollPosition / scrollThreshold
    }) translateY(${scrollPosition / 2}px)`;
    cardImage.style.opacity = `${1 - scrollPosition / scrollThreshold}`;
    contentContainer.style.transform = `scale(${
      0.5 + scrollPosition / scrollThreshold / 2
    }) translateY(${scrollPosition / 2}px)`;
    contentContainer.style.opacity = `${scrollPosition / scrollThreshold}`;
  } else {
    cardImage.style.transform = "scale(0.5) translateY(-200px)";
    cardImage.style.opacity = "0";
    contentContainer.style.transform = "scale(1) translateY(-100px)";
    contentContainer.style.opacity = "1";
  }
});
