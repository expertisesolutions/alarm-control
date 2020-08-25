export default configHass({
  protocol: 'ws',
  host: '192.168.1.110',
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



/*

{"attributes": {"entity_picture": "/api/media_player_proxy/media_player.spotify_ricardo_campos?token=3b592560938a8aac69d2a98bd9fefbae74be4ec84dfb86bb59fbcdaa7ee79347&cache=5c37f67a2afffe21",
 "friendly_name": "Spotify Ricardo Campos", "icon": "mdi:spotify", 
 "media_album_name": "Audioslave", "media_artist": "Audioslave", 
 "media_content_id": "spotify:track:3YuaBvuZqcwN3CEAyyoaei", 
 "media_content_type": "music", "media_duration": 293.96, 
 "media_position": 133.534, "media_position_updated_at": 
 "2020-08-24T20:10:27.065000+00:00", "media_title": "Like a Stone", 
 "media_track": 5, "shuffle": false, "source": "Web Player (Chrome)", 
 "supported_features": 0, "volume_level": 0.54}, 
 "context": {"id": "e0002ae5e64511ea9a4d3dda6ff305c4", 
 "parent_id": null, "user_id": null}, "entity_id": "media_player.spotify_ricardo_campos", 
 "last_changed": "2020-08-24T20:10:37.346114+00:00", 
 "last_updated": "2020-08-24T20:10:37.346114+00:00", "state": "paused"}, 
 
 {"attributes": {"current": 0, "friendly_name": "musica", 
 "id": "1598299442595", "last_triggered": "2020-08-24T20:08:53.489391+00:00", 
 "mode": "single"}, "context": {"id": "a218e40fe64511eaaa60d755d3bba19b", 
 "parent_id": "a218cce7e64511eaaf06bf05cd55b821", "user_id": null}, 
 "entity_id": "automation.musica", "last_changed": "2020-08-24T20:08:20.946914+00:00", 
 "last_updated": "2020-08-24T20:08:53.492022+00:00", "state": "on"}, 
 
 
 {"attributes": {"current": 0, "friendly_name": "teste_play", "id": "1598299700868", 
 "last_triggered": "2020-08-24T20:12:58.815038+00:00", "mode": "single"}, 
 "context": {"id": "34529d25e64611ea8cdc51fc559e2f11", 
 "parent_id": "345282dae64611ea91adf1fa3376e7a8", 
 "user_id": null}, "entity_id": "automation.teste_play", 
 "last_changed": "2020-08-24T20:08:20.947132+00:00", 
 "last_updated": "2020-08-24T20:12:58.822470+00:00", 
 "state": "on"}]

*/

 /*



home_spotify_controls:
    name: Spotify Controls
    control: hidden
    entities:
      - input_select.spotify_playlist
      - input_select.spotify_source
      - script.spotify_music
      - input_number.spotify_volume
      - input_boolean.spotify_shuffle


homeassistant:
  customize:
    script.spotify_music:
      friendly_name: 'Play'
      icon: mdi:play

sensor:
  - platform: template
    sensors:
      spotify_volume:
        friendly_name: "Spotify Volume"
        value_template: "{{ states.media_player.spotify.attributes.volume_level }}"
  - platform: template
    sensors:
      spotify_shuffle:
        friendly_name: "Spotify Shuffle"
        value_template: "{{ states.media_player.spotify.attributes.shuffle }}"
  - platform: template
    sensors:
      spotify_source:
        friendly_name: "Spotify Source"
        value_template: "{{ states.media_player.spotify.attributes.source }}"

input_number:
  spotify_volume:
    name: Volume
    icon: mdi:volume-high
    initial: 100
    min: 0
    max: 100
    step: 1

input_select:
  spotify_playlist:
    name: 'Playlist:'
    options:
      - Lista1
      - Lista2
      - Lista3
      - Lista4
    icon: mdi:spotify
  spotify_source:
    name: 'Source:'
    options:
      - Web Player (Chrome)
      - Mi Phone
      - DESKTOP-922IFR3
    initial: Web Player (Chrome)
    icon: mdi:speaker-wireless

input_boolean:
  spotify_shuffle:
    name: Shuffle
    icon: mdi:shuffle-variant



automation:
  - alias: 'Spotify Volume (Set)'
    trigger:
      platform: state
      entity_id: input_number.spotify_volume
    action:
      service: media_player.volume_set
      data_template:
        entity_id: media_player.spotify
        volume_level: '{{  states.input_number.spotify_volume.state | int / 100  }}'
  
  - alias: 'Spotify Volume (Sync)'
    trigger:
      - platform: homeassistant
        event: start
      - platform: state
        entity_id: sensor.spotify_volume
    action:
      - delay:
          seconds: 5
      - service: input_number.set_value
        data_template:
          entity_id: input_number.spotify_volume
          value: '{{  states.sensor.spotify_volume.state | float | round(2) * 100  }}'
  
  - alias: 'Spotify Shuffle (Set)'
    trigger:
      platform: state
      entity_id: input_boolean.spotify_shuffle
    action:
      service: media_player.shuffle_set
      data_template:
        entity_id: media_player.spotify
        shuffle: >
          {% if is_state('input_boolean.spotify_shuffle', 'off') %} 
          false
          {% elif is_state('input_boolean.spotify_shuffle', 'on') %}
          true
          {% endif %}
  
  - alias: 'Spotify Shuffle (Sync)'
    trigger:
      - platform: homeassistant
        event: start
      - platform: state
        entity_id: sensor.spotify_shuffle
    action:
      - delay:
          seconds: 5
      - service_template: >
          {% if states.sensor.spotify_shuffle.state == 'False' %}
            input_boolean.turn_off
          {% else %}
            input_boolean.turn_on
          {% endif %}
        data:
          entity_id: input_boolean.spotify_shuffle

  - alias: 'Spotify Source (Sync)'
    trigger:
      - platform: homeassistant
        event: start
      - platform: state
        entity_id: sensor.spotify_source
    action:
      service: input_select.select_option
      entity_id: input_select.spotify_source
      data_template:
        option: '{{  states.sensor.spotify_source.state  }}'

 */