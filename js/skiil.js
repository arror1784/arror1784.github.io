import skillList from "./skillList.js"

const skillContainer = document.querySelector(".skillContainer")

const skillTag = skillList.map((v) => {

    let starTags = ''

    for (let i = 0; i < v.level; i++) {
        starTags += `<img class="skillStarImg" src="icons/star_fill.png">`
    }
    for (let i = 0; i < 3 - v.level; i++) {
        starTags += `<img class="skillStarImg" src="icons/star_empty.png">`
    }
    
    return `
        <div class="skill" id="${v.id}">
            <img class="skillImg" src="${v.imageSrc}">
            <div class="skillTitle">
                ${v.name}
            </div>
            <div class="skillStar">
                ${starTags}
            </div>
        </div>
    `
}).join('')

skillContainer.innerHTML = skillTag
