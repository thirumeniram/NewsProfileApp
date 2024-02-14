
export const BASE_URL = "https://saurav.tech/NewsAPI/";
  
export const getNewsAPI = (category, country = "in") => 
{
    return `${BASE_URL}top-headlines/category/${category}/${country}.json`;
};