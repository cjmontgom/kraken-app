import React, { useState } from "react";
import type { GetStaticProps } from "next";
import { fetchProducts } from "../api/graphql";
import { ProductType } from "../types";
import { styled } from "styled-components";

const Nav = styled.nav`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  max-width: 45%;
`;

const BasketWrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BasketIcon = styled.img`
  margin: 0 5px;
  height: 20px;
`;

const Main = styled.main`
  padding: 16px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 25px;
`;

const ProductHeading = styled.h1`
  margin: 0.5em 0 0.3em;
  font-weight: 400;
  font-size: 30px;
`;

const ProductImportantDetails = styled.p`
  margin-top: 0;
  font-size: 14px;
  color: ${(props) => props.theme.colours.purpleHaze};
  
}
`;

const PriceAndQuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
`;

const Price = styled.strong`
  font-weight: 500;
  font-size: 20px;
`;

const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuantityLabel = styled.span`
  font-size: 9px;
  font-weight: 200;
`;

const QuantitySelector = styled.div`
  display: flex;
  padding: 6px;
  align-items: center;
`;

const CurrentQuantity = styled.div`
  margin: 0 8px;
  font-weight: 500;
  font-size: 20px;
`;

const BaseButton = styled.button`
  color: ${(props) => props.theme.colours.hemocyanin};
  background: ${(props) => props.theme.colours.sohoLights};
  border: none;
  font-size: 16px;
  border-radius: 11px;
`;

const QuantityButton = styled(BaseButton)`
  width: 30px;
  height: 30px;
`;

const AddToCartButton = styled(BaseButton)`
  width: 100%;
  height: 56px;
`;

type ProductData = {
  products: ProductType[];
};

export const getServerSideProps: GetStaticProps<ProductData> = async () => {
  const data = await fetchProducts();
  return {
    props: {
      products: data,
    },
  };
};

const Product = ({ products }: ProductData) => {
  const lightbulb = products[0];
  // ToDo: Iterate over all products once this component splits

  const [quantity, setQuantity] = useState(1);
  const [basketCount, setBasketCount] = useState(0);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToBasket = () => {
    setBasketCount((prevCount) => prevCount + quantity);
  };

  return (
    <div>
      <Nav>
        <Logo src="octopus-logo.svg" alt="The Octopus logo" />
        <BasketWrapper>
          <span role="status" title="Basket items">
            {basketCount}
          </span>
          <BasketIcon src="basket.svg" alt="An icon of a basket" />
        </BasketWrapper>
      </Nav>
      <Main>
        {/* product details */}
        <section>
          <ProductImage
            src={lightbulb.img_url}
            alt={`Image of the following product: ${lightbulb.name}`}
          />
          <div>
            <ProductHeading>{lightbulb.name}</ProductHeading>
            <ProductImportantDetails>
              <span>{lightbulb.power}</span>
              <span> // </span>
              <span>Packet of {lightbulb.quantity}</span>
            </ProductImportantDetails>
            <PriceAndQuantityWrapper>
              <Price>£{lightbulb.price / 100}</Price>
              <QuantityWrapper>
                <QuantityLabel>Qty</QuantityLabel>
                <QuantitySelector aria-label="Quantity selector">
                  <QuantityButton
                    type="button"
                    aria-label="Decrease Quantity"
                    onClick={decreaseQuantity}
                  >
                    -
                  </QuantityButton>
                  <CurrentQuantity role="status" title="Current quantity">
                    {quantity}
                  </CurrentQuantity>
                  <QuantityButton
                    type="button"
                    aria-label="Increase Quantity"
                    onClick={increaseQuantity}
                  >
                    +
                  </QuantityButton>
                </QuantitySelector>
              </QuantityWrapper>
            </PriceAndQuantityWrapper>
            <AddToCartButton onClick={addToBasket} title="Add to cart">
              Add to cart
            </AddToCartButton>
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
      </Main>

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

export default Product;
