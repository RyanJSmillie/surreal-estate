import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchway,
  faBath,
  faBed,
  faSterlingSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/propertycard.css";

function PropertyCard({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) {
  const greetingEmail = `mailto:${{ email }}`;

  return (
    <div className="propertyCard">
      <FontAwesomeIcon className="propertyIcon" icon={faArchway} />
      <div className="propertyInfo">
        <div className="property-info-title">{title}</div>
        <div className="property-info-type">
          {type}, {city}
        </div>
        <div className="property-info-bathroom">
          <FontAwesomeIcon className="property-icon-bathroom" icon={faBath} />
          {bathrooms}
        </div>
        <div>
          <FontAwesomeIcon className="property-icon-bedroom" icon={faBed} />
          {bedrooms}
        </div>
        <div>
          <FontAwesomeIcon
            className="property-icon-price"
            icon={faSterlingSign}
          />
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        <a href={greetingEmail} className="property-info-email">
          <FontAwesomeIcon
            href={greetingEmail}
            className="property-icon-email"
            icon={faEnvelope}
          />
          Email
        </a>
      </div>
    </div>
  );
}

export default PropertyCard;

PropertyCard.defaultProps = {
  title: "",
  type: "",
  bathrooms: 0,
  bedrooms: 0,
  price: 0,
  city: "",
  email: "",
};

PropertyCard.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  bathrooms: PropTypes.number,
  bedrooms: PropTypes.number,
  price: PropTypes.number,
  city: PropTypes.string,
  email: PropTypes.string,
};
