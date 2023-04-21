import { useState } from "react";
import "./App.css";
import { ListItem } from "./types";
import Header from "./components/Header";
import NewReminder from "./components/NewReminder";
import ReminderList from "./components/ReminderList";

function App() {
  const [reminders, setReminders] = useState<ListItem[]>([]);

  const addReminder = (reminder: ListItem) => {
    setReminders((currentReminder) => {
      return [...currentReminder, reminder];
    });
  };

  const deleteReminder = (id: string) => {
    setReminders((currentReminder) => {
      return currentReminder.filter((reminder) => reminder.id !== id);
    });
  };

  return (
    <div className="mainContainer">
      <Header />
      <NewReminder onAddReminder={addReminder} />
      <ReminderList reminders={reminders} onDeleteReminder={deleteReminder} />
    </div>
  );
}

export default App;
