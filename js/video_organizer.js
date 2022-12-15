var vid = document.getElementById("mediaPlayer");
vid.onplay = function() {
    videoSendxAPIStatement("Play");
};

vid.onpause = function() {
    videoSendxAPIStatement("Pause");
};

vid.onended = function() {
    videoSendxAPIStatement("Completed");
};

vid.addEventListener("timeupdate", function() {
    timestamps.map((el, index) => {
        if(Math.round(this.currentTime) == el && !testIsOpen) {
            this.pause();
            buildTest(index);
        }
    });
});