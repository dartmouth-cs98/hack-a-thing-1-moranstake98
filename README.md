# The Attempt

We were interested in using APIs in some form for our final project, so we wanted to work on implementing and using APIs in our hack-a-thing. We decided an easy way to play with APIs would be by creating a "dating site" and then using different APIs to match users. We researched APIs together and found a few different ones (including a horoscope API and a love calculator API) that we thought would be a nice way to match users. We decided to user React and a Firebase backend (which we had been exposed to briefly in CS52) to create our site so we could focus on API implementation.


# The Breakdown

We started by brainstorming together and researching APIs we could potentially use based on popular APIs recommended by Google searches as well as the link from the first CS98 powerpoint. From here:
 * ANNIKA: took on setting up Firebase and connecting it to our project, diving deeper into the docs and usage instructions for the tool. Specifically worked with authentication and getting users into our database as well as protecting information. Then set up the barebones of the site in order to apply our APIs to match the users.
 * MORGAN: tried (forever) to connect each of our APIs to the site. Numerous discussions with Tim and numerous APIs attempted. A slightly frustrating task. Eventually made up her own way of matching people through a randomized algorithm.

# Findings

We learned that authentication is HARD and very finnicky. We also learned that there are tons of nuances when it comes to backends and you really have to master each one that you take on. We also refreshed our web app skills since it's been a few years since we had the pleasure of taking CS52. Finally, we learned that even though APIs may seem functional and useful doesn't mean you can  rely on them to be maintained or even work as they say they do! It's very important if we use APIs in the future to have a back up plan in the case that they don't work and we have to write something manually or pivot in another direction. We also realized that if we use an API we want to use one from a super trustworthy and dependable source so it doesn't just stop working month 4 of this course.

# What Didn't Work

Firebase authentication. For a long time. Since our idea was based on users, it was essential that we were able to store data regarding who was logged in and when. Even though Firebase makes authentication more simple than doing it completely manually, you have to make sure you are following the documentation to a T. Similarly, setting up tools you plan to use (like Firebase) can take a lot more time than expected. We should factor this in and realize that putting in time up front will help us in the long run, but that we should expect not everything to be as easy as the documentation suggests. Finally, we learned there is a HUGE difference between a Cloud Firestore and a Realtime Database in Firebase, even though they don't prompt you for which you want to create.

# Resources We Drew On

Firebase documentation, React documentation, StackOverflow for specific issues or method functionalities. Looked back at Lab 3 of CS52 when Firebase was being weird, but most of weirdness was linked to authentication which we hadn't done.
