import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const Maps = () => {

    const postion = {
        lat: 22.7067,
        lng: 90.3754,
      };

  return (
    <APIProvider apiKey='AIzaSyA9Ju-w68zo9bdhaXi2q6YvBIjN3pnP1sk'>
      <div style={{height: "40vh", width: '30vw'}} className="h-[100vh]">
        <Map center={postion} zoom={12}>
            <AdvancedMarker position={postion}>

            </AdvancedMarker>
        </Map>
        <h1></h1>
      </div>
    </APIProvider>
  );
};

export default Maps;
