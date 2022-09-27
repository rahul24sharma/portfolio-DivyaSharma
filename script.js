var typed = new Typed(".typing",{
    strings:["","Front End Developer", "Back End Developer","Database Administrator"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalnavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalnavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
          {
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.remove("back-section");
            } 
              for(let j = 0; j<totalnavList; j++)
              {
                  if(navList[j].querySelector("a").classList.contains("active"))
                  {
                      allSection[j].classList.add("back-section");
                  }
                  navList[j].querySelector("a").classList.remove("active");
              }
          this.classList.add("active")
          showSection(this);
          if(window.innerWidth < 1200)
          {
              asideSectionTogglerBtn();
          }
          })
      }

      function showSection(element)
      {
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.remove("active");
          }
          const target = element.getAttribute("href").split('#')[1];
          document.querySelector("#" + target).classList.add("active")
      }
    function updateNav(element)
    {
        for(let i=0; i<totalnavList;i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split('#')[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active"); 
            }
        }
    }
      document.querySelector(".hire-me").addEventListener("click",function()
      {
          showSection(this);
          updateNav(this);
      })
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click",()=>
            {
                    asideSectionTogglerBtn()
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0;i<totalSection;i++)
                {
                    allSection[i].classList.toggle("open")
                }
            }





            /*LINK ACTIVE WORK*/
const linkWork = document.querySelectorAll('.work_item')
function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l=>l.addEventListener("click",activeWork))

/*Work Popup*/
document.addEventListener("click",(e) =>{
    if(e.target.classList.contains("work_button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio_popup").classList.toggle("open");
}
document.querySelector(".portfolio_popup-close").addEventListener("click",togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp_thumbmail img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}