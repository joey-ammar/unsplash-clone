import React, { useEffect, useState } from "react";
const ImageCard = (props) => {
  const { description, urls } = props.image;
  return (
    <>
      <div>
        <img src={urls.regular} alt={description} />
      </div>
    </>
  );
};
export default ImageCard;
