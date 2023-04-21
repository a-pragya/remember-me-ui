import { ListItem } from "../types";
import styles from "./ReminderList.module.css";

function ReminderList(props: any) {
  const reminderList: ListItem[] = props.reminders;

  const createListItem = reminderList.map((item: ListItem) => {
    return (
      <div key={item.id} className={styles.listItem}>
        <div className={styles.reminderText}>{item.text}</div>
        <div className={styles.reminderDate}>
          <img
            src="/calendar.png"
            alt="calendar"
            className={styles.calenderIcon}
          />
          {item.date}
        </div>
        <div
          className={styles.deleteBtn}
          onClick={() => props.onDeleteReminder(item.id)}
        >
          <img src="/delete.png" alt="delete" className={styles.deleteIcon} />
        </div>
      </div>
    );
  });
  return <div className={styles.listContainer}>{createListItem}</div>;
}

export default ReminderList;
