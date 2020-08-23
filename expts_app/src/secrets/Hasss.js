hass({
  protocol: 'ws',
  host: 'localhost',
  port: 8123,
  path: '/api/websocket',
 
  // Must be set if HA expects authentication:
  token: null,
 
  // Used to serialize outgoing messages: 
  messageSerializer: outgoingMessage => JSON.stringify(outgoingMessage),
 
  // Used to parse incoming messages. Receives the entire Websocket message object:
  messageParser: incomingMessage => JSON.parse(incomingMessage.data),
 
  // Should return a WebSocket instance
  ws (opts) {
    return new WebSocket(`${opts.protocol}://${opts.host}:${opts.port}${opts.path}`)
  }
})
