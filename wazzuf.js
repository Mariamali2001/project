const axios = require("axios");
const cheerio = require("cheerio");



const GetListjobs = (name) => {
    return axios
      .get(
        "https://wuzzuf.net/a/Software-Engineer---Internship-Jobs-in-Egypt"
      )
      .then((response) => response.data)
      .then((html) => {
        const $ = cheerio.load(html);
        const Listjobs = $("div > div > div> h2 > a");
        //div div a 
  
        const parsedListjobs= [];
        for (let Listjobs of Listjobs) {
          parsedListjobs.push(Listjobs.attribs.title);
        }
        return firstCharacter
          ? parsedListjobs.filter(
              (job) =>
              Listjobs.charAt(0).toLocaleLowerCase() ===
                name.toLocaleLowerCase()
            )
          : parsedListjobs;
      })
      .catch(console.error);
  };
  
  module.exports = { GetListjobs };