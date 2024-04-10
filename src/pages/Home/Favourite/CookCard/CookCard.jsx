import React from "react";

const CookCard = (name, description, img) => {

    console.log(name,description);

  return (
    <div className=" card me-0 md:me-8 bg-base-100 shadow-xl rounded-none my-10">
      <img
        src={
          img
            ? img
            : "https://fthmb.tqn.com/9rZHSD5NamhEcFVp1JK1vyvM-Yo=/2122x1416/filters:fill(auto,1)/GettyImages-480379734-56b09b8b3df78cf772cffe77.jpg"
        }
        alt="Cooks"
      />

      <div className="card-body">
        <h2 className="card-title">{name ? name : "name is missing"}</h2>
        <p className=" border-b pb-6 mb-6">
          {description ? description : "description is missing"}
        </p>
        <div className="card-actions flex justify-between items-center">
          <button className="btn w-[45%]">Visit</button>
          <button className="btn w-[45%]">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default CookCard;
