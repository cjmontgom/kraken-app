# General notes

I enjoyed this. It was a good balance of clear requirements and open-endedness. There's quite a lot I would still have liked to do, but unfortunately I just didn't have time. Below are some of the next steps I would take, were I to work on the project again.
Just FYI, I chose to use styled components, just because I've been using it recently so I knew it would be quicker to get going. I'm comfortable with all forms CSS; CSS-in-JS, pure CSS, SASS, etc.

Thanks for taking the time to review this code!

## Improvement suggestions

1. **Separate concerns**: I'd consider separating the component logic from the styling and importing styles into the `Product` component file. This separation promotes better code organisation and makes it easier to read and work in the file, and easier to maintain and update styles.

2. **Extract components**: There are several sections in the `Product` component that could be extracted into separate, reusable components, such as `ProductDetails`, `ProductDescription`, and `ProductSpecifications`.

3. **Improve state management**: The current state management approach using `useState` for the basket, means that the user loses their backet on every page refresh. The basket state should be pulled out of this component and a state management library like React Context API or Redux should be used for propagation of state across components. I'd also use localstorage to persist data across sessions. I'd also add tests for this behaviour.

4. **Fix the Product vs Products mess**: The `Product` component is currently recieving all the products as props, even though it's only displaying the first one. I'd move the responsibility for fetching the products up the heirarchy and pass the relevant data down as props, or only fetch the necessary product data based on the URL or other parameters.

5. **Implement error handling**: Currently, there is no error handling for cases where the product data fails to fetch or is invalid. I'd display appropriate messages or a fallback UI for these cases.

***

<img src="https://static.octopuscdn.com/constantine/constantine.svg" alt="Octopus Energy mascot, Constantine" width="100" />

# Octopus Frontend code test

In this code test, you'll be asked to:

- Make a simple React app that follows the design in `design.jpg`, consumes the API and makes the front end tests pass. Ideally the app should be responsive.

We've included:

- A sample [Next.js](https://nextjs.org/) project with a Typescript setup for your convenience, but you're welcome to swap it out for another framework if you prefer
- Some CSS colour variables that match the colours in the design
- The assets that you will need to complete the design

You're also welcome to write more tests for other parts of the application - but design those however you like.

## Getting started

First you'll need to install your dependencies. We've used yarn, if you have another preference feel free to remove the lock file and use what you are comfortable with:

```sh
cd client && yarn
```

## Start the app

```sh
yarn dev
```

This will do two things:

- Start a Next.js app running in development on <http://localhost:3000>
- Start a graphQL stub server running on <http://localhost:3001/graphql>

## Running tests

You can run tests from the client directory.

```sh
cd client && yarn test
```

This should give you two failures:

```sh
FAIL test/product.test.js
    ✕ should be able to increase and decrease product quantity
    ✕ should be able to add items to the basket
```

The task is to build the app that passes these tests.

## What we're looking for

We would like you to demonstrate your ability to:

- Reason through a programming problem
- Implement a visual design
- Implement some user interactions
- Write code that is easy to understand and extend
- Write tests that document and safeguard the program's behaviour
- Use a version control system (e.g. git) to effectively convey intent
- Write Typescript typings for the components you create, and also the typings for the GraphQL API response

Notes:

- This has not been set up with any type of CSS-in-JS, but if that is something you would like to add, please feel free.

Best of luck!
