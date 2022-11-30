# Liferay Angular Survey Dashboard Remote App

This project was created to give an example about how to use Angular Custom Element with Liferay as a Remote App

Angular Survey Dashboard will enable you to present your surveys results in charts dynamiclly, you will need to configure the form id and then the app will dynamiclly render a chart per each element in your survey.
## How To Use
- Upload the angular JS file and CSS file to Liferay Document And Media
- Create a Liferay remote app
- Provide the JS and CSS URL
- For the HTML Element Name type "lr-dashboard"
- Publish the Remote App
- Edit your page and add the remote app to the page, once its in your page, configure it and provide the following property
  - form-id=< Liferay form ID >

## How to build
in order to build Liferay Angular Gallery, you will need to follow the below steps:
- Run the following command:
  - npm run build-element
- Once the command is excited, a folder with the name "dashboard-build" will be generated, inside that folder you will find the required JS and CSS files.

