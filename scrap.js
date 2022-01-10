
const scraper ={
    //url that you want to scrap it 
    url="https://wuzzuf.net/a/Software-Engineer---Internship-Jobs-in-Egypt",
    async scraper(browser){
      let page =await browser.newPage();

      await page.goto(this.url);
      await page.waitForSelector(" css-laomuu")
      console.log("page is loaded")


      const job = await page.evaluate(async ()=> {
          return document.querySelector("css-m604qf").textContent;
      });
      console.log({job});
    
    },


  
  
};


module.exports=scraper;

