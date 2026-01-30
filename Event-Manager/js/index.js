// making a function to set time.
function setMinDate() {
  const today = new Date().toISOString().split("T")[0];
  const eventDate = document.querySelector(".event__date");

  // setting the min date that a user can chose.
  eventDate.min = today;

  // making a condition to check the user input.
  eventDate.addEventListener("input", () => {
    if (eventDate.value < today) {
      eventDate.value = today;
    }
  });
}

setMinDate();

function addEvent() {
  const eventName = document.querySelector(".event__name").value;
  const eventDate = document.querySelector(".event__date").value;
  const eventOrganizer = document.querySelector(".organizer").value;
  //get time in milliseconds from epoch time to event date
  const eventTimeStamp = new Date(eventDate).getTime();
  // start of time ------------------ today ----------------- event date

  //create event Object
  const event = {
    name: eventName,
    date: eventDate,
    organizer: eventOrganizer,
    timeStamp: eventTimeStamp,
  };

  // checking localStorage.
  let events = JSON.parse(localStorage.getItem("events")) || [];
  events.push(event);
  // adding to localStorage.
  localStorage.setItem("events", JSON.stringify(events));

  const input = document.querySelectorAll("input");
  input.forEach((input) => (input.value = ""));

  displayEvents();
}

function displayEvents() {
  const events = JSON.parse(localStorage.getItem("events")) || [];
  const eventsList = document.querySelector(".events");
  eventsList.innerHTML = "";
  events.forEach((event) => {
    eventsList.innerHTML += `
      <div class = "event">
        <h3>${event.name}</h3>
        <p><span>By</span> ${event.organizer}</p>
        <p><span>On</span ${event.date} </p>
        <p><span>Time</span> Time </p>
        <button>Delete</button>
        </div>
    `;
  });
}

displayEvents();
