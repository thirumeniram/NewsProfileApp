

const apiKey = "76e9309c0ef94fe09bf8a4d36c2db907";
  
export const getNewsAPI = (category) => 
{
    return `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}`;
}


  
export const getHeadlinesApi = (country) => {
    return `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
}



// My API Key 76e9309c0ef94fe09bf8a4d36c2db907
