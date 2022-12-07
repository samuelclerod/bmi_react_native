import AsyncStorage from "@react-native-async-storage/async-storage";

const store = async (entry) => {
  try {
    const entries = await getData();

    entries.push({ ...entry, date: new Date() });

    const jsonEntries = JSON.stringify(entries);

    await AsyncStorage.setItem("@bmi_history", jsonEntries);
  } catch (error) {
    console.log("We cannot add a new entry ", entry);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@bmi_history");

    if (jsonValue) {
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    console.log("We cannot retrieve entries from storage ", e);
  }

  return [];
};

export default {
  store,
  getData,
};
