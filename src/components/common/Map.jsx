import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useCallback } from 'react';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '16px'
};

// Dhanbad city center coordinates (approximate)
const defaultCenter = {
  lat: 23.7957,
  lng: 86.4304
};

// Default map options
const defaultOptions = {
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    }
  ]
};

const Map = ({ locations = [], height = '400px' }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [loadError, setLoadError] = useState(null);

  const onLoad = useCallback((map) => {
    // console.log('✅ Map loaded:', map);
    setMap(map);
    
    // Fit bounds to show all markers
    if (locations.length > 0 && window.google?.maps) {
      const bounds = new window.google.maps.LatLngBounds();
      locations.forEach(location => {
        if (location.coordinates?.lat && location.coordinates?.lng) {
          bounds.extend(location.coordinates);
        }
      });
      
      if (!bounds.isEmpty()) {
        map.fitBounds(bounds);
      }
    }
  }, [locations]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const onLoadError = useCallback((error) => {
    console.error('❌ Google Maps failed to load:', error);
    setLoadError(error);
  }, []);

  // Don't render map if no locations or API key missing
  if (!locations.length) {
    return (
      <div className="bg-gray-100 h-full min-h-[400px] flex items-center justify-center rounded-2xl">
        <div className="text-center p-6">
          <p className="text-gray-500">No locations to display</p>
        </div>
      </div>
    );
  }

  // Show error if map failed to load
  if (loadError) {
    return (
      <div className="bg-gray-100 h-full min-h-[400px] flex items-center justify-center rounded-2xl">
        <div className="text-center p-6">
          <p className="text-red-500 mb-2">Failed to load Google Maps</p>
          <p className="text-sm text-gray-500">Please check your API key</p>
        </div>
      </div>
    );
  }

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  
  if (!apiKey) {
    return (
      <div className="bg-gray-100 h-full min-h-[400px] flex items-center justify-center rounded-2xl">
        <div className="text-center p-6">
          <p className="text-yellow-600 mb-2">Google Maps API key missing</p>
          <p className="text-sm text-gray-500">Add VITE_GOOGLE_MAPS_API_KEY to .env file</p>
        </div>
      </div>
    );
  }

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
      onError={onLoadError}
      loadingElement={
        <div className="bg-gray-100 h-full min-h-[400px] flex items-center justify-center rounded-2xl">
          <div className="text-center p-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500 mx-auto mb-3"></div>
            <p className="text-gray-500">Loading map...</p>
          </div>
        </div>
      }
    >
      <GoogleMap
        mapContainerStyle={{ ...containerStyle, height }}
        center={locations[0]?.coordinates || defaultCenter}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        {/* Standard Markers */}
        {locations.map((location, index) => (
          location.coordinates?.lat && location.coordinates?.lng ? (
            <Marker
              key={index}
              position={location.coordinates}
              onClick={() => setSelectedLocation(location)}
              icon={{
                url: index === 0 
                  ? 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                  : 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                scaledSize: { width: 40, height: 40 }
              }}
            />
          ) : null
        ))}

        {/* Info Window for selected location */}
        {selectedLocation && selectedLocation.coordinates && (
          <InfoWindow
            position={selectedLocation.coordinates}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div className="p-2 max-w-[200px]">
              <h4 className="font-bold text-gray-900 text-sm mb-1">
                {selectedLocation.name}
              </h4>
              <p className="text-xs text-gray-600 mb-1">
                {selectedLocation.address}
              </p>
              <p className="text-xs text-gray-600 mb-2">
                {selectedLocation.timings}
              </p>
              <a
                href={selectedLocation.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
              >
                Get Directions
                <span>→</span>
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;