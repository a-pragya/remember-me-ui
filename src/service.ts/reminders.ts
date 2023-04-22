import axios from "axios";
import * as AWS from "@aws-sdk/util-dynamodb";
import { ListItem } from "../types";

export const fetchReminders = async () => {
  const data = await axios.get(
    "https://w5a9w958d7.execute-api.ap-south-1.amazonaws.com/RememberMe"
  );
  const items = data.data.Items.map((item: any) => {
    return AWS.unmarshall(item);
  });
  console.log("items", items);
  return items;
};

export const deleteReminderFromDB = async (ID: string) => {
  const data = await axios.delete(
    "https://w5a9w958d7.execute-api.ap-south-1.amazonaws.com/RememberMe",
    {
      data: {
        ID: ID,
      },
    }
  );
  return data;
};

export const addReminderToDB = async (reminder: ListItem) => {
  const data = await axios.post(
    "https://w5a9w958d7.execute-api.ap-south-1.amazonaws.com/RememberMe",
    {
      ID: reminder.ID,
      reminderText: reminder.reminderText,
      reminderDate: reminder.reminderDate,
    }
  );
  return data;
};
