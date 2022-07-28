import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";

const initialState = {
  properties: [],
};

function Properties() {
  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState("");

  const endpoint = "http://localhost:4000/api/v1/PropertyListing";

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        console.log(response);
        setProperties(response.data);
      })
      .catch((error) => {
        console.log(error);
        setAlert("No Properties Found");
      });
  }, []);

  return (
    <div>
      <Alert message={alert} />
      <div className="properties">
        {properties.map((property) => (
          // eslint-disable-next-line no-underscore-dangle
          <div key={property._id} className="item">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;
