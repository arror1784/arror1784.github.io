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