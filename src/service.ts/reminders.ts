import axios from "axios";
import * as AWS from "@aws-sdk/util-dynamodb";
import { ListItem } from "../types";

const hostname =
  "https://w5a9w958d7.execute-api.ap-south-1.amazonaws.com/RememberMe";

export const fetchReminders = async () => {
  const data = await axios.get(hostname, {
    headers: { Authorization: "test" },
  });
  const items = data.data.Items.map((item: any) => {
    return AWS.unmarshall(item);
  });
  return items;
};

export const deleteReminderFromDB = async (ID: string) => {
  const data = await axios.delete(hostname, {
    data: {
      ID: ID,
    },
    headers: { Authorization: "test" },
  });
  return data;
};

// add Authorization header

export const addReminderToDB = async (reminder: ListItem) => {
  const data = await axios.post(
    hostname,
    {
      ID: reminder.ID,
      reminderText: reminder.reminderText,
      reminderDate: reminder.reminderDate,
    },
    { headers: { Authorization: "test" } }
  );
  return data;
};
