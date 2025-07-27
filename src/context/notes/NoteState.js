import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6887092e1d5f3a0af432c8b1",
      user: "687f909103d7f6cb00468eb6",
      title: "DSA Practice",
      description:
        "Today I will practice linked lists and trees on LeetCode. Consistency is key to cracking good companies.",
      tag: "career",
      timestamp: "2025-07-28T14:32:10.123Z",
      __v: 0,
    },
    {
      _id: "68870a5b1d5f3a0af432c8b2",
      user: "687f909103d7f6cb00468eb6",
      title: "Dinner Plan",
      description:
        "Planning to go out with friends tonight. Craving for some good paneer tikka and cold coffee.",
      tag: "personal",
      timestamp: "2025-07-28T18:45:55.456Z",
      __v: 0,
    },
    {
      _id: "68870c0e1d5f3a0af432c8b3",
      user: "687f909103d7f6cb00468eb6",
      title: "Gym",
      description:
        "Hit the gym at 6 AM tomorrow. It's time to get consistent with fitness again.",
      tag: "health",
      timestamp: "2025-07-29T05:20:45.000Z",
      __v: 0,
    },
    {
      _id: "68870d8e1d5f3a0af432c8b4",
      user: "687f909103d7f6cb00468eb6",
      title: "Reminder",
      description:
        "Don't forget to call the bank regarding the credit card issue tomorrow morning.",
      tag: "task",
      timestamp: "2025-07-29T07:55:10.000Z",
      __v: 0,
    },
    {
      _id: "68870ed11d5f3a0af432c8b5",
      user: "687f909103d7f6cb00468eb6",
      title: "Read Book",
      description:
        "Start reading Atomic Habits again. Just 10 pages a day to stay consistent and focused.",
      tag: "self-growth",
      timestamp: "2025-07-29T21:10:15.000Z",
      __v: 0,
    },
    {
      _id: "68880f331e8f5c2bf442e9a1",
      user: "687f909103d7f6cb00468eb6",
      title: "Assignment Submission",
      description:
        "I have to submit my Machine Learning assignment by 30th July. Need to start working on it today.",
      tag: "college",
      timestamp: "2025-07-29T23:12:45.321Z",
      __v: 0,
    },
    {
      _id: "688810a91e8f5c2bf442e9a2",
      user: "687f909103d7f6cb00468eb6",
      title: "Mood Indigo",
      description:
        "Meeting with the Mood Indigo team tomorrow regarding event planning. Prepare updates and ideas.",
      tag: "work",
      timestamp: "2025-07-30T08:00:00.000Z",
      __v: 0,
    },
    {
      _id: "6888121d1e8f5c2bf442e9a3",
      user: "687f909103d7f6cb00468eb6",
      title: "Mom's Birthday",
      description:
        "Buy a gift and call mom at midnight to wish her. She's the best person in the world.",
      tag: "personal",
      timestamp: "2025-07-30T12:45:30.654Z",
      __v: 0,
    },
    {
      _id: "688813771e8f5c2bf442e9a4",
      user: "687f909103d7f6cb00468eb6",
      title: "Netflix Break",
      description:
        "Take a small break and watch an episode of Dark. Don't binge though, only one!",
      tag: "leisure",
      timestamp: "2025-07-30T15:30:10.000Z",
      __v: 0,
    },
    {
      _id: "688815111e8f5c2bf442e9a5",
      user: "687f909103d7f6cb00468eb6",
      title: "Portfolio Update",
      description:
        "Add the latest project to the portfolio and update the resume accordingly.",
      tag: "career",
      timestamp: "2025-07-30T18:05:44.800Z",
      __v: 0,
    },
    {
      _id: "6888168b1e8f5c2bf442e9a6",
      user: "687f909103d7f6cb00468eb6",
      title: "Call with Alok",
      description:
        "Discuss upcoming hackathon idea and divide roles for initial prototype.",
      tag: "project",
      timestamp: "2025-07-30T20:12:11.221Z",
      __v: 0,
    },
    {
      _id: "688818161e8f5c2bf442e9a7",
      user: "687f909103d7f6cb00468eb6",
      title: "Grocery Run",
      description:
        "Buy milk, fruits, oats, and coffee. Get that dark chocolate too!",
      tag: "errand",
      timestamp: "2025-07-30T22:25:35.987Z",
      __v: 0,
    },
    {
      _id: "688819c11e8f5c2bf442e9a8",
      user: "687f909103d7f6cb00468eb6",
      title: "Water Plants",
      description:
        "Don't forget to water the plants in the balcony. They looked dry today.",
      tag: "habit",
      timestamp: "2025-07-31T06:35:20.421Z",
      __v: 0,
    },
    {
      _id: "68881b2a1e8f5c2bf442e9a9",
      user: "687f909103d7f6cb00468eb6",
      title: "Start Journal",
      description:
        "Start a daily journal. Keep it simple, just 3 lines about the day.",
      tag: "self-growth",
      timestamp: "2025-07-31T09:00:00.000Z",
      __v: 0,
    },
    {
      _id: "68881cb81e8f5c2bf442e9aa",
      user: "687f909103d7f6cb00468eb6",
      title: "Git Practice",
      description:
        "Practice git commands: stash, rebase, cherry-pick. Master the workflow.",
      tag: "learning",
      timestamp: "2025-07-31T11:15:45.789Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //Add a note
  const addNote = (title, description, tag) => {
    //TODO: API Call
    const note = {
      _id: "69280a12319a85a8e92114c50",
      user: "687f909103d7f6cb00468eb6",
      title: title,
      description: description,
      tag: tag,
      timestamp: "2025-07-20T08:45:23.833Z",
      __v: 0,
    };
    setNotes([note, ...notes]);
  };

  //delete a note
  const deleteNote = (id) => {
    //TODO: API Call
    console.log("deleting a note " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //edit a note
  const editNote = (id,title,description,tag) => {

  };

  
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
