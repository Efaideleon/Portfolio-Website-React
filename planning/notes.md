# Notes

* *Created on 4/18/2024*

* **4/19/2024**

* **Thinking Ideas**
* How to load the data? it will have to be some file, that we read from and load into the app
  * Probably in a csv file
* Make sure to pull first on the orginal Website Portfolio

* **Files:**
* The website currently uses thre main files
  * index.html
  * styles.css
  * javascript.js
  * contact.html
  * contact_style.css

* **Assets:**
* 9 gifs
* 1 webp
* 1 .ico

* **Features to Add**
* The project card should be clickable anywhere

* **Github** Repo link: [Portfolio Github Repo](https://github.com/Efai-De-Leon/Portfolio-Website)
* **Website** link: [Portfolio Website](https://efai-de-leon.github.io/Portfolio-Website/)

* We'll be using React with Typescript for this project powered by Vite.
* This project folder is only for creating the webiste, later it will be copied and moved on the main website repo.

* Now we have to figure out the architecture of the project.
* What does the website do?
  * *It displays a **navigation bar** on top*
  * *The **main page** show all the projects as cards*
* So The Wesite has two main components the navigation bar and the main
* The main has two sections
  * ***Overview***
  * ***Projects***
* The projects has a list of **cards**

* **Components**
* App
* Navigation Bar
* Main
* Overview
* ProjectCardGallery
* ProjectCard

* Now we face a new problem. How do we make each component depend on abstractions, we can't if a component changes, The component will be opnened and changed to what it needs to be.

* Do we start from the lower level or higher level?
* I think in this case, we'll start from the bottom-up

* **Project Card**
* Should be dynamic
* The project card has a title for the card
* A description about the project
* A picture showing a gif of the project

* The card should be clickable anywhere, taking the user to the repo of the project

* It has css that tilts around the y-axis slightly based on where the mouse is
* There is also a color that follows the mouse within the card

* These are the **css classes**:
  * container
  * project-card
  * small-card
  * inner
  * project-content
  * project-overview
  * project-info
  * btn

* How do I add the javascript to the project card in react?
  * Most of the code goes inside a useEffect(() => { /*here*/})
  * To access elements from jsx use `useRef<HTMLDivElement>(null)`
* Might be a little laggy, might look into this
* There seems to be a lot of logic code in the useEffect might need to look into a way to modularize it