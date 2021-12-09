<p align="center">

# Magic(ul) File Uploader API!
<img src="https://media.discordapp.net/attachments/696316575619481602/918518075932938260/unknown.png">

This application was part of a code challenge from [Magicul](www.xd2sketch.com). You can check out the challenge by clicking over [here](https://github.com/XD2Sketch/full-stack-coding-challenge).

This part of the challenge consist of an API that serves the frontend application. The [frontend application](https://github.com/philipep-galdino/magicul-challenge-frontend) built for the same purpose - a file uploading application.

# Catalogue
  - [About the challenge](#about-the-challenge)
  - [About the techies](#about-the-techies)
  - [Project Gitflow](#the-project-gitflow)
  - [How to set up](#how-to-set-up)
  - [Final Conclusion](#final-conclusion)

# About the challenge

This File Uploader application was requested to demonstrate my skills developing an application across the entire [Magicul](www.xd2sketch.com)'s stack. This does includes frontend, backend and database knowledge.

The whole architecture has been split into two separate repositories, as requested. This API basically sets up RESTful Endpoints for creating communication for the frontend.

It was required to follow a TDD, Clean Architecture standard, and it was mostly done as wished, as tests were added after the full development of features.

### About the techies

There was a required stack for this challenge - I went a little bit beyond it. The techies stack used for this project-challenge exactly was:

- NodetJS with Typescript
- TypeORM for relational mapping
- PostgreSQL as the Database
- Jest for automated testing

You can also check out the [frontend stack](https://github.com/philipep-galdino/magicul-challenge-frontend#about-the-techies).

Working wiht PostgreSQL was an adventure for me, I had little work with sql databases before, but I'm not that rusty, as I noticed.

# The Project Gitflow

It was required to show off some Gitflow. Other than the frontend, here I did use a branching for features and the closets to a real-world Gitflow I'd have in a project. This gitflow consists of commit standards and branching for features.

As far as new features always come along, I thought it was nice to show how I would set up a good gitflow for this. In a real world project, I would use branches for not only features, but mostly everything I would need to do, just like so:

- feature/update-here
- fix/update-here

or probably even use codenames for tasks in branches. Imagine you'd have a task named as TASK-487. That would be the branch name, `TASK-487`, with a commit standard just as:

- 'feat' for Feature addition
- 'update' for updates on already existing features
- 'fix' for fixes on already existing features

And also, still following a pattern on writing commits, just as stating: 'Added bla-bla and Adjusted bla-bla' with keywords for what has been done within that commit.

# How to set up

To set up this project in your machine, you'd have to create a development environment. Firstly, set up PostgreSQL and create a database that you'll be using for this project. Don't forget to check out our `.env` file for what's required to set up the database and configurate as it should.

After setting up the database, you'd clone our project and then change our environment variables values. In this repository, we use `npm`, so you'd follow these steps:

```
git clone https://github.com/philipep-galdino/magicul-challenge-frontend
```

```
npm i
```

```
npm run dev
```

# Final Conclusion

This was not the most challenging, but the most fun I've ever had during it's development. I love backend, and working with such a nice stack is always cool. It's been long time I've used TypeORM, and I never actually had set up a PostgreSQL project before, this was my very first time working with it, and it was quite well.

What challenged me in the frontend was just my adventure-side working on the backend. As I would come here and set up the required features, I would then work around ideas and see if I could get them working too, and it was just fun.