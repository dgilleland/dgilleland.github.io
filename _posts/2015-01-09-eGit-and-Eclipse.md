---
layout: post
title: "Using EGit with Eclipse"
published: true
---

Nowadays, I use version control for just about all of my coding and am getting into using it for my writing/blogging too. It's no wonder, then, that as I get into my second time through teaching an Android course that I want to be using version control for my code demos.

As an instructor, I teach in many different classrooms, and rather than take my code with me on a USB, I prefer to just pull a clone from my GitHub repositories. It saves a lot of hassle, and makes me very mobile. Not only that, but my students can then view my code samples and see both what I've got as my latest code and how I got there (the new [side-by-side diffs](https://github.com/blog/1884-introducing-split-diffs "Introducing split diffs - GitHub Help") on GitHub are great for that!).

This blog post is all about how I do that through EGit and Eclipse.

## Installing EGit

Installing EGit is a one-time thing that you do on each computer you use. I typically do it on anywhere from two to four computers, because my classes are in different labs, so I get a bit of practice doing this.

- 3 Select the **Install New Software** option from the **Help** menu. <details> ![menuHelpInstallNewSoftware.png](/images/posts/eGit-and-Eclipse/menuHelpInstallNewSoftware.png) </details>
- In the **Install** dialog, select *-All Available Sites-* and search for *git*. Give it time to search, and you will see the **Collaboration** item in the results. Expand that and select the checkbox for **EGit**. Then click the *Next* button. <details>![installEGit.png](/images/posts/eGit-and-Eclipse/installEGit.png)</details>
- Click *Next* after reviewing what's going to be installed. Give it some time, and your copy of EGit will be installed on your Eclipse instance. <details><summary>*[click for screenshot]*</summary>![installEGit-2.png](/images/posts/eGit-and-Eclipse/installEGit-2.png)</details>

## Setting Up Your Repository

- steps to set up a repo for your GitHub account
- the .gitignore to use (Eclipse, but allow .project and .classpath)

<details><summary>*[click for code sample]*</summary>
  ```
  #################
  ## Eclipse
  #################
  
  *.pydevproject
  # .project
  .metadata
  bin/
  tmp/
  *.tmp
  *.bak
  *.swp
  *~.nib
  local.properties
  # .classpath
  .settings/
  .loadpath
  
  # External tool builders
  .externalToolBuilders/
  
  # Locally stored "Eclipse launch configurations"
  *.launch
  
  # CDT-specific
  .cproject
  
  # PDT-specific
  .buildpath
  
  #############
  ## Windows detritus
  #############
  
  # Windows image file caches
  Thumbs.db
  ehthumbs.db
  
  # Folder config file
  Desktop.ini
  
  # Recycle Bin used on file shares
  $RECYCLE.BIN/
  
  # Mac crap
  .DS_Store
  ```
</details>

- Multiple projects in your repository
Since I have my Android demos all in a single workspace, I also put them into a single repository.

## Saving to a repository

## Cloning a repository

- After the installation, you should see 
<details><summary>*[click for screenshot]*</summary>![gitRepoBlank.png](/images/posts/eGit-and-Eclipse/gitRepoBlank.png)</details>
