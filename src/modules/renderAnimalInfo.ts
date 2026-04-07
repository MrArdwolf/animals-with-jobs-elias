//Titta i index.html och hitta den div där info om varje djur ska skrivas ut.
//Typa upp funktionens parameter

import { Animal } from "./IAnimal.ts";

const animalInfo = document.querySelector(".animal-info");

export default function renderAnimalInfo(animal: Animal) {
  if (!animalInfo) {
    console.error("animalInfo element not found");
    return;
  }

  const image = document.createElement("img");
  image.src = `../images/${animal.imageUrl}`;
  animalInfo.appendChild(image);

  const name = document.createElement("h1");
  name.innerText = `${animal.name} the ${animal.kindOfAnimal}`;
  animalInfo.appendChild(name);

  
  
  const job = document.createElement("p");
  if (animal.employmentEndDate) {
    job.innerText = `${animal.job} - Currently not employed`;
  } else {
    job.innerText = `${animal.job} - Currently employed`;
  }
  animalInfo.appendChild(job);

  const ageElement = document.createElement("p");
  const cDate = new Date();
  const cYear = cDate.getFullYear();
  const calculatedAge = cYear - Number(animal.birthYear);
  ageElement.innerText = `Age: ${calculatedAge} years old.`;
  animalInfo.appendChild(ageElement);

  const skillsElement = document.createElement("ul");
  skillsElement.innerText = "Skills: ";
  if (typeof animal.skills === "string") {
    const skillItem = document.createElement("li");
    skillItem.innerText = animal.skills;
    skillsElement.appendChild(skillItem);
  } else {
  animal.skills.forEach((skill: string) => {
    const skillItem = document.createElement("li");
    skillItem.innerText = skill;
    skillsElement.appendChild(skillItem);
  });
}
  animalInfo.appendChild(skillsElement);







  //=====================================================//
  //Rendera ut bilden på djuret
  //Skriv ut djurets namn och typ av djur. Följ det här formatet: "Gina the Giraffe"
  //=====================================================//
  //=====================================================//
  //Skriv ut djurets jobb och om djuret är anställd just nu eller inte.
  //Följ formatet: "Trash Analyst - Currently (not) employed"
  //Använd template literals
  //=====================================================//
  //=====================================================//
  //Skriv ut djurets ålder (age). EJ året de är födda. Utan hur gamla de är.
  //Följ formatet:  Age: 9 years old.
  //Använd template literals
  //Bonus om du skriver ut rubriken "Age" med CSS.
  //=====================================================//
  //=====================================================//
  //Skriv ut en lista på djurets färdigheter
  //Följ formatet:    Skills:
  //                  Flying
  //                  Eating
  //Bonus om du skriver ut rubriken "Skills" med CSS.
  //=====================================================//
}
