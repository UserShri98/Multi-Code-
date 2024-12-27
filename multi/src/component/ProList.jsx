import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#007bff" }}>Products</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Title</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Price</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Category</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{product.id}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{product.title}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>${product.price}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{product.category}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>
                <button
                  onClick={() => handleViewDetails(product.id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  SHOW
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
