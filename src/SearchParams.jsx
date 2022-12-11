import { useState, useEffect } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "rept"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  // For Local Caching we are doing this
  const breeds = useBreedList(animal)[0]; //Because it's returning an array and a string [0];

  // So basically first we are calling useEffect so it fetch our data while calling a function
  // Secondly we are calling fetch Apis whenever we are hitting API's

  // To Load data initially
  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const jsonData = await res.json();
    setPets(jsonData.pets); //object of pets which we are storing in an array
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    requestPets();
  };

  const handleAnimalChange = (e) => {
    setAnimal(e.target.value);
    setBreed(""); // empty the other box whenever selecting animal.
  };

  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={handleAnimalChange}
          >
            {/* Setting empty option so by default select box will be empty */}
            <option />
            {ANIMALS.map((animal) => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            {/* Setting empty option so by default select box will be empty */}
            <option />
            {breeds.map((breed) => {
              return (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>

        <button>Submit</button>
      </form>

      {pets.map((pet) => {
        return (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
          />
        );
      })}
    </div>
  );
};
export default SearchParams;
