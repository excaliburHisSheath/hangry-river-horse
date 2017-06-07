// Initialize Vue.js with some info I guess.
let app = new Vue({
    el: '#app',
    data: {
        id: null,
    }
});

// Initialize WebSocket connetion without waiting for the DOM to
// be ready. I don't know if that's actually a good idea, but
// whatevs.
let socket = new WebSocket('ws://localhost:6767/api/client-stream');
socket.onmessage = function(event) {
    console.log('socket event: ', event);
};

socket.onerror = function(error) {
    console.error(error);
};

socket.onclose = function() {
    // TODO: Re-open the connection, if possible.
    console.log('Socket closed I guess');
};

// Register the player with the backend.
let registrationRequest = new XMLHttpRequest();
registrationRequest.addEventListener('load', () => {
    // TODO: Check the status code and handle any errors.
    let payload = JSON.parse(registrationRequest.response);
    console.log('Registration result:', payload);

    // Update the app data.
    app.id = payload.id;
});
registrationRequest.open('GET', 'api/register-player');
registrationRequest.send();

// Callback for "Feed Me" button. Sends a message to the backend notifying that
// a hippo has been fed.
function feedMe() {
}
