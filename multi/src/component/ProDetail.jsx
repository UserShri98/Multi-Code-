import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const renderStars = (rating, count) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <span>
        <span style={{ color: "#FF9900" }}>
          {"★".repeat(fullStars)}
        </span>
        <span style={{ color: "#d3d3d3" }}>
          {"☆".repeat(emptyStars)}
        </span>
        <span> ({count} reviews)</span>
      </span>
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#007bff" }}>Product Details</h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          tableLayout: "fixed",
        }}
      >
        <tbody>
          <tr>
            <td style={{ width: "50%", padding: "20px", textAlign: "center" }}>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
            </td>

    
            <td style={{ width: "50%", padding: "20px", verticalAlign: "top" }}>
              <h2>{product.title}</h2>
              <p>{product.id}</p>
              <p>{renderStars(product.rating.rate, product.rating.count)}</p>
              <p>
                <strong>Description:</strong> {product.description}
              </p>
              <p>
                <strong>Price:</strong>{" "}
                <span style={{ color: "blue" }}>${product.price}</span>
              </p>
              <button
                onClick={() => navigate("/")}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Back to Products
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductDetail;
