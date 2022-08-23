

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd18672eff0msh8067bcc268e390ap1461a1jsnc9d9a83e5102',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'd18672eff0msh8067bcc268e390ap1461a1jsnc9d9a83e5102',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
