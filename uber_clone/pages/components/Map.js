import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZW1lcmljMjM3IiwiYSI6ImNrdmxvN2cxdjlld2sycHBnYno2bzRvZWoifQ.BENGYAt0PWKEoAVYBF0C6A";
const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", //where you want to put the map...
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });
  return <Wrapper id="map"></Wrapper>;
};

export default Map;
//The components
const Wrapper = tw.div`
flex-1 
`;
