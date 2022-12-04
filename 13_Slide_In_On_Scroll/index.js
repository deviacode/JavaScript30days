function debounce(func, wait = 20, inmediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!inmediate) func.apply(context, args);
    };
    var callNow = inmediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    //half way through the image
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    //Bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height; //Toma la medida de la imagen
    const isHalfShow = slideInAt > sliderImage.offsetTop; //Calcula la mitad de la imagen
    const isNotScrolledPast = window.scrollY < imageBottom; //Calcula que aún no estemos viendo la imagen
    //Si la imagen se muestra y no hemos pasado de el scroll que la muesta
    if (isHalfShow && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
