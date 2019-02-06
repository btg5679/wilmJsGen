import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("You need API, Bro?!");
});

app.get("/meetup", (req, res) => {
  const meetups = fetchMeetups();
  res.send(meetups);
});

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

const meetup1: Definitions.JsMeetup = { name: "The Roots and the New" };
const meetup2: Definitions.JsMeetup = { name: "SpookyJS" };
const meetup3: Definitions.JsMeetup = { name: "Not Your Father's JavaScript" };

app.listen(3000, () => console.log("Example app listening on port 3000!"));
