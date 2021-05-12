import React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import styled from 'styled-components';

function Location() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 44.61909788,
    longitude: 21.1765210699899,
    zoom: 13,
    pitch: 50,
  });

  const [showPopup, togglePopup] = React.useState(false);

  const navControlStyle = {
    right: 10,
    top: 10,
  };

  return (
    <>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoibWFyY29qb3Zhbm92aWMiLCJhIjoiY2tvazh5NmN3MGU5ajJ1bDh5dXhhczg5aCJ9.cxfoaG0wf1yi3G8GnAftkQ"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle={'mapbox://styles/mapbox/dark-v9'}
      >
        <Marker
          latitude={44.62909535}
          longitude={21.1965217697481}
          offsetLeft={-20}
          offsetTop={-10}
        >
          {showPopup && (
            <Popup
              latitude={44.797263}
              longitude={21.005123}
              closeButton={true}
              closeOnClick={false}
              onClose={() => togglePopup(false)}
              anchor="bottom"
            >
              <MarkerStore>Trenutno na ovoj adresi isporucujem</MarkerStore>
            </Popup>
          )}
          <MarkerStore onClick={() => togglePopup(true)}>
            <MarkerStore>
              Food Delivery - <span>klikni za lokaciju naredne isporuke</span>
            </MarkerStore>
            <MarkerImg
              src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
              alt=""
            />
          </MarkerStore>
        </Marker>
        <NavigationControl style={navControlStyle} />
      </ReactMapGL>
    </>
  );
}

const MarkerStore = styled.h2`
  color: #c33e3f;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;

  span {
    color: white;
  }
`;

const MarkerImg = styled.img`
  width: 10%;
`;

export default Location;
