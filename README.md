# AltSchool Project Exam - React App Readme
This project is a webapp application built for Altschool's second semester exam. It utilizes various libraries and tools to achieve specific functionalities.

### Technologies Used
1. Frontend Framework: React
2. Styling: Vanilla CSS
3. Installation: Vite
4. Routing: React Router DOM
5. Data Fetching: Custom useFetch hook with error handling
6. Pagination: Custom Pagination component
   
### Features
- Nested Routes: The application utilizes nested routes to display the "repo page" as a child of the main "repos" route.
- Search Functionality: A search bar allows users to filter repositories based on their names.
- Data Fetching: The application uses a custom useFetch hook to fetch data from an external API. The hook handles errors and throws them appropriately for error handling in components.
- Error Handling: The application gracefully handles errors during data fetching and displays them to the user.
- Pagination: A custom Pagination component facilitates paginating through fetched data sets.
  
#### Additional Notes
+ This project uses Vanilla CSS for styling, demonstrating understanding of CSS fundamentals. 
+ The codebase leverages custom hooks (useFetch and potentially Pagination) for reusability and cleaner component structure.
