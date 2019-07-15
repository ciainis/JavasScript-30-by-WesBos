const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const button = document.querySelector('.button');

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => console.error(err));
}

function paintToCanvas() {
  const height = video.videoHeight;
  const width = video.videoWidth;

  canvas.height = height;
  canvas.width = width;

  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');

  link.href = data;
  link.setAttribute('download', 'photo');
  link.innerHTML = `<img src="${data}" alt="photo" />`;
  strip.insertBefore(link, strip.firstChild);
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
button.addEventListener('click', takePhoto);
