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
  const eventOrganizer = document.querySelector(".organizer").value;
  const eventDate = document.querySelector(".event__date").value;

  //get time in milliseconds from epoch time to event date
  const eventTimeStamp = new Date(eventDate).getTime();
  // start of time ------------------ today ----------------- event date

  if (eventName && eventOrganizer && eventDate) {
    //create event Object to handle the local storage saving.
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
  } else {
    alert("Fill all the field");
  }
}

function displayEvents() {
  const events = JSON.parse(localStorage.getItem("events")) || [];
  const eventsList = document.querySelector(".events");
  eventsList.innerHTML = "";
  events.forEach((event, index) => {
    // create the time in millisecond variable.
    const now = new Date().getTime();
    // calcolate the current time. for each event
    const timeLeft = event.timeStamp - now;
    // creating time variable's for day hour minute seconds
    const day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hour = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minute = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const counteDown = `${day}d ${hour}h ${minute}m ${second}s`;

    eventsList.innerHTML += `
      <div class = "event">
        <h3>${event.name}</h3>
        <p><span>By</span>${event.organizer}</p>
        <p><span>On</span>${event.date} </p>
        <p><span>Time</span>${counteDown}</p>
        <button onclick="deleteEvent(${index})">Delete</button>
        </div>
    `;
  });
}

displayEvents();

// making delete function.
function deleteEvent(index) {
  const events = JSON.parse(localStorage.getItem("events"));
  events.splice(index, 1);
  localStorage.setItem("events", JSON.stringify(events));
  displayEvents();
}

setInterval(displayEvents, 1000);
