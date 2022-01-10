# Rocketship-Challenge-2022 (Spacestagram: Image-sharing from the final frontier)

<a name="descsection"></a>
## Description

The purpose of this project was to share photos from one of NASA's APIs and to help Shopify extend their mission to everyone in the universe.   This site was created using handlebars, bootstrap, font awesome, javascript, html, and css.  The user is able to like/unlike their favorite photos, render new images, and expand content in order to learn more about the images of their choosing.  When a user clicks the image or video, the media opens in a new tab. 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
1. [ Description. ](#descsection)
2. [ User Story. ](#usersection)
3. [ Acceptance Criteria. ](#acceptancesection)
4. [ Installation. ](#installsection)
5. [ Usage. ](#usagesection)
6. [ License. ](#licensesection)
7. [ Contributing. ](#contribsection)
8. [ Questions. ](#questionssection)
9. [ Screenshots. ](#picsection)
10. [ Links. ](#linksection)
11. [ Resources/Credit. ](#creditsection)

<a name="usersection"></a>
## User Story
```
AS A USER, I want to be able to view photos from one of NASA's image APIs
so that I can like and unlike posts and learn more about how I can make commerce better for the entire universe
```

<a name="acceptancesection"></a>
## Acceptance Criteria
```
  WHEN I load the page then I am presented with four images from a NASA API
  THEN I am able to see the title of the image, date of capture, and more content
  WHEN I click the like button, I am able to like/unlike the image
  WHEN I click the "I want more" button, four new images are rendered
  WHEN I click on an image, I am taken to a new tab with the url of that image/video
  WHEN I hover over the "Welcome" my mouse turns into a star and I am able to click a hidden button
  WHEN I click the hidden button, then I presented with an about Laurel page
  THEN I am able to learn more about Laurel and why she would be a great addition to the Shopify team
  
```

<a name="installsection"></a>
## Installation
* Clone the repository using:
```
git clone https://github.com/laurelthorburn/Rocketship-Challenge-2022.git
```
* Ensure you are in the current working directory
* Open terminal in working directory and type:
```
npm init
```
* Install dependencies by opening the terminal (ctrl + j on windows) and running:
```
npm install
```

<a name="usagesection"></a>
## Usage
*  After following user installation guide above, open root folder in the integrated terminal and type in the following:
```
npm run start (only works if nodemon is installed)
```
* Open your localhost:3001 
* Enjoy!

<a name="licensesection"></a>
## License
Copyright <2021>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  <a name="contribsection"></a>
## Contributing
  
This is a private project and is not taking contributors at this time.  Instead, please leave an encouraging comment and cross your fingers that I get an interview!

  <a name="questionssection"></a>
## Questions?
  Want to see more of my work? [Click here!](https://github.com/laurelthorburn)

  Questions/comments/concerns? Please send an email to codinglaurel@gmail.com

  <a name="picsection"></a>
  ## Screenshots
  ![Screenshot of homepage](./public/media/screenshot2.png)
  ![Screenshot of logging into blog](./public/media/screenshot1.png)
  ![Screenshot of dashboard](./public/media/screenshot3.png)

  <a name="linksection"></a>
  ## Links
  
  Deployed Heroku Site: Coming soon

  Github Site: Coming soon

  <a name="creditsection"></a>
## Resources/Credit
* 


Spacestagram: Image-sharing from the final frontier

For the purposes of this project, Shopify is extending our mission to Make Commerce Better for Everyone to include the whole entire universe. Please build us an app to help share photos from one of NASA’s image APIs.
The Challenge
We need a webpage that can pull images, and allow the user to “like” and “unlike” their favourite images.

We'd like a simple to use interface that makes it easy to:
Fetch data from one of NASA’s APIs and display the resulting images (more details under Technical Requirements)
Display descriptive data for each image (for example: title, date, description, etc.)
Like an image
Unlike an image
Technical requirements
Search results should come from NASA’s free APIs, for which you’ll need a free API key from https://api.nasa.gov - 
you do not need to enter anything more than your first name, last name, and email address (i.e. application url is not required)
We’ve provided screenshots below of demo apps we built using the Astronomy Picture of the Day or Mars Rover Photos APIs (along with Shopify’s open source React component library: Polaris). 
You are free to use any NASA API you like
You are free to use any front end framework/component library you like (or none at all!)
Each image result should list at least a title, date of capture (ideally in earth_date) and a button to “like” that image.
Each image can be “liked”, and a user should be able to undo their “like”
The HTML that ends up being served client-side should be accessible and semantic (MDN reference)
Example screenshots (:
Extras

There is a lot to be improved on here, you can polish the required features by crafting a nicer design, or improve the app by adding new features! Choose something that you feel best showcases your passion and skills.

If you need inspiration, here are examples of what you can work on. If you work on these ideas, we recommend choosing only one or two.


Save likes if the user leaves or reloads the page
Animate the “like” action (might we suggest a heart?)
Add a loading state while we wait for NASA’s API to return data
Create shareable links for each image
Add a date-picker to be able to browse photos starting from a specific date
Submission

Please submit your application via “Apply Now” and make sure you include:
 A link to your hosted code so we can test it (Free hosting available via: CodeSandbox, Github pages, Netlify and Heroku)
 A link to your Github repository containing the code
 Any other notes you'd like us to consider alongside the page