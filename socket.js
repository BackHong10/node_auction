
const SocketIO = require('socket.io')

module.exports = (server, app) => {
    const io = SocketIO(server, { path: '/socket.io' });
    app.set('io', io);
    io.on('connection', (socket) => { // 웹 소켓 연결 시
    const req = socket.request;
    const {referer} = socket.request.headers;
    console.log(referer)
    const roomId = new URL(referer).pathname.split('/')
    socket.join(roomId[roomId.length-1]);
    socket.on('disconnect', () => {
      socket.leave(roomId);
    });
  });


}