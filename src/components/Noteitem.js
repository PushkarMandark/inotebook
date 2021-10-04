import React from "react";

const Noteitem = ({ data }) => {
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <i className="fa fa-trash-o mx-3" aria-hidden="true"></i>
          <i className="fa fa-pencil-square-o mx-3" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
