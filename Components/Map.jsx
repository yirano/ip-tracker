import React from 'react'
import L from 'leaflet'
import { Map as Leaflet, TileLayer, Marker, Popup } from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'

const Map = (props) => {
    const { position } = props
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    })

    L.Marker.prototype.options.icon = DefaultIcon

    return (
        <div>
            <Leaflet
                center={position}
                zoom={13}
                style={{ width: '100%', height: '900px' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={position} />

            </Leaflet>
        </div>
    )
}

export default Map
