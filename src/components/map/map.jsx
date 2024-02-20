import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import L from 'leaflet';

import Loader from '../loader/loader';
import iconImage from '../../assets/img/pin.svg';
import iconActiveImage from '../../assets/img/pin-active.svg';

function Map({cities, loading, activePin}) {
  const icon = new L.Icon({
    iconUrl: iconImage,
  });

  const iconActive = new L.Icon({
    iconUrl: iconActiveImage,
  });

  if (loading === 'loading') return <Loader />;
  if (loading === 'idle')
    return (
      <MapContainer
        className="markercluster-map"
        center={[cities[0].location.latitude, cities[0].location.longitude]}
        zoom={12}
        maxZoom={18}
        style={{height: '100%'}}
        key={cities[0].city.name}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {cities.map((item) => (
          <Marker
            position={[item.location.latitude, item.location.longitude]}
            key={item.id}
            icon={activePin === item.id ? iconActive : icon}
          />
        ))}
      </MapContainer>
    );
}

export default Map;
