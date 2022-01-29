## Summary
[ASKMOM&DAD](https://askmomanddad.herokuapp.com/) is a social media website, inspired by the website Quora, where users can ask questions on specific topics and get answers from other users, as well as comment on answers that were given.


## Overall Structure
### List of Features
  * Create an account
  * Login and logout
  * Login as a demo user
  * View question feed
  * Search questions by keyword
  * Create questions
  * Add a category to a question
  * Create answers to questions
  * Create comments to answers
  * Edit any of their own posts
  * Delete any of their own posts
  * Posts on Question feed, Question Page, and Answer Page are ordered by most recent
### Back-end
The app was built in express using a sequelize database. The delete function on questions, answers, and comments is an AJAX request that updates dynamically on the page. The rest of the posts requests are form request that re-direct to another page.
### Front-end
The app used Pug to design front-end.
### Libraries used
* bcryptjs for authorization
* express-session for session authentication
* express-validator
* pugjs for front-end development
* sequelize for database management

## ASKMOM&DAD Pages
### User Authentication
When the user signs up to the website, their confirmed password is translated into a hashed string using bcrypt and stored in the database. When the user logs in, their password is rehashed and compared to the same stored value in the database to verify credentials. Authorization restrictions are applied to all paths to limit visibility of pages to logged-in users only.


![GitHub Logo](https://res.cloudinary.com/mabmab/image/upload/v1643492836/askMomDad/home_g6fob4.png)


### Question Feed
When the user signs up or logs in, they are re-directed to this page which displays a list of questions posted by authorized users. The user is able to click on the ASKMOM&DAD logo in the navigation bar to get re-directed to this page at any time. The User is also able to use the search functionality in the navigation bar and filter the question feed to show only questions that include the keyword being searched.

![alt](https://res.cloudinary.com/mabmab/image/upload/v1643492857/askMomDad/Screen_Shot_2022-01-29_at_1.47.33_PM_gbmbrk.png)

### Question Page & Answer Page
When the user clicks on a question in their question feed page, they are re-directed to a Question page with that specific question and all answers relating to that question. Clicking the "Answer" button allows the user to add a new answer to that question.

![alt](https://res.cloudinary.com/mabmab/image/upload/v1643493012/askMomDad/Screen_Shot_2022-01-29_at_1.50.07_PM_g4zqbq.png)

When the user clicks on the comments icon in an answer post on the Question page, they are re-directed to an Answer page with that specific answer and all comments relating to that question. Clicking the "Comment" button allows the user to add a new comment to that answer.

### New Question
When the user clicks on the navigation bar "Add Question", they are re-directed to a form page that allows the user to ask a question, include content for that question, and choose a category for that question.

![alt](https://res.cloudinary.com/mabmab/image/upload/v1643493054/askMomDad/Screen_Shot_2022-01-29_at_1.50.49_PM_lkbhg4.png)

### Edit Question/Answer/Comment
The user will only be able to edit their own posts. When the user clicks on the "edit" button for any of their posts, they are re-directed to a form page that allows the user edit any of their content for their post.

![alt](https://res.cloudinary.com/mabmab/image/upload/v1643493334/askMomDad/Screen_Shot_2022-01-29_at_1.55.28_PM_zuypai.png)

### Delete Question/Answer/Comment
The user will only be able to delete their own posts.  When a user clicks "delete" the question, answer, or comment will be removed from the stream of posts.

![alt](https://res.cloudinary.com/mabmab/image/upload/v1643493394/askMomDad/Screen_Shot_2022-01-29_at_1.56.29_PM_ybapk3.png)
