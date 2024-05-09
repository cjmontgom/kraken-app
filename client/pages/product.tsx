import React from "react";

const ProductPage: React.FC = () => {
  return (
    <div>
      <nav> {/* nav content */}</nav>
      <main>
        {/* product details */}
        <section>
          <img
            style={{ maxWidth: "100%" }}
            src="/philips-plumen.jpg"
            alt="Product Image"
          />
          <div>
            <h1>Product Name</h1>
            <p>Important info</p>
            <strong>£1.99</strong>
            <h2>Qty</h2>
            <div>
              <button type="button" aria-label="Decrease Quantity">
                -
              </button>
              <input type="number" min="1" value="1" aria-label="Quantity" />
              <button type="button" aria-label="Increase Quantity">
                +
              </button>
            </div>
            <button>Add to Cart</button>
          </div>
        </section>

        {/* additional product details */}
        <section>
          <div>
            <h2>Description</h2>
            <p>Item description</p>
          </div>
          <div>
            <h2>Specifications</h2>
            <dl>
              <div>
                <dt>Brand</dt>
                <dd>Phillips</dd>
              </div>
              <div>
                <dt>Item weight (g)</dt>
                <dd>77</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer>{/* footer content */}</footer>
    </div>
  );
};

export default ProductPage;
