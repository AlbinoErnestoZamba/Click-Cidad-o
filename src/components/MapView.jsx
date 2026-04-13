import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapEvents = ({ onMapClick }) => {
  useMapEvents({
    click: (e) => {
      if (onMapClick) {
        onMapClick(e.latlng);
      }
    },
  });
  return null;
};

const MapView = ({ center = [-8.8383, 13.2344], zoom = 13, markers = [], onMapClick, height = "400px" }) => {
  return (
    <div className="map-wrapper" style={{ height, width: '100%', overflow: 'hidden', borderRadius: 'var(--radius-xl)' }}>
      <MapContainer 
        center={center} 
        zoom={zoom} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {markers.map((marker, idx) => (
          <Marker key={idx} position={marker.position}>
            {marker.content && (
              <Popup>
                <div className="map-popup">
                  <strong>{marker.title}</strong>
                  <p style={{ margin: '5px 0 0', fontSize: '0.8rem' }}>{marker.content}</p>
                </div>
              </Popup>
            )}
          </Marker>
        ))}

        {onMapClick && <MapEvents onMapClick={onMapClick} />}
      </MapContainer>
    </div>
  );
};

export default MapView;
