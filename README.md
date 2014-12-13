![alt tag](http://designpath.me/images/logo-full.png)


*DESIGN PATH is a simple online quiz to help budding designers find their career path*

[VISIT DESIGNPATH](http://designpath.me/)

This repository keeps track of the full stack of code that runs this website. This documentation is solely about the setup and development guidelines, not about or the goals of the project.

### Dependencies
We take advantage of a couple of open sourced libraries in order to put us at a better starting level. Below are the dependencies:

+ AngularJS (v1.2.**, currently 21)
+ Google Fonts (Lato, Merriweather)

### Grunt
[Grunt](http://gruntjs.com/) is a JavaScript task runner that allows us to nicely maintain code and automatically generate some of the tedious outputs, such as a minified version of our code. It also supports compiling sass, running servers, etc.

Using grunt we will take care of:

+ generation of an index.html file that contains all of the necessary links to CSS and JS files, with a declaration of the ng-app, containing just the ng-view
+ compilation of SASS files and adding them to the correct subdirectory
+ a watch method which keeps an eye on the directory for changes and automatically refreshes the above

### Installation
In order to use grunt, you need to install [Node.js](http://nodejs.org/). Node is a lightweight JavaScript server that can serve files, and also comes with a nice dependencies installer called `npm`. So install node first.

You can do this via several ways.

+ if you have brew installed on your machine, you can just do `$ brew install node` on your terminal. please note you may need to update brew.
+ you can go ahead and download it from their website, available at [http://nodejs.org/](http://nodejs.org/), unpackage it and just install it.

If you already have a copy of Node, please check your version by running:

`$ node --version`

`$ npm --version`

You should have at least node version 0.10.**, and npm version 2.1.2. If you work on other stuff with different versions, I recommend you use some sort of Node version controller such as nvm or N. If you don't satisfy these versions, please update.

Once you have done that, you can install the command line tool for Grunt:

`$ npm install -g grunt-cli`


Then, run:

`$ npm install`

That will start the install of Grunt, and all of the grunt tasks we use, and print lots of stuff to your console. If you see any errors, it means the installation was unsuccessful. Unfortunately, installation depends largely on the machine you are on and the system you are running, so it may need to be dealt case by case.


### Usage
Congrats, you have now successfully installed everything you need and you can now start developing! The grunt stuff installed should really help us maintain the code better, and also strip out the tedious tasks such as compiling sass.

In general, grunt is really easy to use. Just run:

`$ grunt`

In the root directory of the project (it should actually work anywhere in the project, but I have never tried). This will do a couple things:

+ Pass all your JavaScript code through jshint. jshint is a simple way of checking JavaScript code validity, such as missing semi-colons or detecting globals. It will let you know where your errors are, so you can go ahead and fix them
+ Compile all of the sass you have written into css.
+ Add all of the source files to an index.html file in the test directory. If we didn't have this, you would have to manually add each and every single link and script to css and js files!
+ Copies all of the compiled dev files into a deploy folder, where you can run the actual node server.
+ finally, here's the really cool part. it starts a watch function, which will "watch" any changes to files and directories. If it notices there has been a change, it will run all of the above, without you having to restart the grunt task. 

It is recommended you run this in one window or tab on your terminal so you can run the server in another tab, and do other tasks like git commits in another tab.

In order to start the node server:

`$ cd deploy/`
`$ npm install`
`$ node server.js`

This should be done in a separate tab on terminal so that you can work with the server open.

In addition, you can run:

`$ grunt clean`

to delete temp files and the deploy folder so you can start clean.




