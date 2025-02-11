This is a Next.js project, built with TypesSript, RTL/Jest, and Tailwind.

## Running the Project

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Tests

You can run tests for the project by running:

```bash
npm test
```

### Project Structure

* */app* - contains the source code for this app.
* */app/_components* - contains all components in their own folder alonside a `.test.tsx` file.
* */app/_types* - contains any types used throughout the app.
* */public* - contains static files, including the JSON data used for this project.

## Further Improvements

There are a few aspects I'd look to improve with more time. 

### Sorting

I'd include the ability to toggle the sorting by ascending/descending (it currently only does ascending). 

I'd likely add a new useState to control the sorting order ('ascending' / 'descending'), then reverse the order of the data if the state is set to 'descending'.

### Filtering

To filter items in the table, I would likely include a text input inside the `FileExplorer` component (outside of the table). Then I'd add state to manage the current filter and a function to process filtering in a similar way to how the sorting is managed. 

The sorting function would then need to use the data returned from filtering.

### Styling

Functionality was most important here, so styling is very basic. 

With more time I'd address this and look to make it more responsive, as well as improving UX with better hover effects and state indicators (ie opened/closed folders).
