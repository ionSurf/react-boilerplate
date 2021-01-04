import { HomePage, PositionSensorsPage, LocalStreamTestsPage, RemoteStreamTestsPage } from '../pages'

export const routes = [
  {
    id: 'homepage',
    title: "Homepage",
    //Icon: AddIcon,
    uri: "/",
    view: <HomePage />
  },
  {
    id: 'movement-data-equalizer',
    title: "Movement Data [Equalizer]",
    //Icon: AddIcon,
    uri: "/position-sensors/equalizer-view",
    view: <PositionSensorsPage />
  },
  {
    id: 'movement-data-table',
    title: "Movement Data [Table]",
    //Icon: RemoveIcon,
    uri: "/position-sensors/table-view",
    view: <PositionSensorsPage />
  },
  {
    id: 'geolocalization',
    title: "Geolocalization",
    //Icon: ShowChartIcon,
    uri: "/position-sensors/geolocalization",
    view: <PositionSensorsPage />
  },
  { 
    id: 'local-streams-playback',
    title: "Local streams playback",
    //Icon: AddIcon,
    uri: '/streams/local-streams-playback',
    view: <LocalStreamTestsPage />
  },
  { 
    id: 'remote-streams-playback',
    title: "Remote streams playback", 
    //Icon: AddIcon,
    uri: '/streams/remote-streams-playback',
    view: <RemoteStreamTestsPage />
  },
  { 
    id: 'media-streaming-test',
    title: "Media streaming test", 
    //Icon: AddIcon,
    uri: '/streams/media-streaming-test',
    view: <HomePage />
  },
  { 
    id: 'data-streaming-test',
    title: "Data streaming test", 
    //Icon: AddIcon,
    uri: '/streams/data-streaming-test',
    view: <HomePage />
  },
  { 
    id: 'webrtc-connection-test',
    title: "WebRTC connection test", 
    //Icon: AddIcon,
    uri: '/networking/connection-test',
    view: <HomePage />
  },
  { 
    id: 'tcpip-stream-test',
    title: "TCP/IP stream test", 
    //Icon: ShowChartIcon,
    uri: '/networking/tcpip-stream-test',
    view: <HomePage />
  },
  { 
    id: 'stcpip-stream-test',
    title: "STCP/IP stream test", 
    //Icon: ShowChartIcon,
    uri: '/networking/sctpip-stream-test',
    view: <HomePage />
  },
]