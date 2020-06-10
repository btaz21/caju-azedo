# Caju App

==================================

## Description
The name of this app was inspired by a fruit found in the tropical climes of Northeastern Brazil. Although not the most pleasant fruit when eaten raw, a little ingenuity is all it takes to make this one of the most delicious fruits of the world. The purpose of this app is to inspire you to use that same ingenuity in cataloguing your favorite foods, dishes, ingredients, and recipes, and to craft mealplans around your new discoveries.

This app allows you to:

1. Create a user profile with all the functionality of the app included and unique to each user.
2. Add dishes that you've eaten or want to eat replete with an image, description, recipe link, and other details.
3. Edit and/or delete your dishes
4. Add mealplans based on your dishes
5. Edit and/or delete your mealplans

## Link to App
[Caju App](https://cajuapp.herokuapp.com/)

## Installation
No installation necessary as this app runs straight from the browser.
Tested on: Chrome for macOS: 81.0.4044.138

## Roadmap
1. More details on the show page for each dish.
2. Create global dish index to allow other users to look at, add to their own dish index or mealplan.
3. Integrate jquery for some additional functionality (i.e. when you populate index with dishes, sidetab goes away AND/OR an option to toggle on/off the show page details)

## Technologies Used
Full-stack, CRUD app utilizing the following technologies:
*Node.js
*MongoDB / Atlas
*Express.js
*Javascript/HTML5/CSS3
*Mongoose
*Additional express dependencies: bcrypt, EJS, express-flash, express-sessions, method-override, dotenv

## Challenges
1. One of the big challenges in getting this app to function as a real app was to incorporate the food and mealplan schema into the user schema. This allowed me to have a user create his own account with dishes and mealplans separate from the other users of the app. It took a while and required reconfiguring all the different routes so that they modified the user schema.

## Unsolved Problems
1. One of the biggest issues I had was using mongoose to manipulate the data when its heavily nested within the dataset. One workaround is to pull the whole dataset out, manipulate it with javascript, and then perform a doc.save(). This doesn't seem to work every time, however, as mongoose really likes to preserve the data.
2. CSS wonkiness - mobile form/inputs. Can't get the form and input tags to style the same on mobile as they do on desktop.
