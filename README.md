<div id="top"></div>

# [Developer Profiles](http://developer-profiles-app.herokuapp.com/)<br>
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
        <li>
            <details>
               <summary><a href="#features">Features</a></summary>
                  <ul>
                     <li><a href="#search-developer">Search Developer</a></li>
                     <li><a href="#Add-developer">Add developer</a></li>
                     <li><a href="#Developer-info">Developer Information</a></li>
                  </ul>
            </details>
	</li>		
        <li><a href="#api">API</a></li>
      </ul>
    </li>
    <li><a href="#Enhancement">Enhancement</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

Developer profile is an ERN(Express, React, Node) web application developed from UI design, where user can easily create their developer profile for storing multiple profile links of a developer in a single shareable page.

Here's why:
* To visit/Share developer's github repositories and social/coding media platforms like CodeChef, HackerRank, Medium, LinkedIn, Twitter at one place.

![image](https://github.com/sumedha1308/dev-profile/blob/master/src/resources/dev-profile-homepage-image.png)

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [expressjs](http://expressjs.com/)
* [react](https://reactjs.org/)
* [nodejs](https://nodejs.org/en/docs/)
* [css](https://devdocs.io/css/)
* [Advance css](https://css-tricks.com/snippets/css/)
* [heroku](https://dashboard.heroku.com/login)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is set of instructions and information to use Utility Apps website.

### Prerequisites

* Internet.
* Any Web Browser.

<p align="right">(<a href="#top">back to top</a>)</p>

## Features

### Search Developer

![image](https://github.com/sumedha1308/dev-profile/blob/master/src/resources/dev-profile-sumedha.png)

<p align="right">(<a href="#top">back to top</a>)</p>

### Add developer

![image](https://github.com/sumedha1308/dev-profile/blob/master/src/resources/add-developer-form.png)

<p align="right">(<a href="#top">back to top</a>)</p>

### Developer Information

![image](https://github.com/sumedha1308/dev-profile/blob/master/src/resources/developer-info-icons.png)

<p align="right">(<a href="#top">back to top</a>)</p>

## API 

<p> Get all developers: </p>

<br>

```
GET /api/developers/
Sample Response Body:
[{
	"id": "gcnit",
	"avatar_url": "https://avatars.githubusercontent.com/u/4833751?v=4"
}, {
	"id": "sagarjain0907",
	"avatar_url": "https://avatars.githubusercontent.com/u/20463272?v=4"
}]
Status: 200

```

<br>
<p align="right">(<a href="#top">back to top</a>)</p>
<p>Add a developer: </p>
<br>

```
POST /api/developers/
Sample Request Body:
{
	"github_id": "gcnit",
	"linkedin_id": "gcnit",
	"codechef_id": "gc_nit",
	"hackerrank_id": "gcnit",
	"twitter_id": "gc_nit",
	"medium_id": "gc_nit"
}

Sample Response Body:
{
	"id": "gcnit"
}
Status: 201 (User Created), 400 (GitHub username is invalid)
```

<br>
<p align="right">(<a href="#top">back to top</a>)</p>
<br>
<p>Get a developer: </p>
<br>

```
GET /api/developers/:id/
Sample Response Body:
{
	"id": "gcnit",
	"avatar_url": "https://avatars.githubusercontent.com/u/4833751?v=4",
	"name": "Gaurav Chandak",
	"company": "workat.tech",
	"blog": "https://workat.tech",
	"location": "Bangalore, India",
	"email": null,
	"bio": "Building workat.tech;\r\nPreviously Software Engineer at @Flipkart, @microsoft and @tracxn",
	"github_id": "gcnit",
	"linkedin_id": "gcnit",
	"codechef_id": "gc_nit",
	"hackerrank_id": "gcnit",
	"twitter_id": "gc_nit",
	"medium_id": "gc_nit",
	"repos": [{
		"name": "awesome-learn-to-code",
		"html_url": "https://github.com/gcnit/awesome-learn-to-code",
		"description": "A list of awesome resources for learning to code",
		"updated_at": "2020-08-12T18:21:53Z"
}]
}
Status: 200 (Valid User), 404 (User does not exist)
```
<br>
<p align="right">(<a href="#top">back to top</a>)</p>
<br>
<p>Remove a developer </p>
<br>

```
DELETE /api/developers/:id/

Status: 204 (Deleted)
```
<br>
<p align="right">(<a href="#top">back to top</a>)</p>


<!-- Enhancement -->
## Enhancement

* Can make frontend more catchy for small screen size.
* There is always scope to improve coding standards.


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Sumedha Deshpande - [Linkedin](www.linkedin.com/in/sumedha1308) - sumedhasd1308@gmail.com

Project Link: [Utility Apps](https://github.com/sumedha1308/UtilityAppWebsite)

<p align="right">(<a href="#top">back to top</a>)</p>
