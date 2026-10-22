# Todo List

A small, static weekly to-do list built with HTML, CSS, and vanilla JavaScript.

## Run locally

1. Download or clone this repository.
2. Open `index.htm` in a modern web browser.
3. Use the **Add** button in a day card to add a task. The standalone weekly view is available from the Todo List link.

No package manager, build step, or server is required.

## Project files

- `index.htm` — home page and weekly task cards.
- `todo.html` — standalone weekly task view.
- `todo.js` — shared task-entry behavior for both pages.
- `style.css` — home page styles.

## Current limitations

Tasks are kept only in the current page's DOM. They are not saved across refreshes or shared between the two pages. The page also loads its icon images from an external image host, so those images require an internet connection.

This is a learning project, not a synchronized or persistent task manager.
