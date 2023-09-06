import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import WeatherComponent from "./WeatherComponent";
import { Icon } from "leaflet";

// create custom icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  
  iconSize: [38, 38] 
});


// markers
const markers = [
  {
    geocode: [28.6139, 77.2090] // Delhi
   
  },
  {
    geocode: [26.263863, 73.008957] // Jodhpur 
   
  },
  {
    geocode: [18.987807 , 72.836447] // Mumbai
   
  },
  {
    geocode: [12.9716, 77.5946] // Bangalore
    
  },
  {
    geocode: [11.0168, 76.9558] // Coimbatore
    
  },
  {
    geocode: [13.0827, 80.2707] // Chennai
    
  },
  {
    geocode: [17.3850, 78.4867] // Hyderabad
    
  },
  {
    geocode: [21.2514, 81.6296] // Raipur
    
  },
  {
    geocode: [17.6868, 83.2185] // Vishakhapatnam
    
  },
  {
    geocode: [21.1458, 79.0882] // Nagpur
   
  },
  {
    geocode: [22.5726, 88.3639] // Kolkata
   
  },
  {
    geocode: [26.8467, 80.9462] // Lucknow
   
  },
  {
    geocode: [25.5941, 85.1376] // Patna
    
  }
];

export default function App() {
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5}>
      {/* OPEN STREET MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    

      
        {/* Mapping through the markers */}
        {markers.map((marker, index) => (
  <Marker key={index} position={marker.geocode} icon={customIcon}>
    <Popup>
      {marker.popUp}
      <WeatherComponent coordinates={marker.geocode} />
    </Popup>
  </Marker>
))}


    </MapContainer>
  );
}

