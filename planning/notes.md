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
  * *Most of the code goes inside a useEffect(() => { /*here*/})*
  * *To access elements from jsx use `useRef<HTMLDivElement>(null)`*
* Might be a little laggy, might look into this
* There seems to be a lot of logic code in the useEffect might need to look into a way to modularize it.
  * *Moving the MousePosition interface to another file*

* **4/22/2024**
* We could make the effect into a component on its own. But for now I don't know if I'm going to be using that efect.

* Things to make dynamic from the the:
* Title
* Description
* Github Link
* Picture/Gif

* Classes should be implemented on their own file.
* The "main/app" should be that one that decides on which concrete class it depends on.
  * *We'll try with this file but the effect may not be used later own*

* **Interfaces**
* IMousePosition
* IBlurEffect

* IBlurEffect:
* attributes:
  * container: HTMLDivElement | null 
  * inner: HTMLDivElement | null
* Methods:
  * isTimeToUpdate : () -> number
  * onMouseEnterHanlder: (MouseEvent) -> void
  * onMouseLeaveHanlder: () -> void
  * onMouseMoveHanlder: (MouseEvent) -> void
  * update: (MouseEvent) -> void
  * updateColor: (MouseEvent) -> void
  * updateTransformStyle(x: string, y: string) -> void

* Where do we add the .addEventListener?
  * Guess We'll keep it on the useEffect
* Need to figure out what custom hooks in react are.
  * They seem to replace object that need a useEffect or other react hook
* Picking between an Object or a CustomHook
  * *An Ojbect is good for storing data and functions that might change that data*
  * A CustomHook is good for reusable Logic and States
    * Data Fetching
    * Form Handling
    * Animations
* Ideally the object would all depend on interfaces
  * *Since react has both types and interfaces, we have to consider that an object or custo hook can also depend on a type*
  * Therefore types and interfaces can be used kind of interchangeably
* A Project Card and a Project Card with Effect are different.
  * *We'll have to extract the css part of it as well*
* We have to check if a function component can implement multiple interfaces
  * *Yes it can, using the `&` sign*
* Types are the classes not functional components.
  * *The functional component are the concrete implementation of the class.*
* There will be type for Card and ProjectCard will be an instance of a Card.
* Need to figure out how to use prop types in react
* Ok, now we know that using an interface might be better because they can extended
  * *allows to add more prop values*
  * *but what do we get from extending an interface?*
  * *Using an interface allows the class that implements the interface to be used wherever the base interface is used*
* So if we have a Componenet that uses an interface for its props
* The problem is that in react it favors composition so that if you want to change a component you would have to open that file and change it
  * *We could try to see if we can define the type of the child component in an interface*
  * *Somehow this is not recommended, only for advanced complex applications*
  * *The more common way that seems to be recommend is have swich case statements to choose which component to render*
* Somehow it feels that the point of SOLID is to have an enitre application that is only abstractly defined, and all the functionalities, look etc is passed by the main / parent to everything else.
* Might consider using StoryBook for developing components
* React's nature of components favors composition, so a component would almost always depend on another componet thru association.
* The closes way we can achieve flexibility is by defining the Type as general as possible so that a new component can use that type and that new component can be replace the old component that uses that same type.
* gotta figure out how to pass paraments to a prop

* So right now we are using types and passing Component as props to other components 
* CardGallery should take the array of Card data seperate from the Card Component

* **4/24/2024**
* **Reminders**
* The circleblurEffect won't fully work because it also needs to modify css, but that css is currently written in the ProjectCard file and has not been modularized.

* **Notes**
* Choosing between using tradition component composition vs having the prototype of the compotent as a type on the parent component is a matter of the designer choosing what's best for the scale of the project

* **Working Process**
* Now we will continue with styling the CardGallery
  * The grid that the cards should be displayed in.
  * Having the right className for the divs that hold all the carsd
  * Having the right css for those divs
    * Classes:
      * project-grid
      * projects
* Just by surrounding a map output by grid it will place all those items from the map function into a grid as styled by its css
* Let's add the css to body of the project: background color
  * done
* Now we have to add the font
  * done, its just goes on the `public` folder, the url stays the same
* Now we need to create a nav bar.
  * Right now the nav bar and the header are two seperate things and the nav bar is inside the header.
  * Also, We'll need to figure out how to create a nav bar in react again, using router.
    * remember to modify the "active" class with css in the navbar
* Adding the github button 
* The Home page takes a CardProps array but I'm not sure if that should be find, it is a page that has a ProjectCardGallery but still...
* Also shoudl the data be fetched by the highest component and given to the children components that need it or should each component fetch for each data it needs?
  * It seems `Redux` is a common solution that is suggested
  * For the most part have the parent fetch the data and use React Context to pass it to the child. 
    * This makes the childe for reusable, and simple since it's only in charge of display that UI