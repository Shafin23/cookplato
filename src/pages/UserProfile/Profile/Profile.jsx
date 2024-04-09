import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../components/AuthProvider/AuthProvider";

const Profile = ({ id }) => {
  const { setMessageReciever } = useContext(authContext);

  // state declaration of this component ------------------------------------------------------
  const [visitedCook, setVisitedCook] = useState(null); // when user click on visit cook button
  const [showFullDescription, setShowFullDescription] = useState(false); // when user click on "see more" then it becomes true
  // ===========================================================================================

  useEffect(() => {
    // Fetch data od visited cook using id ----------------------
    const fetchData = setInterval(() => {
      fetch(`http://localhost:5000/getAllUsers/userId/${id}`)
        .then((response) => response.json())
        .then((data) => setVisitedCook(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, 2000); // Fetch data every 2 seconds

    return () => clearInterval(fetchData); // Clear interval on unmount or re-render
  }, [id]); // Trigger useEffect only when id changes

  // see more button functionality -----------------------------
  const handleSeeMore = () => {
    setShowFullDescription(true);
  };
  // =============================================================

  // see more button functionality -------------------------------
  const handleShowLess = () => {
    setShowFullDescription(false);
  };
  // =============================================================

  return (
    <div className="w-full h-auto p-4 lg:ms-4 border border-gray-300 rounded-md">
      <div>
        {/* Profile Info ------------------------------*/}
        <div className="flex flex-col gap-5 md:flex-row justify-start items-start">
          {/*left - profile picture ----------*/}
          <img
            src={visitedCook?.img}
            className="rounded-md w-[100%] md:w-[40%] lg:w-[20%] h-full"
          />

          {/* right - details ----------------*/}
          <div className="lg:ms-3 mt-3 w-[80%]">
            {/* name */}
            <h1 className="text-lg lg:text-4xl font-bold text-gray-700">
              {visitedCook?.first_name + visitedCook?.last_name}
            </h1>
            {/* description */}
            <article className="text-gray-800 mt-2">
              {showFullDescription
                ? `${visitedCook?.description} `
                : `${visitedCook?.description?.slice(0, 100)}... `}

              {/* see more button */}
              <span
                onClick={handleSeeMore}
                className={
                  showFullDescription
                    ? "hidden"
                    : "font-semibold text-lg text-gray-600 cursor-pointer"
                }
              >
                See more
              </span>

              {/* show less button */}
              <span
                onClick={handleShowLess}
                className={
                  showFullDescription
                    ? "font-semibold text-lg text-gray-600 cursor-pointer"
                    : "hidden"
                }
              >
                Show less
              </span>
            </article>
          </div>
        </div>
        {/* ============================================= */}

        {/* Buttons =------------------------------------*/}
        <div className="mt-5 flex md:justify-end lg:justify-normal">
          <div className="">
            <button className=" bg-amber-500 hover:bg-amber-600 text-white btn-sm px-8 rounded-md border-none btn">
              Share
            </button>

            <Link
              to="/inbox"
              onClick={() => setMessageReciever(visitedCook?.email)}
              className=" ms-3 bg-green-700 hover:bg-green-600 text-white btn-sm px-8 rounded-md border-none btn"
            >
              Chat
            </Link>
          </div>
        </div>
        {/* ============================================== */}
      </div>
    </div>
  );
};

export default Profile;
