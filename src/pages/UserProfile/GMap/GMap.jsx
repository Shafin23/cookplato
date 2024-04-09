import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import { useState, useRef, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineSearch } from "react-icons/md";
import Lottie from "lottie-react";
import lottieAnimation from "/public/lottie/Animation - 1712643253700.json";

const GMap = () => {
  const [map, setMap] = useState(null);
  const [myMarker, setMyMarker] = useState(null); // State to hold the custom marker
  const [address, setAddress] = useState(""); // The address location is in here.
  const autocompleteRef = useRef(null); // Reference to the Autocomplete component
  const [originalCenter, setOriginalCenter] = useState({
    lat: 22.7868,
    lng: 46.7016,
  });

  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA9Ju-w68zo9bdhaXi2q6YvBIjN3pnP1sk",
    libraries: ["places"],
  });

  useEffect(() => {
    if (map) {
      // Store the original center of the map when it loads
      setOriginalCenter(map.getCenter());
    }
  }, [map]);

  if (!isLoaded) {
    return (
      <div className="flex w-full justify-center items-center">
        <div className="">
          <Lottie animationData={lottieAnimation} />
        </div>
      </div>
    );
  }

  const handleMapClick = (event) => {
    const clickedPosition = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMyMarker(clickedPosition); // Set the clicked position as the custom marker

    // Reverse geocoding to get the address
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: clickedPosition }, (results, status) => {
      if (status === "OK" && results[0]) {
        setAddress(results[0].formatted_address);
        console.log(results[0].formatted_address); // Log the address
      } else {
        setAddress("Address not found");
        console.log("Address not found");
      }
    });
  };

  const handleLocationIconClick = () => {
    if (map) {
      map.panTo(originalCenter); // Pan the map to the original center
    }
  };

  //For search location

  const handleSearchIconClick = () => {
    if (autocompleteRef.current !== null) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry && place.formatted_address) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setMyMarker(location);
        setAddress(place.formatted_address);
        if (map) {
          map.panTo(location);
        }
      }
    }
  };

  return (
    <>
      <div>
        <div className="lg:w-2/5 flex items-center justify-center gap-4 mx-auto mb-5">
          <div className="relative">
            <Autocomplete
              ref={autocompleteRef}
              onLoad={(autocomplete) =>
                (autocompleteRef.current = autocomplete)
              }
              libraries={["places"]}
            >
              <div>
                <input
                  className="lg:w-96 border border-slate-200 rounded-lg p-3 pr-10"
                  type="text"
                  name="location"
                  id=""
                  placeholder="Search Location"
                />
                <MdOutlineSearch
                  className="absolute border-l pl-1 top-0 right-0 mt-3 mr-3 cursor-pointer text-gray-400"
                  size={24}
                  onClick={handleSearchIconClick} // Call handleSearchIconClick on click
                />
              </div>
            </Autocomplete>
          </div>
          <div
            onClick={handleLocationIconClick}
            className="border border-slate-200 rounded-full p-4 cursor-pointer"
          >
            <FaLocationArrow width={20} />
          </div>
        </div>
        <GoogleMap
          center={originalCenter} // Use the original center as default
          zoom={10}
          options={options}
          mapContainerStyle={{ width: "100%", height: "50vh" }}
          onLoad={(map) => setMap(map)}
          onClick={handleMapClick} // Handle map click event to add custom marker
        >
          {/* Render other markers here */}

          {myMarker && <Marker position={myMarker} label="" />}
        </GoogleMap>

        <div className="mt-5 flex justify-between">
          <div>
            {address && (
              <div className="flex items-center gap-1">
                <h1 className="font-bold text-lg">Your Location</h1>
                <CiLocationOn />
              </div>
            )}
            <p className="font-medium">{address}</p>
          </div>
          <button className="flex bg-blue-600 items-center gap-2 text-white px-4 py-1 rounded-full">
            <h1 className="font-semibold">Select</h1>
            <IoMdCheckmark size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default GMap;
