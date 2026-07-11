import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/disasterMap.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
});

function DisasterMap() {

    const disasters = [

        {
            id:1,
            name:"Flood",
            location:"Chennai",
            position:[13.0827,80.2707]
        },

        {
            id:2,
            name:"Cyclone",
            location:"Odisha",
            position:[20.9517,85.0985]
        },

        {
            id:3,
            name:"Earthquake",
            location:"Delhi",
            position:[28.6139,77.2090]
        }

    ];

    return(

        <div className="map-card">

            <h2>Live Disaster Map</h2>

            <MapContainer

                center={[22.9734,78.6569]}

                zoom={5}

                scrollWheelZoom={true}

                style={{

                    height:"500px",

                    width:"100%"

                }}

            >

                <TileLayer
                    attribution="OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {

                    disasters.map(item=>(

                        <Marker

                            key={item.id}

                            position={item.position}

                        >

                            <Popup>

                                <strong>

                                    {item.name}

                                </strong>

                                <br/>

                                {item.location}

                            </Popup>

                        </Marker>

                    ))

                }

            </MapContainer>

        </div>

    );

}

export default DisasterMap;