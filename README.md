[![Contributors][contributors-shield]][contributors-url]
[![Languages][languages-shield]][languages-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO & HEADER -->
<br />
<p align="center">
  <a href="http://www.githiredapp.netlify.app">
    <img src="git-hired-client/public/images/githiredlogo.png" alt="Logo" width="50%">
  </a>

  <h3 align="center">GitHired</h3>
  <h4 align="center">Git the developer job you really want.</h4>

  <p align="center">
    GitHired takes the long and drawn out days of searching for your perfect development career and does all the hard work for you. The home page features the most recent job listings from the FindWork Jobs API, and has a search feature where the user can filter through job postings by keywords (such as python, react, chai, etc.), location, and/or remote work to narrow down and simplify the job hunt.
    <br />
    <br />
    <a href="https://github.com/alynapchuk/git-hired-app/issues">Report Bug or Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

<u>Key Focuses</u>
* Implement the FindWork Jobs API to map through current job postings and filter through parameters.
* Display the job postings and details in a clear and concise way to improve user functionality.
* Provide direct links to the jobs which users would like to apply to.

Ideally in the future I would like to also include the Google Maps API to autocomplete the location input, and possibly include a resources component with helpful links and articles related to software development roles.


[![Product Name Screen Shot][product-screenshot]](https://example.com)

### Built With

* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Get a free API Key at [FindWork Jobs API](https://findwork.dev/developers/)

Install npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

Clone the Repository

   ```sh
   git clone https://github.com/alynapchuk/git-hired-app.git
   ```
   
Install NPM packages

   ```sh
   npm install
   ```
   
Enter your API in `proxy.js`

   ```JS
   const API_KEY = fetch("https://findwork.dev/api/jobs/", {
  headers: {
    Authorization: "Token xxxx"
  }
});
   ```


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/alynapchuk/git-hired-app/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Branch (`git checkout -b yourbranch/Contribution`)
3. Commit your Changes (`git commit -m 'added amazing feature'`)
4. Push to the Branch (`git push origin yourbranch/Contribution`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact
Alyna Palamarchuk - [Portfolio](https://alynapchuk.com) - [Twitter](https://twitter.com/alynapchuk) - alynapchuk@gmail.com



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
[GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet) - [Img Shields](https://shields.io) - [Choose an Open Source License](https://choosealicense.com) - [GitHub Pages](https://pages.github.com) - [Animate.css](https://daneden.github.io/animate.css) - [Loaders.css](https://connoratherton.com/loaders) - [Slick Carousel](https://kenwheeler.github.io/slick) - [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll) - [Sticky Kit](http://leafo.net/sticky-kit) - [JVectorMap](http://jvectormap.com) - [Font Awesome](https://fontawesome.com)





<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/alynapchuk/git-hired-app?color=219ebc&style=for-the-badge
[contributors-url]: #

[languages-shield]: https://img.shields.io/github/languages/count/alynapchuk/git-hired-app?color=90ab60&style=for-the-badge
[languages-url]: #

[forks-shield]: https://img.shields.io/github/forks/alynapchuk/git-hired-app?color=f5af00&style=for-the-badge
[forks-url]: #

[issues-shield]: https://img.shields.io/bitbucket/issues-raw/alynapchuk/git-hired-app?style=for-the-badge
[issues-url]: #

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/alynapchuk/

[product-screenshot]: images/screenshot.png
