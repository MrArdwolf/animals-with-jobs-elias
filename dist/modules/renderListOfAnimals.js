//Titta i index.html och hitta den UL där listan på djur ska skrivas ut.
//Rendera ut en lista över djurens namn på skärmen
//Varje list-item ska ha en event-lyssnare som kallar på "renderAnimalInfo"
//Typa upp funktionens parameter
import renderAnimalInfo from "./renderAnimalInfo.js";
const listOfAnimals = document.querySelector(".list-of-animals")?.querySelector("ul");
export default function renderListOfAnimals(animals) {
    animals.map((animal) => {
        if (!listOfAnimals) {
            console.error('listOfAnimals element not found');
            return;
        }
        const listItem = document.createElement("li");
        listItem.innerText = animal.name;
        listItem.addEventListener("click", () => {
            renderAnimalInfo(animal);
        });
        listOfAnimals.appendChild(listItem);
    });
}
