# FAM - Flowers As Medicine

#### For centuries, cultures around the world have utilized the therapeutic properties of certain flowers in their daily lives. This site allows the user to read about the benefits of medicinal flowers/herbs. Also, users are able to leave comments about how they have used the flower as medicine (brewed the pedals in a tea, used the buds as a topical ointment, etc.)

#### Set Up Instructions:
This API is using the following:
- Express version 4.17.1
- MongoDB: version 3.4.0
- Mongoose: version 5.8.1

1. Models and Routes for Users, Posts, and Comments are located in the app folder.
2. The seed folder containes userseed.js, a file that establishes the admin credentials
3. The endpoints for authentication, posts, and comments are shown below. 

### Authentication:
| Action | Method | Path |
| ----------- | ----------- | ----------- |
| Sign-Up | POST | /sign-up
| Sign-In | POST  | /sign-in
| Change-Password |  PATCH | /change-password
| Sign-Out | DELETE | /delete


### Posts: (*Admin Only*) (Token Required)
| Routes | Method | Path |
| ----------- | ----------- | ----------- |
| Create | POST | /posts
| Index | GET | /posts
| Show | GET | /posts/:id
| Update | PATCH | /posts/:id
| Delete | DELETE | /posts/:id



### Comments: (Token Required)
| Routes | Method | Path |
| ----------- | ----------- | ----------- |
| Create | POST | /comments
| Update | PATCH | /comments/:commentId
| Delete | DELETE | /comments/:commentId

## Other Important Links & Resources Used:


- [Front End Repo](https://github.com/faithfitts/FAM)
- [Deployed API](https://fast-fjord-69255.herokuapp.com/)
- [Deployed App](https://github.com/faithfitts.github.io/fam/)

**Website Resources**
- [fernsnpetals](https://www.fnp.com/article/which-flowers-are-used-profusely-in-medicine)
- [healthline](https://www.healthline.com/nutrition)
- [stackOverflow](stackOverflow.com)
- [webmd](webmd.com)
- [Univ. of Rochester encyclopedia](https://www.urmc.rochester.edu/encyclopedia.aspx)

## Planning and Story: Development Process and Problem-Solving Strategy:

### Planning:
- I have a background in biology/pre-med and I love Botany and studying about different flowers. Therefore, for this project I wanted to work on something I love talking about and explaining to others. I began by creating user stories so I had a clear idea of the features I wanted my app to contain. Next, I made an ERD so I could visualize the relationships between my different resources (the user, the posts, and the comments). Lastly, I created a wireframe to get an idea of how version 1 would appear to the user.

### CRUD Posts & Comments:
- First, I built the models for post and comments. Next I updated the user model to include a username because I wanted to be able to display it with a greeting in the nav bar when a user signed-in. From the beginning of the project I knew that I wanted to have an admin feature, so I included an admin schema in the models, but left it commented out until I had a better understanding of how to implement it. Finally, I updated the user route so that I could implement the username feature and I created a route for post and another for comments. All routes were tested   (using Postman) before moving on to the front-end app.

### Problem-Solving:
- I did a lot of research regarding how to seed a database. After collaborating with one of my instructors, we were able to create a seed that ensured the admin could have separate features from a normal user.

## Technologies Used:
- Express
- MongoDB
- Mongoose
- JavaScript
- Passport
- Bcrypt
- Crypto

## Future Iterations:
- Add a like button for users
- Add a search feature

## ERD:
![ERD](https://i.imgur.com/0ac3LA3.png "ERD")
