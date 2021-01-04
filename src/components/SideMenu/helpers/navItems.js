import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ShowChartIcon from "@material-ui/icons/ShowChart";

const navItems = [
  {
    id: "position-sensors",
    label: "Position Sensors",
    items: [
      {
        label: "Movement Data [Equalizer]",
        Icon: AddIcon,
        to: "/position-sensors/equalizer-view",
      },
      {
        label: "Movement Data [Table]",
        Icon: RemoveIcon,
        to: "/position-sensors/table-view",
      },
      {
        label: "Geolocalization",
        Icon: ShowChartIcon,
        to: "/position-sensors/geolocalization",
      },
    ],
  },
  {
    id: "streams",
    label: "STREAMS",
    items: [
      { 
        label: "Local streams playback",
        Icon: AddIcon,
        to: '/streams/local-streams-playback'
      },
      { 
        label: "Remote streams playback", 
        Icon: AddIcon,
        to: '/streams/remote-streams-playback'
      },
      { 
        label: "Media streaming test", 
        Icon: AddIcon,
        to: '/streams/media-streaming-test'
      },
      { 
        label: "Data streaming test", 
        Icon: AddIcon,
        to: '/streams/data-streaming-test'
      },
    ],
  },
  {
    id: "networking",
    label: "NETWORKING",
    items: [
      { 
        label: "WebRTC connection test", 
        Icon: AddIcon,
        to: '/networking/connection-test'
      },
      { label: "TCP/IP stream test", 
        Icon: ShowChartIcon,
        to: '/networking/tcpip-stream-test'
      },
      { 
        label: "STCP/IP stream test", 
        Icon: ShowChartIcon,
        to: '/networking/sctpip-stream-test'
      },
    ],
  },
];

export default navItems