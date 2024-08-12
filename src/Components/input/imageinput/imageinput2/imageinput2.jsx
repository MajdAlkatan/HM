import  { useState } from "react";

function MultiImageUpload() {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));

    setImages(imageUrls);
  };

  return (
    <div>
      <label htmlFor="file-input">
        <strong style={{ cursor: "pointer", color: "#007bff" }}>
          Choose Images
        </strong>
      </label>
      <input
        type="file"
        id="file-input"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`preview ${index + 1}`}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              margin: "5px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default MultiImageUpload;
