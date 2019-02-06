import express from "express";
const app = express();

app.get("/", (req, res) => {
  const test: string = "test";
  res.send("You need API, Bro?!");
});

app.get("/events", (req, res) => {
  const events = [];
  const event1 = {
    name: "some name",
    meal: "pizza",
    drink: "beer"
  };
  events.push(event1);
  res.send(events);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
