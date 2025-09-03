This project will help you apply everything you have learned so far, including array methods, callbacks, promises, async/await, fetch API, and error handling. You will be building a simple Recipe Finder App using TheMealDB API (free and no signup required).



Step 1: Setup Your Project
1. Create a new folder called recipe-finder.
2. Inside the folder, create three files: index.html, style.css, and script.js.
3. Link your style.css and script.js to your index.html.

Step 2: Create the HTML Structure
In index.html, create a simple layout with:
- An input box where the user can type a meal name.
- A search button.
- A div with id='results' where meals will be displayed.


Step 3: Fetch Data from TheMealDB
In script.js:
1. Add an event listener to the search button.
2. When clicked, use fetch API to call:
   https://www.themealdb.com/api/json/v1/1/search.php?s=<meal-name>
3. Use async/await to handle the request.
4. Display the meals using array methods like map or forEach.
5. Show meal name, thumbnail image, and instructions.


Step 4: Add Error Handling

1. If the API returns no meals, display a message: 'No results found.'
2. Use try...catch to handle network errors.
3. Clear previous results before showing new ones.
Step 5: Style Your App
Use CSS to make the app visually appealing. Style the input, button, and results grid. You can arrange the meals in a grid layout.


Bonus Challenge

1. Add a 'View Recipe' button that opens the YouTube link of the meal (provided in the API data).
2. Add a loading indicator while data is being fetched.
3. Allow searching by first letter using:
   https://www.themealdb.com/api/json/v1/1/search.php?f=a