# Tinder for Games

[Play it here!] (WIP)

## Overview

A simple app in which people can discover new games to play from a pre-generated list, add games to their profile to keep track of and go directly to the game page to download/purchase.


## The Task:

* Build a full-stack application** by making your own backend and your own front-end
* Use a Python Django API** using Django REST Framework to serve your data from a Postgres database
* Consume your API with a separate front-end** built with React
* Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* Have an entity relationship diagram** showing your proposed database schema
* Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers. **ALLOW** time for this.
* Be deployed online** so it's publicly accessible.

---

## Tools Used:

* Back-end:
* pip(env)
* Django
* Python
* Bcrypt
* jsonwebtoken
* PostgreSQL

### Frontend:
* React
* Axios
* Bulma
* SCSS

## The Plan: 
![image](https://user-images.githubusercontent.com/53213823/168068384-a51fce27-d2cb-4ebc-a3c9-794c582d727e.png)

I planned what I thought to be a pretty simple project, seeing as I had done mostly similar things previously and wanted to focus on styling afterwards because I felt my own was lacking previously.


## Wins:

1. Using an async map function was something I didn't think was possible previously but once I got it working it became extremely useful for my project in order to get the result I wanted.

![image](https://user-images.githubusercontent.com/53213823/168069355-75843304-fab2-40b4-9e7f-a3d531ad54a5.png)

2. Again in the above snippet, the Promise.all method made it infinitely easier to get the data I wanted out of the API call, as previous to this it was in series of nested structures that would be a lot of hassle to get it out of, as well as being separate rather than an array I could iterate through later in my return statement. The before and after of the log is quite the transformation!

![screenshot_2022-04-26_at_10 17 58](https://user-images.githubusercontent.com/53213823/168071427-d228aff2-1cfc-4d0f-b693-1188fe5b3b70.jpg)


3. Using splice to cut the game I wanted to from the array made it super clean and concise code.

![image](https://user-images.githubusercontent.com/53213823/168070957-a3c3d1e0-c806-4b85-b565-cef7858abcc9.png)

---

## Key Challenges:

1. Getting the specific data I needed for each part felt a lot harder in Django than in Mongoose. I felt as though I had a lot of time to get familiar with Mongoose but Django I had only been using for around a week at this point. Still a lot to learn.
2. I am not 3 people! This is also a lesson learned but I set my scope of the project way too high and it resulted in me not getting as much done as I wanted. I was used to the amount of work that 3 people could output from my previous project and this seriously hampered my result.
3. The back-end relationships took a while to get my head-around. Similar to my third project, switching back between front and back-end was quite disorientating, even more so because the back-end had much more to it with the relationships than a mongoose backend. I also had much more experience in JavaScript than Python.


---
## Lessons Learned:
1. As mentioned above, setting the scope of the project is really difficult. Coming from Project 3 I thought I could do a lot more than was possible for me in the time given. 

2. Some concepts aren't nearly as simple as they seem. Doing another project with a like/favourite button was definitely a tough one especially on a solo project. That as well as my aim to have actual swipable elements (hence the name of the idea!). I tried implementing this solely with my own CSS but it was really hard to make it responsive so I went with a more simplistic but function design. 

---

## Ideals 

1. Actual swiping!
2. Intelligent suggestions based on previous behaviour from the user (maybe in a few years I'll have some idea how to do this!)
3. Better visualisation of the 'yes' option.
4. Remove games from likes.
