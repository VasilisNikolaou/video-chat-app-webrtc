# Video Chat App WebRTC
[WebRTC](https://webrtc.org/) allows you to add real-time communication capabilities to your application. It supports video, audio and binary data to be sent between peers. WebRTC is a powerful technology but it's not all P2P, it needs a form of discovery before media starting to flow between peers called Signaling. The WebRTC isn't bound to a specific signaling mechanism which is why it's quite flexible technology. Affected by Google Meet I've built a video chat communication between 2 peers (network topology) following the _**Perfect Negotiation design pattern**_ ([Perfect Negotiation](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Perfect_negotiation)).

# What I Used
* Spring boot (as the signaling server with the help of websocket protocol)
* JavaScript
* HTML
