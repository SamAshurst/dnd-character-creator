function fetchApi() {
  return fetch("https://www.dnd5eapi.co/api/races")
    .then((response) => {
      return response.json();
    })
    .then(({ results }) => {
      return results;
    });
}

function fetchRaceData(race) {
  const lowerCaseRace = race.toString().toLowerCase();
  return fetch(`https://www.dnd5eapi.co/api/races/${lowerCaseRace}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

function fetchClassApi() {
  return fetch("https://www.dnd5eapi.co/api/classes")
    .then((response) => {
      return response.json();
    })
    .then(({results}) => {
      return results
    });
}


function fetchClassData(classes) {
  const lowerCaseClass = classes.toString().toLowerCase();
  return fetch(`https://www.dnd5eapi.co/api/classes/${lowerCaseClass}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

export { fetchApi, fetchRaceData, fetchClassApi, fetchClassData };
