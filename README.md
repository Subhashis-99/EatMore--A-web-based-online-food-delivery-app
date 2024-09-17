
# EatMore - Online Food Delivery App 🍔🍕🍜

EatMore is a feature-rich, innovative online food ordering website, built with ReactJS and powered by cutting-edge technologies like Redux Toolkit, GSAP for animations, and Firebase Authentication. The app offers a seamless and interactive user experience, enabling users to browse restaurants, customize their orders, and track their food deliveries in real-time.


## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Demo](#Demo)
- [Screenshots](#Screenshots)
- [Deployment](#deployment)
- [Contributing](#Contributing)
- [Support](#Support)
- [Acknowledgements](#Acknowledgements)
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

For API keys and other sensitive data, create a .env file(optional) in the project root:
```bash
    REACT_APP_API_KEY = your_api_key
    REACT_APP_SWIGGY_API_URL = your_api_url

```

This application should now be running on localhost. This application should now be running on localhost. If you want to Fork repository and want to run locally, follow this guidelines [Fork and Clone Github Repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).



    
## Demo

You can explore the live version of the EatMore app by visiting: [Live Demo](https://eat-more-a-web-based-online-food-delivery-app.vercel.app/). Here, you can browse restaurants, place orders, and experience the app's features in real-time.



## Screenshots

<table style="width: 100%; border-collapse: collapse;">
  <tr>
    <td style="padding: 10px; text-align: center;">
      <p style="font-weight: bold; margin-top: 5px;">Home Page</p>
      <img src="https://github.com/user-attachments/assets/224aa2e3-029b-4a41-951c-3cc3a25a944f" alt="Home Page" width="500" height="220" style="border: 1px solid #ddd; border-radius: 4px; object-fit: cover;">
    </td>
    <td style="padding: 10px; text-align: center;">
      <p style="font-weight: bold; margin-top: 5px;">Restaurant Page</p>
      <img src="https://github.com/user-attachments/assets/0f3d5c2e-67ad-46dd-8c29-c63713d0ca29" alt="Restaurant Page" width="500" height="220" style="border: 1px solid #ddd; border-radius: 4px; object-fit: cover;">
    </td>
  </tr>
  <tr>
    <td style="padding: 10px; text-align: center;">
      <p style="font-weight: bold; margin-top: 5px;">Search Page</p>
      <img src="https://github.com/user-attachments/assets/92009d45-bb35-4caf-8d7f-39973df36801" alt="Search Page" width="500" height="275" style="border: 1px solid #ddd; border-radius: 4px; object-fit: cover;">
    </td>
    <td style="padding: 10px; text-align: center;">
      <p style="font-weight: bold; margin-top: 5px;">Cart Page</p>
      <img src="https://github.com/user-attachments/assets/fac97663-c747-4ca1-970f-00900423da0f" alt="Cart Page" width="420" height="275" style="border: 1px solid #ddd; border-radius: 4px; object-fit: cover;">
    </td>
  </tr>
  <tr>
    <td style="padding: 10px; text-align: center;">
      <p style="font-weight: bold; margin-top: 5px;">Contact Page</p>
      <img src="https://github.com/user-attachments/assets/4112625d-ad38-4c96-85a8-777da39517ee" alt="Contact Page" width="500" height="190" style="border: 1px solid #ddd; border-radius: 4px; object-fit: cover;">
    </td>
    <td style="padding: 10px; text-align: center;">
      <p style="font-weight: bold; margin-top: 5px;">LogIn Page</p>
      <img src="https://github.com/user-attachments/assets/07f7a9d2-6102-4c19-8e0f-32f61e07a587" alt="LogIn Page" width="300" height="180" style="border: 1px solid #ddd; border-radius: 4px; object-fit: cover;">
    </td>
  </tr>
  <tr>
    <td style="padding: 10px; text-align: center;">
      <p style="font-weight: bold; margin-top: 5px;">Footer Page</p>
      <img src="https://github.com/user-attachments/assets/b6a6fe0e-9172-494f-a842-d099bac6705b" alt="Footer Page" width="500" height="220" style="border: 1px solid #ddd; border-radius: 4px; object-fit: cover;">
    </td>
    <td style="padding: 10px; text-align: center;">
      <p style="font-weight: bold; margin-top: 5px;">FAQ Page</p>
      <img src="https://github.com/user-attachments/assets/917d3462-f5a7-4fae-84ad-d8c3323e9631" alt="FAQ Page" width="500" height="220" style="border: 1px solid #ddd; border-radius: 4px; object-fit: cover;">
    </td>
  </tr>
</table>













## Deployment
EatMore is deployed on Vercel for easy and scalable hosting. To deploy your own version:

-  Create a Vercel account if you don’t have one.

- Connect your GitHub repository to Vercel.

- Set your environment variables on Vercel (e.g., API keys, Firebase config).

- Vercel will automatically deploy the project once connected, and your app will be live at the Vercel domain.




## Contributing

Contributions to EatMore are always welcome! If you'd like to contribute, please follow these steps:

- Click the "Fork" button at the top right of the repository page on GitHub. 

- Run the following command to   clone your fork:
```bash
  git clone "git clone https://github.com/yourusername/eatmore.git" 
```
- Create a new feature branch and switch to it
```bash
  git checkout -b feature/new-feature
```
- Stage and commit your changes with a descriptive message:
```bash
  git add .
  git commit -m 'Add new feature'
``` 
- Push your branch to your forked repository:
```bash
 git push origin feature/new-feature
``` 
- Go to the "Pull Requests" section of the original repository and click "New Pull Request". Select your branch and submit the pull request for review.

**Additional Information**
- For more detailed guidelines on how to contribute, refer to the contributing.md file in the repository.
- Please adhere to this project's Code of Conduct. It helps ensure a welcoming and respectful environment for everyone involved.

Your contributions help make EatMore better for everyone. Thank you for your interest and effort in improving the project!



## Support

For support, email spraharaj26@gmail.com.

You can also connect with me on [LinkedIn](https://www.linkedin.com/in/subhashis-praharaj) for professional networking and updates.


## Acknowledgements
A special thanks to Swiggy for providing live API data to enhance our platform.


## License


This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
