var base = 'http://clicktime.herokuapp.com:80/rooms/';
var roomName = 'out-draw-me';    // Replace this with your own room name

var socket = io.connect(base + roomName);
var TIME_OUT = 500; //Time_out warning at 500

/**
 * These are the events that the websocket server will emit
 *
 * When sending messages, make sure the type is set to 'message', or other clients won't receive your data
 * (e.g. socket.emit('message', { ... }); )
 */
socket.on('welcome', function () {
    // Connection is established, start using the socket
    start_stage();
});
function start_stage() {
    var context = $('#gameCanvas');
    context[0].getContext('2d');
    // context = document.getElementById('gameCanvas').getContext('2d');
    context.moveTo(0,0);
    context.lineTo(200,100);
    context.stroke();
    // var canvasDiv = document.getElementById('canvasDiv');
    // canvas = document.createElement('canvas');
    // canvas.setAttribute('width', canvasWidth);
    // canvas.setAttribute('height', canvasHeight);
    // canvas.setAttribute('id', 'canvas');
    // canvasDiv.appendChild(canvas);
    // if(typeof G_vmlCanvasManager != 'undefined') {
    // 	canvas = G_vmlCanvasManager.initElement(canvas);
    // }
    // context = canvas.getContext("2d");
    // }
}
// returns the mouse coordinates as a two element list
var mouse_coords = [0,0]
$(document).mousemove(function(e){
    mouse_coords = [e.pageX, e.pageY];
});
function getMouseCoords(){
    return mouse_coords;
}
var get_circle = function(radius){
    mouse_x = getMouseCoords()[0];
    mouse_y = getMouseCoords()[1];
    return {
        'radius': radius,
        'x': mouse_x,
        'y': mouse_y,
        'follow_mouse': true,
        'draw': function() {
            draw_circle(this.x,this.y,this.radius);
        },
        'move': function(x,y){
            if(this.follow_mouse){
                this.x = getMouseCoords()[0];
                this.y = getMouseCoords()[0];
            }
            else{
                this.x = x;
                this.y = y;
            }
        }
    }
}
function draw_circle(x, y, radius){
    var $circle = get_circle(3);
    get_circle

}
function cur_time(){
    var d = new Date();
    var time = d.getTime();

}
// line grabbing helper for write_debug. Grabs the text and returns the last three liness
function line_grab(){

}
function write_debug(string){
    var debug_box = document.getElementById("displayMessages");
    // var debug_text = debug_box.innerHtml.substring(debug_box.innerHtml)
    console.log(string);
}
//the main game loop of the engine
function game_loop(){
    while (time_since_check() < TIMEOUT){

    }
}
// TODO calculate time_passed
// Calculates the time since the last heartbeat emitted
function time_since_check(){

}
socket.on('message', function (data) {
    // The 'message' event is emitted whenever another client sends a message
    // Messages are automatically broadcasted to everyone in the room
    socket.emit('message', 'this is a response message!');
});

socket.on('heartbeat', function () {
    // You can listen on this event to make sure your connection is receiving events correctly
    // The server will emit a heartbeat every 30 seconds to all connected clients

});

socket.on('error', function (err) {
    // Sometimes things go wrong!
    var type = err.type;    // This is the type of error that occurred
    var message = err.message;    // This is a friendly message that should describe the error
});
