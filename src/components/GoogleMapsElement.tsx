// GoogleMapsElement.tsx
import React, { useState, useEffect, useCallback } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  InfoWindow,
} from "@react-google-maps/api";

interface Location {
  address: string;
  lat: number;
  lng: number;
}

const defaultLocation = { lat: 52.3676, lng: 4.9041 }; // Centered on Amsterdam

const locations: Location[] = [
  { address: "Amsterdam", lat: 52.3676, lng: 4.9041 },
  // Add more locations as needed
];

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 52.3676,
  lng: 4.9041,
};

const GoogleMapsElement: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selected, setSelected] = useState<Location | null>(null);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDZuSrmuyLVdD_q5Nhi6Nf-SC4b_wYyPjU">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {locations.map((location) => (
          <Marker
            key={location.address}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => setSelected(location)}
          />
        ))}
        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2>{selected.address}</h2>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsElement;
