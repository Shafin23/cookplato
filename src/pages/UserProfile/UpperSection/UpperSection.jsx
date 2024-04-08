import Profile from "../Profile/Profile";
// import GMap from "../GMap/GMap";
import GMapleaflet from "../GMap/GMapleaflet";




const UpperSection = ({ id }) => {
  // const [openMap, setOpenMap] = useState(false);

  // const showMap = () => {
  //   setOpenMap(true);
  // };
  // const hideMap = () => {
  //   setOpenMap(false)
  // };

  return (
    <div className=" flex flex-col md:flex-row justify-between items-center w-full mb-4 border-b-4 border-dashed pb-4">
      {/* google map --------------------------------- */}
      <div
        // onClick={showMap}
        className="border flex justify-center items-center rounded-lg bg-pink-200"
      >
      <GMapleaflet />
      </div>
   
      {/* ============================================ */}

      {/* User Profile section and price section ----------------------------------*/}
      <div className=" w-[70vw]">
        <Profile id={id} />
      </div>
      {/* ========================================================================== */}
    </div>
  );
};

export default UpperSection;

// {openMap === true ? (
//   <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
//     <div className="bg-white w-[60vw] h-[40vw] p-4 rounded-lg shadow-lg">
//       {/* <GMap openMap={openMap} /> */}
//     </div>
//   </div>
// ): ""}