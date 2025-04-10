import EventsList from "../components/EventsList";
import PageContent from "../components/PageContent";
import Slider from "../components/Slider";

import React, { useEffect, useState } from "react";

function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:8080/events");
        if (!response.ok) {
          throw new Error("Could not fetch events.");
        }
        const data = await response.json();
        setEvents(data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <PageContent title="Welcome to DEV MUSCLES!">
        <p className="special-paragraph">
          The most comprehensive database of free workout routines ever! <br />
          Customize workout plans for any goal or experience level
        </p>
      </PageContent>
      <Slider />
      <PageContent title="WORKOUT CATEGORIES">
        <p className="special-paragraph">
          Choose a category that best suits the workout you're searching for.
          Once in the category, use the sort and filter options to find the
          right workout for your experience and goals
        </p>
      </PageContent>
      <EventsList events={events} />
    </>
  );
}

export default HomePage;
