import express from "express";
const app = express();

// START HANDLERS
/* Base Path Handler */
app.get("/wilmjs", (req, res) => {
  res.send("You need API, Bro?!");
});

/* GET Meetups Handler */
app.get("/wilmjs/meetups", (req, res) => {
  const meetups = fetchMeetups();
  res.statusCode = 200;
  res.send(meetups);
});

/* GET Meetup Handler */
app.get("/wilmjs/meetups/:meetupId", (req, res) => {
  //TODO: implement
});

/* POST Meetup Handler */
app.post("/wilmjs/meetups", (req, res) => {
  //TODO: implement
});
// END HANDLERS

/* Meetups Mock Service */
function fetchMeetups(): Definitions.JsMeetups {
  const meetupsDefinition: Definitions.JsMeetups = {};
  const meetups: Definitions.JsMeetup[] = [];
  meetups.push(meetup1);
  meetups.push(meetup2);
  meetups.push(meetup3);
  meetupsDefinition._embedded = {
    items: meetups
  };

  return meetupsDefinition;
}

/* Meetups Mock Data Store */
const meetup1: Definitions.JsMeetup = {
  id: "1",
  name: "The Roots and the New",
  meetupDate: "2018-08-21T18:00:00.000Z",
  state: "completed"
};
const meetup2: Definitions.JsMeetup = {
  id: "2",
  name: "SpookyJS",
  meetupDate: "2018-10-30T18:00:00.000Z",
  state: "completed"
};
const meetup3: Definitions.JsMeetup = {
  id: "3",
  name: "Not Your Father's JavaScript",
  meetupDate: "2019-02-12T18:00:00.000Z",
  state: "pending"
};

app.listen(3000, () => console.log("Example app listening on port 3000!"));
