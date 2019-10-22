## Project Notes:

# Project Online:

Dedicated Heroku Container: https://architecture-reviews.herokuapp.com/#/

- Note: I could not acquire an AWS subscription for education for some reason. I decided to upload the project unoto Heroku's free tier hosting service instead.

Disclaimer: This project uses the React framework to render all components. I apologize for including dynamic rendering in this part of the assignment. The Professor assured us in the beginning that we were allowed to use other libraries so I just went ahead and wrote the entire App in JSX using JavaScript to dynamically render HTML & CSS at runtime. Aside from compiling/rendering, I do not use JavaScript for any other purpose.

HTML5/CSS Validator: Again, due to React's dynamically rendered components, the validators do not pick up any of the markup as this is placed within the document at runtime with JavaScript.

Lastly, there is an "Unhandled Rejection (SecurityError)" error that is thrown. I am not sure what's causing it, I hope to have this removed by submission 2. For now, please ignore that warning.

\*\*Note: I wasn't able to get a student account with Amazon for some reason, I am looking to find an alternative service for submission 2. Thank you for your patience.

All front-end components (JSX/HTML/CSS files) are located in `src/components`.

Minor Comments:

1. I followed ESLint coding style throughout the project with the maximum line width of 80 characters.
2. I made the decision to include the 'search form' in the Navbar. The Navbar now provides a text and category selection type search features. A minimum amount of JavaScript was used to implement the dropdown functionality.
3. I implemented @media queries for reactive design.

## How to start the client.

Please change to the client directory:

### `cd client`

Install all node modules.

### `npm install`

Run app.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
