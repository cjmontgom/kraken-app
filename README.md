# General notes

I enjoyed this. It was a good balance of clear requirements and open-endedness. There's quite a lot I would still have liked to do, but unfortunately I just ran out of time. Below are some of the next steps I would take, were I to work on the project again.
Just FYI, I chose to use styled components, just because I've been using it recently so I knew it would be quicker to get going. I'm comfortable with all forms CSS; CSS-in-JS, pure CSS, SASS, etc.

Thanks for taking the time to review this code!

## Improvement suggestions

1. **Separate concerns**: I'd consider separating the component logic from the styling and importing styles into the `Product` component file. This separation promotes better code organisation and makes it easier to read and work in the file, and easier to maintain and update styles.

2. **Extract components**: There are several sections in the `Product` component that could be extracted into separate, reusable components, such as `ProductDetails`, `ProductDescription`, and `ProductSpecifications`.

3. **Improve state management**: The current state management approach using `useState` for the basket, means that the user loses their backet on every page refresh. The basket state should be pulled out of this component and a state management library like React Context API or Redux should be used for propagation of state across components. I'd also use localstorage to persist data across sessions. I'd also add tests for this behaviour.

4. **Fix the Product vs Products mess**: The `Product` component is currently recieving all the products as props, even though it's only displaying the first one. I'd move the responsibility for fetching the products up the heirarchy and pass the relevant data down as props, or only fetch the necessary product data based on the URL or other parameters.

5. **Implement error handling**: Currently, there is no error handling for cases where the product data fails to fetch or is invalid. I'd display appropriate messages or a fallback UI for these cases.
