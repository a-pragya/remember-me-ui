import { useEffect, useState } from "react";
import { generateID } from "../utils/generateID";
import styles from "./NewReminder.module.css";

function NewReminder(props: any) {
  const [reminderText, setReminderText] = useState<string>("");
  const [reminderDate, setReminderDate] = useState<string>("");
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (reminderText.trim().length > 0 && reminderDate.trim().length > 0) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [reminderText, reminderDate]);

  const addBtnHandler = (e: any) => {
    e.preventDefault();
    if (!reminderText || !reminderDate) {
      return;
    }
    props.onAddReminder({
      ID: generateID(),
      reminderText: reminderText,
      reminderDate: reminderDate,
    });
    setReminderText("");
    setReminderDate("");
  };

  const handleInputChange = (e: any) => {
    setReminderText(e.target.value);
  };

  const handleDateChange = (e: any) => {
    setReminderDate(e.target.value);
  };

  return (
    <div className={styles.newReminderContainer}>
      <div className={styles.newReminderCard}>
        <form>
          <textarea
            className={styles.reminderInput}
            value={reminderText}
            onChange={handleInputChange}
            placeholder="Enter your reminder here..."
          ></textarea>
          <input
            className={styles.datePicker}
            type="date"
            value={reminderDate}
            onChange={handleDateChange}
          />
          <button
            className={styles.addBtn}
            onClick={addBtnHandler}
            disabled={btnDisabled}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewReminder;
