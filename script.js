document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const progressBar = document.getElementById("progress-bar");
    const currentTimeDisplay = document.getElementById("current-time");
    const durationDisplay = document.getElementById("duration");
    const volumeBtn = document.getElementById("volume-btn");
    const volumeBar = document.getElementById("volume-bar");

    // Play/Pause toggle
    playPauseBtn.addEventListener("click", () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = "⏸";
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = "▶";
        }
    });

    // Update progress bar and timestamps
    audioPlayer.addEventListener("timeupdate", () => {
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;
        progressBar.value = (currentTime / duration) * 100;

        currentTimeDisplay.textContent = formatTime(currentTime);
        durationDisplay.textContent = formatTime(duration);

    });

    // Seek functionality
    progressBar.addEventListener("input", () => {
        const duration = audioPlayer.duration;
        audioPlayer.currentTime = (progressBar.value / 100) * duration;
    });

    // Volume control
    volumeBtn.addEventListener("click", () => {
        volumeBar.style.display = volumeBar.style.display === "none" ? "block" : "none";
    });

    volumeBar.addEventListener("input", () => {
        audioPlayer.volume = volumeBar.value / 100;
    });

    // Format time helper
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60) || 0;
        const secs = Math.floor(seconds % 60) || 0;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    }
});

