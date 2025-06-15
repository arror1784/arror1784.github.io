# 자기이력 홈페이지 

- **이름**: 전승환
- **학교**: 한남대학교
- **학과**: 컴퓨터공학과 25학번


* Github Repository 주소 : https://github.com/arror1784/arror1784.github.io
* 홈페이지 주소 : https://arror1784.github.io/

## 홈페이지 설명

전승환의 간략한 이력서 정보를 확인할 수 있습니다.<br/>
아래 정보들을 확인할수 있습니다.
* About Me 
    - 간단한 자기소개를 확인 할 수 있습니다.
* Skills 
    - 사용할 수 있는 스킬들을 표시하고 있습니다.
    - 각 스킬들의 숙련도를 4단계로 구분하여 표시하고 있습니다.
* Projects 
    - 진행했던 프로젝트들을 표시하고 있습니다.
    - 프로젝트별 사진과 간단 설명, 사용한 스킬에 대한 정보를 알려줍니다.
* 희망 직무  
    - 앞으로 하고 싶은 직무에 대한 설명이 있습니다.
    - 현재의 직무와 미래의 직무로 나누어서 설명하고 있습니다.


## 추가 기능

### 1. 깃헙 및 링크드인 연결
왼쪽 사이드 바에서 깃헙과 린크드인 아이콘 클릭하면 개인 깃헙과 링크드인 페이지로 이동합니다.

* 관련 코드
    ```html
    // index.html - 45~48
    <div class="social">
        <img class="githubIcon socialIcon btn" src="icons/github_white.png"/>
        <img class="linkedinIcon socialIcon btn" src="icons/linkedin.png"/>
    </div>
    ```
    div 태그 안에 img태크를 넣고 각 깃헙과 링크드인 아이콘 이미지 소스를 지정해줌<br/>
    각 img태그에 클래스 ((소셜이름Icon) socialIcon btn)를 넣어줌 <br/>
    * (소셜이름Icon) : 클릭 이벤트 연결과 화면이동을 위한 클래스
        ```javascript
        // js/sidebar.js -2~11

        const githubIcon = document.querySelector(".githubIcon")
        const linkedinIcon = document.querySelector(".linkedinIcon")

        githubIcon.onclick = () =>{
            location.href = "https://github.com/arror1784"
        }

        linkedinIcon.onclick = () =>{
            location.href = "https://www.linkedin.com/in/jsh-blue/"
        }
        ```
        github, linkedinIcon 클래스를 가진 노드를 찾아서 클릭시 창 이동
    * socialIcon : 화면 디자인을 위한 클래스
        ```css 
        // css/side.css - 101~105
        
        .socialIcon {
            height: 5vh;

            object-fit: cover;
        }
        ```
    * btn : 버튼처럼 마우스 올렸을때 투명도 처리를 위한 클래스
        ```javascript
            // js/btn.js - 2~13
            const btns = document.querySelectorAll(".btn")
            btns.forEach((v)=>{
                v.onmouseenter = () => {
                    v.style.opacity = "70%"
                    v.style.cursor = "pointer"
                }
                v.onmouseleave = () => {
                    v.style.opacity = "100%"
                    v.style.cursor = "default"
                }
            })
        ```
        btn 클래스를 가진 노드들을 찾아서 마우스를 올리면 투명도 설정과 마우스 포인터를 pointer로 변경

### 2. About Me 
body의 첫 부분으로 간단한 소개에 대한 정보를 표시합니다.
내부적으로 마크다운 파일인 AboutMe.md 을 html에서 읽어 마크다운 형식으로 화면에 그려줍니다.

