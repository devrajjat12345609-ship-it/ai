async function generateVideo() {
  const text = document.getElementById("textInput").value;
  const voice = document.getElementById("voice").value;
  const style = document.getElementById("videoStyle").value;
  const status = document.getElementById("status");
  const video = document.getElementById("outputVideo");

  if (!text.trim()) {
    alert("Please enter text");
    return;
  }

  status.innerText = "Generating video... Please wait";
  video.src = "";

  /*
    REAL LOGIC USED BY AI VIDEO TOOLS
    --------------------------------
    1. Text → Script processing
    2. Text → AI voice (TTS)
    3. Text → Visual scenes / clips
    4. Background music added
    5. Everything merged into MP4
  */

  try {
    const response = await fetch("https://YOUR_BACKEND_API/generate-video", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: text,
        voice: voice,
        style: style
      })
    });

    const result = await response.json();

    // Backend returns final video URL
    video.src = result.videoUrl;
    video.play();
    status.innerText = "Video ready ✅";

  } catch (error) {
    console.error(error);
    status.innerText = "Error generating video ❌";
  }
}
