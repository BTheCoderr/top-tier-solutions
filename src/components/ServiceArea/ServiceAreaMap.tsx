import React from 'react';
import styled from 'styled-components';
import { GoogleMap, LoadScript, Circle, Marker } from '@react-google-maps/api';

const MapContainer = styled.div`
  height: 500px;
  width: 100%;
  margin: 2rem 0;
`;

const InfoContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  color: #212121;
  margin-bottom: 1.5rem;
  font-size: 2rem;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Legend = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LegendColor = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  opacity: 0.2;
`;

// Center coordinates (example: San Francisco)
const center = {
  lat: 37.7749,
  lng: -122.4194
};

const serviceAreaRadius = 50000; // 50km radius

const mapStyles = {
  height: '100%',
  width: '100%'
};

const circleOptions = {
  strokeColor: '#FF5722',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF5722',
  fillOpacity: 0.2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  zIndex: 1
};

const ServiceAreaMap = () => {
  return (
    <>
      <InfoContainer>
        <Title>Our Service Area</Title>
        <Description>
          We provide our fire prevention and air quality services throughout the greater
          San Francisco Bay Area. Contact us to confirm service availability in your location.
        </Description>
        <Legend>
          <LegendItem>
            <LegendColor color="#FF5722" />
            <span>Service Area</span>
          </LegendItem>
          <LegendItem>
            <LegendColor color="#212121" />
            <span>Headquarters</span>
          </LegendItem>
        </Legend>
      </InfoContainer>

      <MapContainer>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={9}
            center={center}
          >
            <Marker position={center} />
            <Circle
              center={center}
              radius={serviceAreaRadius}
              options={circleOptions}
            />
          </GoogleMap>
        </LoadScript>
      </MapContainer>
    </>
  );
};

export default ServiceAreaMap; 