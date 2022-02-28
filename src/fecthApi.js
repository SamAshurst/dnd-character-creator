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
  return fetch(`https://www.dnd5eapi.co/api/races/${race.toLowerCase()}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

export { fetchApi, fetchRaceData };
