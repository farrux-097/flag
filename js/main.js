// console.log(countrys);


let elCountryList = document.querySelector(".countries-list")
let elSelect = document.querySelector(".country-select")
let elSearchInput = document.querySelector(".search-input")


function renderCountries(arr, list) {
    list.innerHTML = ""
    arr.forEach(value => {
        let elItem = document.createElement("li")
        let elImg = document.createElement("img")
        let elName = document.createElement("h2")
        let elCapital = document.createElement("p")
        let elPopulation = document.createElement("p")
        let elIdTag = document.createElement("span")

        let elItemBtnWrapper = document.createElement("div")
        let elItemLikeBtn = document.createElement("button")
        let elItemSaveBtn = document.createElement("button")
        let elItemMoreBtn = document.createElement("button")
        // let elItemLikeBtnImg = document.createElement("img")
        // let elItemLSaveBtnImg = document.createElement("img")
        // let elItemMoreBtnImg = document.createElement("img")
        


        
        elItem.className = " w-[350px] p-2 bg-blue-300 rounded-[10px]"
        

        elImg.src = value.flag
        elImg.width = "100%"
        elImg.height = "250"
        elImg.className = "w-[100%] h-[250px] rounded-[10px]"


        elName.textContent = "Country: " + value.name
        elCapital.textContent = "Capital: " + value.capital
        elPopulation.textContent = "Population: " + value.population
        elIdTag.textContent = value.id

        elItemBtnWrapper.className  = "flex items-center gap-5"
        elItemLikeBtn.innerHTML = `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`
        elItemLikeBtn.className = "p-2 bg-slate-500 rounded-[10px] "

        elItemSaveBtn.innerHTML = `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="blue" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z" fill="#080341"/>
</svg>`
        elItemSaveBtn.className = "p-2 bg-slate-500 rounded-[10px] "


        elItemMoreBtn.innerHTML = `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z" stroke="#292D32" stroke-width="1.5"/>
<path d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z" stroke="#292D32" stroke-width="1.5"/>
<path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" stroke="#292D32" stroke-width="1.5"/>
</svg>`
        elItemMoreBtn.className = "p-2 bg-slate-500 rounded-[10px]"


        list.append(elItem)
        elItem.append(elImg, elName, elCapital, elPopulation, elIdTag, elItemBtnWrapper)
        elItemBtnWrapper.append(elItemLikeBtn,elItemSaveBtn,elItemMoreBtn)


    });
}


renderCountries(countrys,elCountryList)


countrys.forEach(value =>{
    let elOption = document.createElement("option")
    elOption.innerHTML = `${value.name} - ${value.capital}`
    elOption.setAttribute("value", value.capital)
    elSelect.append(elOption)
    
})

elSelect.addEventListener("change", (evt) => {
    if(evt.target.value == "All"){
        renderCountries(countrys, elCountryList)
    }

    else{
        
        const selectedList = countrys.filter(item => item.capital == evt.target.value)
        renderCountries(selectedList, elCountryList)
    }
})



elSearchInput.addEventListener("keyup", (evt) =>{
    const searchValue = evt.target.value;
    if (Number(searchValue)){
        const searchedList = countrys.filter(item => String(item.population).includes(searchValue.trim()))
        renderCountries(searchedList, elCountryList)
    }

    else{
        const searchedList = countrys.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        renderCountries(searchedList,elCountryList)
    }
})