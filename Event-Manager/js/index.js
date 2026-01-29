// making a function to set time.
function setMinDate() {
  const today = new Date().toISOString().split("T")[0];
  const eventDate = document.querySelector(".event__date");

  // setting the min date that a user can chose.
  eventDate.min = today;

  // making a condition to check the user input.
  eventDate.addEventListenre("input", () => {
    if (eventDate.value < today) {
      eventDate.value = today;
    }
  });
}

setMinDate();
