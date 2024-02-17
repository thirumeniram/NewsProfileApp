

// const apiKey = "76e9309c0ef94fe09bf8a4d36c2db907";
  
// export const getNewsAPI = (category) => 
// {
//     return `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}`;
// }


  
// export const getHeadlinesApi = (country) => {
//     return `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
// }



// My API Key 76e9309c0ef94fe09bf8a4d36c2db907



// export const getNewsAPI = (category="general", country = "in") => {
//   return `https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`;
// };
export const BASE_URL = "https://saurav.tech/NewsAPI/";

export const getNewsAPI = (category, country = "in") => {
    return `${BASE_URL}top-headlines/category/${category}/${country}.json`;
  };

export const getHeadlinesAPI = (source) => {
  return `https://saurav.tech/NewsAPI/everything/cnn.json`;
};

// return `https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`;