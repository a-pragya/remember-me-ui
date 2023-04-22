import { useEffect, useState } from "react";
import "./App.css";
import { ListItem } from "./types";
import Header from "./components/Header";
import NewReminder from "./components/NewReminder";
import ReminderList from "./components/ReminderList";
import {
  addReminderToDB,
  deleteReminderFromDB,
  fetchReminders,
} from "./service.ts/reminders";

function App() {
  const [reminders, setReminders] = useState<ListItem[]>([]);

  useEffect(() => {
    const getReminders = async () => {
      const remindersFromServer = await fetchReminders();
      console.log("remindersFromServer", remindersFromServer);
      setReminders(remindersFromServer);
    };
    getReminders();
  }, []);

  const addReminder = async (reminder: ListItem) => {
    await addReminderToDB(reminder);
    setReminders((currentReminder) => {
      return [...currentReminder, reminder];
    });
  };

  const deleteReminder = async (ID: string) => {
    await deleteReminderFromDB(ID);
    setReminders((currentReminder) => {
      return currentReminder.filter((reminder) => reminder.ID !== ID);
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
