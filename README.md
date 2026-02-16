# Zoo Express

This is a multi-page website built for our web development assignment. The goal was to build a clean, organized site using Node.js and Express that uses templates to display data dynamically.

## How The Site Is Organized

- Server - (index.ejs)
- Routes - to different animal groups and animals
- Views (EJS) -templets
  - Partials
  - Sub Pages

### Website Routes

We have structured the site to ensure it has at least 7 accessible routes as required:

| Page Type       | URL Path                              | Description                         |
| :-------------- | :------------------------------------ | :---------------------------------- |
| **Home**        | `/`                                   | Welcome page                        |
| **Top Level 1** | `/mammals`                            | Main page for all mammal animals.   |
| **Sub-Page**    | `/mammals/quokka`                     | Details about Quokka.               |
| **Sub-Page**    | `/mammals/tasmanian-devil`            | Details about the Tasmanian Devil.  |
| **Sub-Page**    | `/mammals/enchidna`                   | Details about the Enchidna.         |
| **Top Level 2** | `/reptiles`                           | Main page for the reptile animals.  |
| **Sub-Page**    | `/reptiles/frill-necked lizard`       | Details about Frill Necked Lizard   |
| **Sub-Page**    | `/reptiles/hawksbill-turtle`          | Details about the Hawksbill Turtle. |
| **Top Level 3** | `/birds`                              | Main page for the bird animals.     |
| **Sub-Page**    | `/birds/cassowary`                    | Details about the Cassowary.        |
| **Sub-Page**    | `/birds/kookaburra`                   | Details about the Kookaburra.       |
| **Sub-Page**    | `/birds/yellow-tailed-black-cockatoo` | Details about the Kookaburra.       |

#### How To Run It

1. Open your terminal in the project folder.

2. Type npm install to get the necessary files.

3. Type node index.js to start the server.

4. Open localhost:3000 in your browser.
