const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-movie");
// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector("header button").lastElementChild;

const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
// const userInputs = addMovieModal.getElementsByTagName("input");

console.log(backdrop);

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
};

const toggleMobieModal = () => {
    addMovieModal.classList.toggle("visible");
    toggleBackdrop();
};

const cancelAddMovieHandler = () => {
    toggleMobieModal();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === "" ||
        imageUrlValue.trim() === "" ||
        ratingValue.trim() === "" ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert("Please enter valid values (rating between 1 and 5).");
        return;
    }
};

const backgropClickHandler = () => {
    toggleMobieModal();
};

startAddMovieButton.addEventListener("click", toggleMobieModal);
backdrop.addEventListener("click", backgropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
