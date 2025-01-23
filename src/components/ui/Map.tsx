'use client';

import React, { useMemo } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: "100%",
  height: "400px",
}

interface Props {
    lat: number;
    lng: number;
}

const Map: React.FC<Props> = ({ lat, lng }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-maps-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
  });

  const center = useMemo(() => {
    return { lat, lng };
  }, [lat, lng]);

  const onLoad = React.useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds);
  }, [center]);

  if (isLoaded) {
    return (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
        >
        </GoogleMap>
    );
  }

  return null;
};

export default React.memo(Map)
