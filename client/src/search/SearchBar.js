import React, {useState} from "react";

export default function SearchBar({mediaType}) {
 return (
     <>
    <div className="d-md-flex mb-3 text-center">
    <h1 className="mb-0">Search</h1>
  </div>
  <form className="form-inline" onSubmit={handleSubmit}>
    <div className="form-group mb-2">
      <label className="sr-only">{mediaType}</label>
      <input
        id="mobile_number"
        name="mobile_number"
        type="phone"
        className="form-control"
        placeholder="Enter a customer's phone number"
        onChange={handleChange}
        value={search}
        required={true}
      />
    </div>
    <button type="submit" className="btn btn-primary ml-2 mb-2">
      <span className="oi oi-magnifying-glass mr-2" />
      Find
    </button>
  </form>
  </>
 )
}