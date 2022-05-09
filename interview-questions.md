# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: I know that there is a foreign key and a primary key inside of Rails but I can't quite remember specifically which either does. I would have to go back an do a littl more research to figure out what they both mean and how to change them.

  Researched answer: You can fix this mistake by adding a forgein key. To add a forgein key use add_concurrent_forgein_key. The forgein key goes on the belogs_to side and shoule always be the modelname_id and the data type should be integer.



2. Which RESTful routes must always be passed params? Why?

  Your answer: I can't quite remember what a RESTful route is or why it needs to be passed to I would have to do some more research and see if I could find the definition and how they pass to params.

  Researched answer: Get and delete are two routes with params.They are both passing params to the url.



3. Name three rails generator commands. What is created by each?

  Your answer: I'm not quite sure what a rails generator command is so I would be have do some more research and figure out what that means.

  Researched answer: A few critical ralis commands are: rails generate resource- generates a model and also creates resources in the routes, rails generate model- creates a user model, and rails generate controller- creates a new controller.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          

students would be called to GET

action: "POST"   location: /students       

students would be called to POST

action: "GET"    location: /students/new

students/new would be called to GET

action: "GET"    location: /students/2  

students/new/2 would be called to GET

action: "GET"    location: /students/2/edit    

/students/2/edit would be called to GET

action: "PATCH"  location: /students/2      

/students/2   would be called to PATCH

action: "DELETE" location: /students/2      

/students/2  would be called to DELETE

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


1. As a [persona], I [want to create an application], [so that I can manage my to do list].”

2. As a [persona], I [want to follow the process to create a Rails App, database, controller], [so that I can run the server].”

3. As a [persona], I [want to set up a MVP], [so that I can keep track of the experience].”

4. As a [persona], I [want to create a controller method], [so that I can access all the items from the database].”

5. As a [persona], I [want to be able to add information], [so that I can store it in the database].”

6. As a [persona], I [want to create routes], [so that I can submit data to a database].”

7. As a [persona], I [want to link to all of the application], [so that I can navigate through the application easily].”

8. As a [persona], I [want to see a form], [so that I can create new posts].”

9. As a [persona], I [want to click a button], [so that I can submit to my to do list].”

10. As a [persona], I [want to edit my list], [so that I can update my list over time].”