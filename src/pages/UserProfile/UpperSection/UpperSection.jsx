import Profile from "../Profile/Profile";
import GMap from "../GMap/GMap";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import MapPreview from "../GMap/MapPreview";
// import Maps from "../GMap/Maps";

const UpperSection = ({ id }) => {
  // const [openMap, setOpenMap] = useState(false);
  const [showFullMap, setShowFullMap] = useState(false);

  const handleShowMap = () => {
    setShowFullMap(true);
  };

  // const showMap = () => {
  //   setOpenMap(true);
  // };
  const hideMap = () => {
    setShowFullMap(false);
  };

  return (
    <div className="flex flex-col-reverse gap-6 lg:flex-row justify-between items-center w-full mb-4 border-b-4 border-dashed pb-4">
      {/* google map */}
      <div className="mb-10 lg:mb-0 border border-cyan-300">
        {!showFullMap ? (
          <MapPreview onClick={handleShowMap} />
        ) : (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white lg:w-[60vw] w-11/12 lg:h-[54vw] xl:h-[45vw] 2xl:h-[40vw] p-4 rounded-lg shadow-lg">
              <div onClick={hideMap} className="flex justify-end">
                <button
                  onClick={(event) => {
                    event.stopPropagation(); // Stop event propagation
                    hideMap();
                  }}
                >
                  <div className="text-slate-700">
                    <IoMdCloseCircleOutline size={42} />
                  </div>
                </button>
              </div>
              <div className="">
                <GMap />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* User Profile section and price section ----------------------------------*/}
      <div className="w-[80vw] lg:w-[70vw]">
        <Profile id={id} />
      </div>
    </div>
  );
};

export default UpperSection;