* 관련 코드
    ```html
    // index.html - 18
    <script type="module" src="https://md-block.verou.me/md-block.js"></script>

    // index.html - 53~63
        <div class="bodyContainer">
            <div class="bodyTitle">
                About Me
            </div>
            <hr class="lineHR"/>
            <div class="abouMeContainer">
               <md-block src="./AboutMe.md" style="">
                    `AboutMe.md` was *not* found
                </md-block>
            </div>
        </div>
    ```
    line 18 스크립트 태그로 마크다운 태그를 사용하기 위한 외부 스크립트 모듈을 불러옴<br/>
    \<div> 태그들로 화면을 그린뒤 \<md-block> 태그를 이용하여 마크다운을 표시 <br/>
    ./AboutMe.md 파일 작성우 \<md-block> 태그세 src에 "./AboutMe.md" 경로 입력

    ```text
    // AboutMe.md

    안녕하세요!<br>
    언제나 새로운 길을 찾는 개발자입니다!

    - **이름**: 전승환
    - **학교**: 한남대학교
    - **학과**: 컴퓨터공학과 25학번
    - **관심 분야**: 임베디드 소프트웨어 개발, PM

    ### 보유 자격증
    - 정보처리기능사
    - 전자캐드기능사
    - ISTQB 자격증

    ### 연락하기
    - 이메일: arror1784<hi>@gmail.com
    - GitHub: github.com/arror1784
    - likedin: linkedin.com/in/jsh-blue 
    ```

### 3. 프로젝트 설명 파일 다운로드
한끼콕 프로젝트 클릭하면 한끼콕 프로젝트 설명 PDF파일을 다운받을 수 있습니다.

* 관련 코드
    ```javascript
    // js/projectList.js - 2~16
    const projectList = [
    {
        id: "hankkiCok",
        name: "한끼콕",
        imageSrc: "images/hankkiCok.png",
        explain: [
            "식재료관리와 AI 사용자 맞춤형 레시피 제공 서비스",
            "외부 동아리인 멋쟁이 사자처럼에서 진행한 아이디어톤 출품작",
        ],
        skillList: [
            "figma",
        ],
        type: "download",
        link: "file/한끼콕.pdf",
    }
    ```
    projectList에 한끼콕에 대한 정보를 추가하고 type을 "download", link에 "file/한끼콕.pdf" 다운로드 받을 파일 경로를 추가해줍니다.

    ```javascript
    // js/project.js - 2
    import projectList from "./projectList.js"

    // js/project.js - 11
    const projectMainContainer = document.querySelector(".projectMainContainer")

    // js/project.js - 32~50
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
    ```
    projectMainContainer 클래스를 가진 노드를 찾아 projectList[page]을 이용한 화면을 그려줍니다.</br>
    만약 projectMainContainer 를 클릭하면 코드를 실행합니다.</br>
    projectList[page].type이 download라면 projectList[page].link 와 가상으로 만든 \<a>를 이용해 파일을 다운로드합니다.</br>
    가상으로 만든 \<a> 태그는 삭제합니다.

### 4. 프로젝트 깃헙/관련 홈페이지 이동
고양이와수프, Azure Kinect DK 모션 트래킹, 치의료용 3D프린터 프로젝트를 클릭하면 프로젝트 깃헙 주소 혹은 관련 홈페이지로 이동할 수 있습니다.

* 관련 코드
    ```javascript
    // js/projectList.js - 17~58
    {
        id: "catAndSoup",
        name: "고양이와 수프",
        imageSrc: "images/catAndSoup.png",
        explain: [
            "고양이와 수프를 베이스로 한 CUI 게임",
            "프로그래밍 실습 과제로 진행한 프로그램",
        ],
        skillList: [
            "c",
        ],
        type: "link",
        link: "https://github.com/arror1784/catAndSoup",
    },
    {
        id: "c-10",
        name: "치의료용 3D프린터",
        imageSrc: "images/c10.png",
        explain: [
            "레진을 이용해 크라운, 브리시 등 보철물을 제작하는 3D 프린터 ",
            "내부 펌웨어 소프트웨어 개발 담당",
        ],
        skillList: [
            "cpp","stm32", "typescript", "react", "raspberryPi"
        ],
        type: "link",
        link: "https://hix.co.kr/",
    },
    {
        id: "motionTracking",
        name: "Azure Kinect DK 모션 트래킹 ",
        imageSrc: "images/motionTraking.png",
        explain: [
            "Azure Kinect DK 제품을 이용한 사람 동작 인식 ",
            "사람의 동작을 인식해 스켈레톤 데이터를 뽑을 수 있다.",
        ],
        skillList: [
            "python",
        ],
        type: "link",
        link: "https://github.com/arror1784/motion-image-capture",
    },
    ```
    projectList에 프로젝트들에 대한 정보를 추가하고 type을 "link", link에 이동할 주소에 대한 정보를 추가해줍니다.

    ```javascript
    // js/project.js - 2
    import projectList from "./projectList.js"
    
    // js/project.js - 11
    const projectMainContainer = document.querySelector(".projectMainContainer")

    // js/project.js - 32~50
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
    ```
    projectMainContainer 클래스를 가진 노드를 찾아 projectList[page]을 이용한 화면을 그려줍니다.</br>
    만약 projectMainContainer 를 클릭하면 코드를 실행합니다.</br>
    projectList[page].type이 link라면 projectList[page].link 의 주소로 이동합니다.

