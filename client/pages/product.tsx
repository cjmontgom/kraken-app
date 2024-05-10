import React from "react";
import type { GetStaticProps } from "next";

type Product = {
  id: number;
  name: string;
  power: string;
  description: string;
  price: number;
  quantity: number;
  brand: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  model_code: string;
  colour: string;
  img_url: string;
};

type ProductPageData = {
  products: Product[];
};

export const getStaticProps: GetStaticProps<ProductPageData> = async () => {
  const { products } = require("../../server/db");
  return {
    props: {
      products,
    },
  };
};

const ProductPage = ({ products }: ProductPageData) => {
  const lightbulb = products[0];

  return (
    <div>
      <nav>
        <img
          style={{ maxWidth: "50%" }}
          src="octopus-logo.svg"
          alt="The Octopus logo"
        />
        <img
          style={{ maxWidth: "5%" }}
          src="basket.svg"
          alt="An icon of a basket"
        />
      </nav>
      <main>
        {/* product details */}
        <section>
          <img
            style={{ maxWidth: "100%" }}
            src={lightbulb.img_url}
            alt={`Image of the product: ${lightbulb.name}`}
          />
          <div>
            <h1>{lightbulb.name}</h1>
            <p>
              <span>{lightbulb.power}</span>
              <span> // </span>
              <span>Packet of {lightbulb.quantity}</span>
            </p>
            <strong>£{lightbulb.price / 100}</strong>
            <h2>Qty</h2>
            <div aria-label="Quantity selector">
              <button type="button" aria-label="Decrease Quantity">
                -
              </button>
              <span role="status">1</span>
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
            <p>{lightbulb.description}</p>
          </div>
          <div>
            <h2>Specifications</h2>
            <dl>
              <div>
                <dt>Brand</dt>
                <dd>{lightbulb.brand}</dd>
              </div>
              <div>
                <dt>Item weight (g)</dt>
                <dd>{lightbulb.weight}</dd>
              </div>
              <div>
                <dt>Dimensions (cm)</dt>
                <dd>
                  {lightbulb.height} x {lightbulb.width} x {lightbulb.length}
                </dd>
              </div>
              <div>
                <dt>Item Model number</dt>
                <dd>{lightbulb.model_code}</dd>
              </div>
              <div>
                <dt>Colour</dt>
                <dd>{lightbulb.colour}</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer>
        <small>
          Octopus Energy Ltd is a company registered in England and Wales.
          Registered number: 09263424.
          <address>
            Registered office: 33 Holborn, London, ECIN 2HT. Trading office:
            20-24 Broadwick Street, London, WIF 8HT
          </address>
        </small>
      </footer>
    </div>
  );
};

export default ProductPage;
