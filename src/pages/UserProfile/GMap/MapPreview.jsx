import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";


const MapPreview = ({ onClick }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyA9Ju-w68zo9bdhaXi2q6YvBIjN3pnP1sk',
    libraries: ["places"],
  });

  const center = {
    lat: 22.7067,
    lng: 90.3754,
  };

  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };


  if (!isLoaded) {
    return <h1>Loading....</h1>;
  }

  return (
    <div onClick={onClick} className="w-[80vw] h-[40vw] lg:w-[30vw] lg:h-[15vw]">
      <GoogleMap
        options={options}
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default MapPreview