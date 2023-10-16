console.log("Connected!");

// You will modify this function to get the program to work
const wordCounter = (value) => {
  // Type into the input and press submit, you will see the values youi entered in your console.
  console.log(value);

  if (value) {
    wordCount.innerHTML = `Word Count: ${value.split(' ').length}`;
  } else {
    // if the valuye is empty, set the error message value to "Please input text
    error.innerHTML = "Please input text";
  }
}

const toggleMode = (btnText) => {
  if (btnText.includes('Dark')) {
    toggleButton.innerHTML = 'Light Mode';
    document.body.style.background = 'black';
    document.body.style.color = 'white';
  } else {
    toggleButton.innerHTML = 'Dark Mode';
    document.body.style.background = 'white';
    document.body.style.color = 'black';
  }
};


// These are query selectors. We will focus on them later in the course
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");
const error = document.querySelector("#error");
const wordCount = document.querySelector("#word-count");
const toggleButton = document.querySelector("#bg-switch");

// These are event listeners. We will focus on them later in the course
form.addEventListener("submit", (event) => {
  event.preventDefault(); // the default behavior of a form is to reload the page, we do not want that so we want to prevent that behavior
  error.innerHTML = ""; // clear out the innerHTML on submit
  wordCount.innerHTML = ""; // clear out the innerHTML on submit
  const value = textarea.value; // grab the value of the text area on submit
  wordCounter(value); // call the function and pass it the value
});

form.addEventListener("reset", () => {
  error.innerHTML = ""; // on reset, clear the innderHTML
  wordCount.innerHTML = ""; // on reset, clear the innderHTML
});

toggleButton.addEventListener("click", (event) => {
  toggleMode(event.target.innerHTML);
});
