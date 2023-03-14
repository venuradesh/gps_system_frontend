import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useJsApiLoader } from "@react-google-maps/api";
import { GoogleMap, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";

//components
import SearchMapContainer from "../Components/Map/SearchMapContainer";
import OtherBusses from "../Components/Map/OtherBusses";
import ViewStatsBtn from "../Components/Map/ViewStatsBtn";
import Statistics from "../Components/Map/Statistics";

function Map() {
  const [error, setError] = useState("");
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [statisticsClicked, setStatisticsClicked] = useState(false);
  const [busNumber, setBusNumber] = useState("");
  const [route, setRoute] = useState("");
  const [busMarker, setBusMarker] = useState({ lat: 0, lng: 0 });

  const [searchClicked, setSearchClicked] = useState({ search: false });

  const center = useMemo(() => ({ lat: 6.9271, lng: 79.8612 }), []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDiTzr7E0cc1vMasy0jYzVhamQpwtzaej8",
    libraries: ["places"],
  });

  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      fullscreenControl: false,
      streetViewControl: false,
    }),
    []
  );

  useMemo(() => {
    if (busMarker.lat) {
      map.panTo(busMarker);
      map.setZoom(13);
    }
  }, [busMarker]);

  useEffect(() => {
    Geocode.setApiKey("AIzaSyDiTzr7E0cc1vMasy0jYzVhamQpwtzaej8");

    if (busNumber) {
      if (busNumber.length === 7) {
        setBusMarker({ lat: 6.8433, lng: 80.0032 });
        setError("");
      } else {
        setError("Enter a valid Bus Number");
        map.panTo(center);
        map.setZoom(10);
        setBusMarker({ lat: 0, lng: 0 });
      }
    }
  }, [searchClicked]);

  if (!isLoaded) return <div>Loading..</div>;
  return (
    <Container>
      <SearchMapContainer setBusNumber={setBusNumber} setRoute={setRoute} setSearchClicked={setSearchClicked} searchClicked={searchClicked} error={error} />
      <GoogleMap zoom={10} center={center} options={options} mapContainerClassName="map-container" onLoad={(map) => setMap(map)}>
        {busMarker.lat && busMarker.lng ? <Marker position={busMarker} /> : <></>}
      </GoogleMap>
      {searchClicked && (busMarker.lat || route) ? <OtherBusses RouteName="Trincomalee" setBusMarker={setBusMarker} /> : <></>}
      {searchClicked && (busMarker.lat || route) ? (
        <>
          <ViewStatsBtn statisticsClicked={setStatisticsClicked} />
        </>
      ) : (
        <></>
      )}
      {statisticsClicked ? <Statistics statisticsClicked={setStatisticsClicked} /> : <></>}
    </Container>
  );
}

export default Map;

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  position: relative;
  top: 60px;
  z-index: 0;

  .map-container {
    width: 100%;
    height: calc(100vh - 60px);
  }
`;
