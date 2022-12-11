import { useState, useEffect } from "react";

const localCache = {};
// Assume first time the animal name we receive is empty the we are saving just an empty array
// Next time we will compare the incoming animal name
// If the name is new and not stored in cache then it will make an API call and save it.

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      //It will create a new key
      setBreedList[localCache[animal]];
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const jsonData = await res.json();
      localCache[animal] = jsonData.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
