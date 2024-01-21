import React from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import { getCenter } from 'geolib';



function MapBox({searchResults}) {

  


  const coordinates = searchResults.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }))

  const center = getCenter(coordinates)

  const [viewState, setViewState] = React.useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11
  });

  return (
    <Map
      mapboxAccessToken={process.env.mapbox_key}
      mapStyle='mapbox://styles/aaronc991/clrmvyeaf001k01pg24u1a4az'
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      
    >
      {searchResults?.map(item =>(
        <div key={item.long}>
          <Marker
          longitude={item.long}
          latitude={item.lat}
          anchor='bottom'>
            <p className='cursor-pointer text-2xl'>📍</p>
          </Marker>
        </div>
      ))}
    </Map>
    
  );
}

export default MapBox;