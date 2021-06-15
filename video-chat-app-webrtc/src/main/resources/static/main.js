const selfView = document.querySelector('#selfView');
const audioSelect = document.querySelector('select#audioSource');
const videoSelect = document.querySelector('select#videoSource');


async function getDevices() {
     const mediaDevices = await navigator.mediaDevices.enumerateDevices();

     mediaDevices.forEach(device => {
          const option = document.createElement('option');
          option.value = device.deviceId;
          option.text = device.label;

          if (device.kind === 'videoinput') {
              videoSelect.appendChild(option);
          } else if (device.kind === 'audioinput') {
              audioSelect.appendChild(option);
          }
     });
}

async function start() {
    if (window.stream) {
        window.stream.getTracks().forEach(track => track.stop());
    }

    const audioSource = audioSelect.value;
    const videoSource = videoSelect.value;
    const constraints = {
        audio: { deviceId: audioSource },
        video: { deviceId: videoSource }
    }

    const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    window.stream = mediaStream;
    selfView.srcObject = mediaStream;

};

audioSelect.onchange = start;
videoSelect.onchange = start;

getDevices();
start();