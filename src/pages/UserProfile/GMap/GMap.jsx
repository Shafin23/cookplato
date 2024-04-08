import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

const GMap = () => {
  const [map, setMap] = useState(/** @type google.maps.Map */ null);

  const center = {
    lat: 22.7067,
    lng: 90.3754,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <div>
        <div className="w-1/3 flex gap-4 mx-auto mb-5">
          <div>
            <Autocomplete>
              <input
                className="w-80 border border-slate-400 rounded-lg p-3"
                type="text"
                name="location"
                id=""
                placeholder="Location"
              />
            </Autocomplete>
          </div>
          <div
            onClick={() => map.panTo(center)}
            className="border border-black rounded-full p-4"
          >
            <FaLocationArrow width={20} />
          </div>
        </div>
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "30%", height: "52" }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </>
  );
};

export default GMap;
