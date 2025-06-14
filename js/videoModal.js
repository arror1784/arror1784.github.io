const videoModalClose = () => {
    const videoModal = document.querySelector(".videoModal")
    videoModal.style.display="none";
}

const videoModalOpen = ( src ) =>{

    const videoModal = document.querySelector(".videoModal")
    videoModal.style.display="flex";

    videoModal.addEventListener("click", function(e) {
        console.log(e.target.className, e.currentTarget.className)
        videoModalClose()
    })

    const videoModalBody = document.querySelector(".videoModalBody")

    videoModalBody.innerHTML = `<video classname="vieoModalVideo" src="${src}" controls muted autoplay></video>`

}

export {videoModalClose, videoModalOpen};