### 5. 프로젝트 영상 표출
라인 트레이서 프로젝트 클릭시 관련 영상을 모달창으로 띄어줍니다.
영상 외부 클릭시 모달창이 닫힙니다.

* 관련 코드
    ```javascript
    // js/projectList.js - 59~72
    {
        id: "lineTracer",
        name: "라인 트레이서",
        imageSrc: "images/lineTracerImg.jpg",
        explain: [
            "담배연기 센서에 따라 바닥 선 따라서 자율 주행하는 로봇 개발",
            "내부 펌웨어 개발 담당",
        ],
        skillList: [
            "c"
        ],
        type: "video",
        link: "video/lineTracerVideo.mp4",
    },
    ```
    projectList에 라인트레이서 프로젝트에 대한 정보를 추가하고 type을 video, link엔 표출할 영상 주소를 넣습니다.

    ```javascript
    // js/project.js - 2
    import projectList from "./projectList.js"
    
    // js/project.js - 5
    import {videoModalOpen} from "./videoModal.js"

    // js/project.js - 11
    const projectMainContainer = document.querySelector(".projectMainContainer")

    // js/project.js - 32~50
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
    ```
    projectMainContainer 클래스를 가진 노드를 찾아 projectList[page]을 이용한 화면을 그려줍니다.</br>
    만약 projectMainContainer 를 클릭하면 코드를 실행합니다.</br>
    projectList[page].type이 video라면 projectList[page].link를 인수로 videoModalOpen 함수를 실행합니다.

    ```javascript
    // js/videoModal.js - 1 ~ 23
    const videoModalClose = () => {
        const videoModal = document.querySelector(".videoModal")
        videoModal.style.display="none";
    }

    const videoModalOpen = ( src ) =>{

        const videoModal = document.querySelector(".videoModal")
        videoModal.style.display="flex";

        const videoModalBody = document.querySelector(".videoModalBody")

        videoModalBody.innerHTML = `<video classname="vieoModalVideo" src="${src}" controls muted autoplay></video>`

    }

    const videoModal = document.querySelector(".videoModal")

    videoModal.addEventListener("click", function(e) {
        videoModalClose()
    })

    export {videoModalClose, videoModalOpen};
    ```
    * videoModalClose 함수
        videoModal 클래스를 가진 노드를 찾아 display 를 none으로 만들어 화면에 안보이게 만듭니다.
    * videoModalOpen 함수
        videoModal 클래스를 가진 노드를 찾아 display 를 flex로 만들어 화면에 보이게 만듭니다.
        videoModalBody 클래스를 가진 노트를 차아 \<img> 태그를 만들고 src 비디오 경로를 넣어줍니다.
    
    이후 vieoModal 클래스를 가진 노드에 클릭 이벤트를 넣어 클릭시 videoModalClose 함수를 실행합니다.

    외부에서 videoModalClose, videoModalOpen 함수들을 사용가능하게 export 합니다.

    ```html
    // index.html - 145~149
        <div class="videoModal">
            <div class="videoModalBody">
                <!-- <video></video> -->
            </div>
        </div>
    ```
    
    ```html
    // index.html - 145~149
        <div class="videoModal">
            <div class="videoModalBody">
                <!-- <video></video> -->
            </div>
        </div>
    ```
    ```css
    // css/modal.css - 1~26
    .videoModal{
        position: fixed;
        display:none;
        
        text-align: center;

        justify-content: center;
        top: 0;
        left: 0;

        width:100%;
        height:100%;

        background-color: rgba(0,0,0,0.4);

    }
    .videoModalBody{
        position:absolute;
        top:50%;

        padding:40px;  

        text-align: center;

        transform:translateY(-50%);
    }
    ```