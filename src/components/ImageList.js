import "./ImageList.css";
import ImageCard from "./ImageCard";
const ImageList = (props) => {
  const images = props.images.map((image, index) => {
    return <ImageCard key={index + 1} image={image} />;
  });
  return (
    <>
      <div className="image-list">{images}</div>
    </>
  );
};
export default ImageList;
