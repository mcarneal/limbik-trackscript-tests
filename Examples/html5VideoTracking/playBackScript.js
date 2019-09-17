window.addEventListener('DOMContentLoaded', function () {

    const player = document.querySelector('video')

    var bodyElement = document.querySelector('body')

    var startBtn = document.createElement('button')
    startBtn.setAttribute("id", "test-button")  
    startBtn.innerText = "Start Test"

    window.addEventListener('load', function(event) {
        bodyElement.appendChild(startBtn)
    });

    startBtn.addEventListener("click", function() {
        bodyElement.removeChild(startBtn)
        bodyElement.appendChild(playBtn)
    })

    
    var playBtn = document.createElement('button')
    playBtn.setAttribute("id", "play-button")
    playBtn.innerText = 'play'
    
    var pauseBtn = document.createElement('button')
    pauseBtn.setAttribute("id", "pause-button")
    pauseBtn.innerText = "pause"
    
    var jump25Btn = document.createElement('button')
    jump25Btn.setAttribute("id", "jump-25")
    jump25Btn.innerText = 'Jump to 25%'
    
    var jump50Btn = document.createElement('button')
    jump50Btn.setAttribute("id", "jump-50")
    jump50Btn.innerText = 'Jump to 50%'
    
    var jump75Btn = document.createElement('button')
    jump75Btn.setAttribute("id", "jump-75")
    jump75Btn.innerText = 'Jump to 75%'
    
    var muteBtn = document.createElement('button')
    muteBtn.setAttribute("id", "mute")
    muteBtn.innerText = 'mute'
    
    var doneMessage = document.createElement('h2')
    doneMessage.setAttribute("id", "done")
    doneMessage.innerText = 'Video Engagement Complete'
    
    startBtn.addEventListener("click", function() {
        bodyElement.removeChild(startBtn)
        bodyElement.appendChild(playBtn)
    })

    playBtn.addEventListener("click", function() {
        player.play()
        bodyElement.removeChild(playBtn)
        bodyElement.appendChild(pauseBtn)
    })

    pauseBtn.addEventListener("click", function() {
        player.pause()
        bodyElement.removeChild(pauseBtn)
        bodyElement.appendChild(muteBtn)
    })
    muteBtn.addEventListener("click", function() {
        player.muted = true
        player.play()
        bodyElement.removeChild(muteBtn)
        bodyElement.appendChild(jump25Btn)
    })

    jump25Btn.addEventListener("click", function() {
        player.currentTime = 35
        bodyElement.removeChild(jump25Btn)
        bodyElement.appendChild(jump50Btn)
    })

    jump50Btn.addEventListener("click", function() {
        player.currentTime = 65
        bodyElement.removeChild(jump50Btn)
        bodyElement.appendChild(jump75Btn)
    })

    jump75Btn.addEventListener("click", function() {
        player.currentTime = 1000
        bodyElement.removeChild(jump75Btn)
        bodyElement.appendChild(doneMessage)
    })
    
});