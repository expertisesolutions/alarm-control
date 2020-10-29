

/*  
import {
  getAuth,
  createConnection,
  subscribeEntities,
  ERR_HASS_HOST_REQUIRED,
} from "home-assistant-js-websocket";
 
async function connect() {
  let auth;
  try {
    // Try to pick up authentication after user logs in
    auth = await getAuth();
  } catch (err) {
    if (err === ERR_HASS_HOST_REQUIRED) {
      const hassUrl = prompt(
        "What host to connect to?",
        "http://localhost:8123"
      );
      // Redirect user to log in on their instance
      auth = await getAuth({ hassUrl });
    } else {
      alert(`Unknown error: ${err}`);
      return;
    }
  }
  const connection = await createConnection({ auth });
  subscribeEntities(connection, (ent) => console.log(ent));
}
 
connect();

*/

export default configHass({
  protocol: 'ws',
  host: '192.168.0.29/',
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
