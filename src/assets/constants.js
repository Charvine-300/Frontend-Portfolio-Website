import Marvel from './images/project_marvel.jpeg'
import Coffee from './images/project_coffee.jpeg'
import Netflix from './images/project_netflix.jpeg'
import Quotus from './images/project_quotus.jpeg'
import Shopper from './images/project_shopper.jpeg'
import IPFind from './images/project_ipfind.jpeg'
import Afiari from './images/project_afiari.jpeg'
import Rick from './images/project_rick.jpeg'
import Lendsqr from './images/project_lendsqr.jpeg'


//Content for projects component
export const projectList = [
    {
        id: 1, 
        name: 'Shopper', 
        img: Shopper,
        url: 'https://qshop-assess.vercel.app/', 
        description: ' An eStore for the Shopper brand, a fictional retail company that provides a wide range of products and services to customers all over the globe. Built with React.js, Bulma, Vite frontend tool, and Redux Toolkit.'
    },
    {
        id: 2, 
        name: 'IPFind', 
        img: IPFind,
        url: 'https://ipfind-tracker.vercel.app/', 
        description: ' A web application built to track IP addresses. Providing information like the location, Internet Service Provider and Timezone of the aforementioned IP address. Built with Next.js, Vanilla CSS, and Axios.'
    },
    {
        id: 3, 
        name: 'Lendsqr', 
        img: Lendsqr,
        url: 'https://chidera-ezenwekwe-lendsqr-fe-test.vercel.app', 
        description: ' An application that powers lenders to build, launch, and scale their digital lending business across multiple channels, at the lowest cost. Built with React.js, Typescript, React Context API and SASS.'
    },
    {
        id: 4, 
        name: 'Rick and Morty', 
        img: Rick,
        url: 'https://rick-and-morty-lovat-alpha.vercel.app/', 
        description: ' A web application that displays the list of characters on the animated series, Rick and Morty. It consists of various sections filtering the characters by their species alongside snippets of information on each character. Builtd with React.js, Rick and Morty GraphQL API, and TypeScript.'
    },
    {
        id: 5, 
        name: 'CoffeeDonuts', 
        img: Coffee,
        url: 'https://coffee-donuts.vercel.app/', 
        description: 'A web application built for the convenience of placing your orders to the CoffeeDonuts Cafe from the comfort of your home. This is an online order pickup app. Built with React.js and SASS.'
    },
    {
        id: 6, 
        name: 'Popular Movies', 
        img: Netflix,
        url: 'https://popular-movies-blush.vercel.app/', 
        description: 'A web application built to showcase a list of the most popular movies worldwide and information on them. Built with Next.js, TypeScript, CSS Modules, and Axios.'
    },
    {
        id: 7, 
        name: 'Quotus', 
        img: Quotus,
        url: 'https://quotus-randoquotes.vercel.app/', 
        description: 'A web application built to provide random quotes integrated from the Advice JSON API. Built with Next.js, TypeScript, and CSS Modules.'
    },
    {
        id: 8, 
        name: 'Contact Form', 
        img: Afiari,
        url: 'https://afiari-assess.vercel.app/', 
        description: 'This is a contact form built to acquire and store information from its users. Built with React.js, TypeScript, localStorage, Styled-components, animate.css, and Postman Countries & Cities API.'
    },
    {
        id: 9, 
        name: 'Captain Marvel', 
        img: Marvel,
        url: 'https://captain-marvel.vercel.app/', 
        description: 'This is a clone of the Captain Marvel Homepage. Check outthe comment section, that part was developed to test out the Marvel Comics API. Built with React.js, SASS, Marvel Comics API, and React-Router-DOM.'
    },
]