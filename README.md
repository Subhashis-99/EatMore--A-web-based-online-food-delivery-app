
# EatMore - Online Food Delivery App 🍔🍕🍜

EatMore is a feature-rich, innovative online food ordering website, built with ReactJS and powered by cutting-edge technologies like Redux Toolkit, GSAP for animations, and Firebase Authentication. The app offers a seamless and interactive user experience, enabling users to browse restaurants, customize their orders, and track their food deliveries in real-time.


## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [FAQ](#faq)
- [Contributing](#contributing)
- [Deployment](#deployment)
- [License](#license)

## Features
- **Chatbot Powered by Dialogflow**: Interactive chatbot providing real-time assistance within the app.
- **Shimmer UI**: Modern and engaging UI featuring shimmer effects for loading states.
- **Live API Data from Swiggy**: Real-time restaurant and menu data fetched using Swiggy's public API.
- **CORS Extension for API Access**: Configured to handle Cross-Origin Resource Sharing (CORS) when fetching live data from Swiggy's public APIs.
- **Multi-Select Cuisines Filter**: Filter restaurants based on multiple cuisine preferences.
- **Real-Time Email Notifications**: EmailJS integration for sending real-time notifications and promotions.
- **Custom Accordion Components**: Enhances the user interface by organizing content dynamically.
- **Cart Functionality**: Add, review, and remove items from the cart, with the ability to customize orders.
- **Firebase Authentication**: Secure login functionality with Firebase.
- **Online/Offline Status Indicators**: Keeps users informed of the app’s current status.
- **Smooth Scroll & Animations**: GSAP and ScrollTrigger are used to create smooth animations and transitions.
## Technologies Used
- **Frontend**: ReactJS, TailwindCSS
- **State Management**: Redux Toolkit, Context API
- **Routing**: React Router DOM
- **Styling & Animations**: TailwindCSS, GSAP, ScrollTrigger
- **Email Service**: EmailJS
- **Chatbot Integration**: Dialogflow
- **Testing**: React Testing Library, Jest
- **Build Tools**: Parcel Bundler, Babel
- **Authentication**: Firebase
- **UI Enhancements**: React Hot Toast for notifications, Lensi for smooth scrolling effects
## 🔥Installation

You need to write the following commands on the terminal screen(in vscode) so that you can run this project locally.

```bash
  git clone "https://github.com/chetannada/Namaste-React.git"
```

Go to the project directory
```bash
  cd Namaste-React
```

Install dependencies
```bash
    npm install
```

Start the server
```bash
    npm run start
```

    
## Deployment
EatMore is deployed on Vercel for easy and scalable hosting. To deploy your own version:

-  Create a Vercel account if you don’t have one.

- Connect your GitHub repository to Vercel.

- Set your environment variables on Vercel (e.g., API keys, Firebase config).

- Vercel will automatically deploy the project once connected, and your app will be live at the Vercel domain.




## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?


![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


## Related

Here are some related projects

[Awesome README](https://github.com/matiassingers/awesome-readme)


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Support

For support, email fake@fake.com or join our Slack channel.


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Used By

This project is used by the following companies:

- Company 1
- Company 2

