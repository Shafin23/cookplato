import GoogleMapReact from "google-map-react";
import { FaLocationPin } from "react-icons/fa6";

const GMapReact = () => {
    const apikey = "1wEo7YqUxfzldfC7IfEK"

    console.log(apikey);

    const location = {
        address: "1600 Amphitheatre Parkway, Mountain View, california.",
        lat: 22.7067,
        lng: 90.3754,
      };

  return (
    <div>
      <div className="map">
        <h2 className="map-h2">Come Visit Us At Our Campus</h2>
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyD5hINFpGB452oDILalIaFkaSEb21-idZ8" }}
            defaultCenter={location}
            defaultZoom={17}
          >
            <FaLocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default GMapReact;
