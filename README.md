# Dev notes : Commerce 150 Timeline
- This is a static site built using Jade, LibSass, Gulp and Node
- The project Repo is in GitHub
- We are only making the static assets and handing them off to the client.


## Stack
- Jade
- Gulp
- Libsass (Indented Sass)
- GitHub

## Gulp build commands

`gulp`

This will compile everything and open the project in the browser for you. It will also watch for changes and refresh the browser on every save.

`gulp ghp`
This is used to copy all the files in the `dist` director to the `gh-pages` branch for displaying the site.


---

## Environment URLs
- **DEV** - [commercetrust.github.io](http://commercetrust.github.io/150)


---
## Workflow

### Setup
1. Clone this repo to the local directory of your choice
1. Create a `feature` branch from the `master` branch to work from


### Editing local repo
*You must have Node installed. Go do that if you don't have it. If you are unsure, jump into the terminal and run `node -v`. If a version shows up, then you have node installed.*

1. From the project root run `npm i`. This will install all of the node dependencies.
1. Now run `gulp`. This with build the site and launch it in your browser. The site will automatically update with each save from a sass, scss, js, coffee, yaml or jade file.


### Dev deployment
*warning - never merge the any branch into `gh-pages`*

1. Push your feature branch `git push origin featureName`
1. Create a pull request to merge into `master`
1. After you merge your feature branch into the `master` branch jump in your terminal and run `gulp ghp`. This will push the changes live to [commercetrust.github.io/150](http://commercetrust.github.io/150)

---

### :poop: Clean up
1. Delete your local and remote support ticket branch when done. Avoid leaving stale branches.
1. Local branch removal: run `git branch -d supportBanchName`
1. Remote branch removal: run `git push origin :supportBanchName`
*You can also do this using [SourceTree](http://www.sourcetreeapp.com/) also*


---
## Managing this codebase
This is a static site built using Jade, LibSass, Gulp and Node.

### Gulp and NODE
Gulp and other taskrunners are here to stay. Gulp is used here to enable:
- **Jade** for rapid markup and templating abilities
- **Sass** for rapid styling and css logic. Both SCSS and SASS can be used
- **Browser** Sync to watch the files for changes and refresh them in the browser
- **Pleeease** for adding browser prefixes and browser fall-backs
- **Sourcemaps** for referring to modular sass and js files in the inspector
- **YAML** for managin JSON in a more readible format
- **Front Matter** for YAML style page variables
- **JSON** for a static global dataBase
- **Browserify** for using NODE modules in the browser
- **CoffeeScript** for rapid scripting. I should be using ES6.
- **Minification** for compressing css and js for production

### Jade
Jade rocks. It's used for templating (like Handlebars) in the NODE eco-shpere. It also provides a short hand style of writing HTML. [Jade Tutorial](http://jade-lang.com/tutorial/)

### YAML
YAML ain't mark up langauge. But it's fast to write and easy to read. Plus, it compiles into JSON. [YAML Syntax](http://learn.getgrav.org/advanced/yaml)

### Sass (not sCss)
**.sass** is the original implementation of Sass. We opted to do this in .sass for quicker developement and easier reading. This code base can still use **.scss** too. We are using .scss for the **include-media** code. This is a powerful and natural way of writing media queries. **.sass** can't do source maps.

[Sass vs. SCSS: which syntax is better?](http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-betterhttp://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better)
[include-media](http://include-media.com/)

### LibSass
We are using LibSass for faster compile times while using browser-sync to refresh the browser after saving files. LibSass if much faster than RubySass. However, it doesn't have the latest features of RubySass. LibSass is always slightly behind RubySass' feature development.
[libSass](http://sass-lang.com/libsass)


---
## Contacts

### :smiley: Developer(s)
- Benjamin Gandhi-Shepard
- Lindsay Hornsby
- Kevin

### :smiley: PM(s)
- Jamal McLaughlin

---
## Issues that aren't JIRA tickets

### :skull: Known Issues + Workaround Log
1. Gulp-Sass cannot be updated to the latest version. Not sure what the issue is. Just stay at this verion ^1.3.3 and all will be good. It is written into the package file so this will be locked in for who ever clones and runs this next.

---

### :disappointed: Shame Log
1. There is some funky stuff about this site.
1. Branch - titlehead - has the header that I think works best



### Markdown resources
- [Fast Markdown Tutorial](http://markdowntutorial.com/)
- [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/https://help.github.com/articles/github-flavored-markdown/)
- [Markdown Tables](http://www.tablesgenerator.com/markdown_tables)
- :cat: [Available Emojis](https://bitbucket.org/DACOFFEY/wiki/wiki/BITBUCKET/EMOJI/Emoji)
