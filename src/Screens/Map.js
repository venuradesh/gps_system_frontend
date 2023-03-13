import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { useLoadScript } from "@react-google-maps/api";
import { GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer } from "@react-google-maps/api";

//components
import SearchMapContainer from "../Components/Map/SearchMapContainer";
import OtherBusses from "../Components/Map/OtherBusses";
import ViewStatsBtn from "../Components/Map/ViewStatsBtn";
import Statistics from "../Components/Map/Statistics";

function Map() {
  const [statisticsClicked, setStatisticsClicked] = useState(false);
  const center = useMemo(() => ({ lat: 8.5874, lng: 81.2152 }), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDiTzr7E0cc1vMasy0jYzVhamQpwtzaej8",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading..</div>;
  return (
    <Container>
      <SearchMapContainer />
      <GoogleMap zoom={15} center={center} mapContainerClassName="map-container"></GoogleMap>
      <OtherBusses RouteName="Trincomalee" />
      <ViewStatsBtn statisticsClicked={setStatisticsClicked} />
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
