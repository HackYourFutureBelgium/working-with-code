# Week 1

* [Prep Work](#prep-work)
* [Lesson Plan](#lesson-plan)
* [Assignments](#assignments)

---

## Prep Work

Materials to read, review, and practice before coming into class/

1. Watch at least the first 3 videos of [Git & GitHub for Poets](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV).  This is an outstanding video series that will help you understand why you need Git & GitHub, with no coding yet!
2. Read through [the HYF Be Precourse](https://github.com/hackyourfuturebelgium/precourse) if you haven't already.
3. Familiarize yourself with the [Homework Submission Process](http://github.com/hackyourfuturebelgium/homework-submission) here at HYF.

---

## Lesson Plan

* [Live slide show](https://hackyourfuture.be/working-with-code/week-1)

---

## Assignments

Your homework this week is all about getting ready for a successful time at HYF.  Without drowning in code you will ...

* Organize your computer so your work doesn't get lost in random folders
* Practice the homework submission process
* Get acquainted with Git, GitHub and GitKraken
* Send your first pull request to an open source project
* Practice writing code on VSC with linting, auto-formatting & live preview.
* Learn to push & pull your code between your computer and GitHub

There are 5 assignments, 2 on your computer and 3 on GitHub:

1. [(computer) Software Installations](#software-installations)
1. [(computer) Start an HYF Directory](#hyf-directory)
1. [(GitHub) Pull Request to "student-bios"](#student-bios-pull-request)
1. [(GitHub) Set Up Your hack-my-future Repo](#hack-my-future)
1. [(GitHub) Push Your Markdown Home Page](#markdown-home-page)

To Help you get a hang of the homework submission process and to make sure you get everything done, we've provided a template issue in your class repository.  If you haven't already head over there, create a new issue from the template, and add it to your class' `Working with Code` project board.

---

### Software Installations

Make sure you have all of these softwares installed on your computer:

* [Chromium](https://download-chromium.appspot.com/), [Firefox](https://www.mozilla.org/en-US/firefox/developer/) & [Chrome](https://www.google.com/chrome/): All great browsers with ES6, HTML5 & CSS3 support plus pre-installed, top-knotch developer tools. Be sure to test your projects on all 3!
* [Visual Studio Code](https://code.visualstudio.com/download): Like Microsoft Word, but for code ...  and _sooooo_ much better.  After installing VSC, be sure to install these plug-ins:
    * [Markdown Preview Github Styles](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles)
    * [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
    * [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode#overview)
    * [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
* [GitKraken](https://www.gitkraken.com/download): A program that will help you master using git.
* (If you have windows) [Git For Windows](https://gitforwindows.org/): This will allow you to use the same terminal commands & tools as Linux or Mac computers.
* Slack: How you will communicate with HYF, classmates & coaches
   * For Mobile: [App store](https://itunes.apple.com/nl/app/slack/id803453959?mt=12) or [Google Play](https://play.google.com/store/apps/details?id=com.Slack&hl=nl)
   * For Desktop: [OSX](https://slack.com/downloads/osx), [Linux](https://slack.com/intl/en-be/downloads/linux) or [Windows](https://slack.com/downloads/windows)

> If you have a Windows machine, it's recommended that you set up your computer for dual booting Linux.  Windows will work fine at the beginning of the course, but later on will make things more difficult for you. Get in touch with one of your coaches if you'd like to get this set up already.

[TOP](#working-with-code--week-1-homework)

---

### HYF Directory

Set up a new directory *on your computer* to host all of the code you write while at HYF.  It should look something like this, but feel free to change it as you find what works for you!

```
--/ Documents
  |-/ HYF
    |-/ hack-my-future
    |   (see the hack-my-future assignment for more info on this folder)
    |-/ 00-working-with-code
    |-/ 01-incremental-development
    :
    :
```


[TOP](#working-with-code--week-1-homework)

---

### student-bios Pull Request

Send a Pull Request to your class repository with a short bio so your classmates and coaches can get to know you.  You can find more instructions for this in the `/student-bios` directory of your class repo.


[TOP](#working-with-code--week-1-homework)

---

### hack-my-future

1. [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the [hack-my-future repository](https://github.com/HackYourFutureBelgium/hack-my-future).
1. [Pin](https://github.blog/2016-06-16-pin-repositories-to-your-github-profile/) it to your GitHub account
1. Set up your `learnables` project board, as described in the [hack-my-future repository](https://github.com/HackYourFutureBelgium/hack-my-future)
1. [Clone the repository](https://support.gitkraken.com/working-with-repositories/open-clone-init/) into your `HYF` directory (with GitKraken)
1. Begin organizing your learning!


[TOP](#working-with-code--week-1-homework)

---

### Markdown Home Page

Create a home page using markdown (not HTML/CSS!) in the `<username>.github.io` repository on your GitHub account. Later on you can turn this repository into an amazing portfolio web site, but for now stick with the basics :)

#### Writing The Documents

The writing process should look something like this:

1. Create a [new repository on your github account named `<username>.github.io`](https://guides.github.com/features/pages) (with or without a `README.md`)
1. [Turn on GitHub Pages](https://guides.github.com/features/pages)
1. Clone the repository to your computer using GitKraken
1. Open the repository in VSC
1. Open or create the `README.md` file, turn on [Markdown Preview](https://marketplace.visualstudio.com/items?itemName=dmodalek.markdown-preview-github-styles-custom)
1. Begin writing.  Play around with tables, lists, links, emphasis, ... and there's not really much more to Markdown!

This make this exercise too difficult! The main goal is to become familiar adding/committing, pushing/pulling, using VSC, and writing clean code.

If you want an extra challenge try adding some extra pages to your site and linking between them.  In the repository this will show up as multiple files above the README, on GitHub Pages this will become a fully navigable web page!

Can you figure out how to make something like a header/navbar using only Markdown?

> Emojis and images won't show up in VSC previews but will show up on GitHub when you push.  If you want to get extra creative by including images or emoji's, you'll need to push your code to GitHub frequently to see how it looks when it's live in the repo.

#### Creating a Live Home Page

[Turn on GitHub Pages](https://help.github.com/en/github/working-with-github-pages/about-github-pages), that's all you need to do to create a live web page!

After turning on GitHub pages, add this link as your home page on your github user profile (if you don't already have a personal web site).

Looking for a little more flare?  Set [a theme](https://pages.github.com/themes/) for your home page.

[TOP](#working-with-code--week-1-homework)

---
---

### <a href="https://hackyourfuture.be" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="100" height="100" alt="Hack Your Future: Belgium"></a>

