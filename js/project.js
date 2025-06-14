import skillList from "./skillList.js"
import projectList from "./projectList.js"
import btn from "./btn.js"

import {videoModalOpen} from "./videoModal.js"

let page = 0

const drawProject = ()=>{

    const projectMainContainer = document.querySelector(".projectMainContainer")

    projectMainContainer.innerHTML = 
            `<div class="projectTitle">
                ${projectList[page].name}
            </div>
            <div class="projectImgContainer">
                <img class="projectImg" src="${projectList[page].imageSrc}" />
            </div>
            <div class="projectExplain">
                ${[...projectList[page].explain.map((v)=>
                    `<div>${v}</div>`)].join('')}
            </div>
            <div class="projectSkill">
                <div class="projectSkillIconContainer">
                    ${[...projectList[page].skillList.map((v)=>{
                        return `<img class="projectSkillIcon" src="${skillList.find((skill)=> skill.id === v).imageSrc}">`})].join("")
                    }
                </div>
            </div>
        `
    projectMainContainer.onclick = ()=>{
        switch (projectList[page].type) {
            case "link":
                location.href = projectList[page].link
                break;
            case "download":
                const element = document.createElement('a');
                element.setAttribute('href', projectList[page].link);
                element.setAttribute('download', projectList[page].link.split('/').reverse()[0]);
                element.click();
                document.body.removeChile(element);
                break;
            case "video":
                videoModalOpen(projectList[page].link)
                break;
            default:
                break;
        }
    }

    btn();
}

const projectPagesContainer = document.querySelector(".projectPagesContainer")
let pageTag = ''

for (let i = 0; i < projectList.length; i++) {
    pageTag += `
        <div class="projectPageIconContainer">
            <img class="projectPageIcon btn projectPageNumber" src="icons/${i === page ? 'squre_fill' : 'squre_empty'}.png">
        </div>`        
}
projectPagesContainer.innerHTML = pageTag

btn();
drawProject();

const pageLeftButton = document.querySelector(".projectPageLeftIcon")
const pageRightButton = document.querySelector(".projectPageRightIcon")
const projectPageNumberList = document.querySelectorAll(".projectPageNumber")

pageLeftButton.addEventListener("click", ()=>{

    projectPageNumberList[page].src = "icons/squre_empty.png"

    page--;
    if(page < 0)
        page = projectList.length - 1;

    projectPageNumberList[page].src = "icons/squre_fill.png"

    drawProject();
})

pageRightButton.addEventListener("click", ()=>{
    
    projectPageNumberList[page].src = "icons/squre_empty.png"

    page++;
    if(page > projectList.length - 1)
        page = 0;

    projectPageNumberList[page].src = "icons/squre_fill.png"

    drawProject();
})

projectPageNumberList.forEach((v, i) => {
    v.addEventListener("click",(e)=>{
        projectPageNumberList[page].src = "icons/squre_empty.png"

        page = i;

        projectPageNumberList[page].src = "icons/squre_fill.png"

        drawProject();
    })
})
