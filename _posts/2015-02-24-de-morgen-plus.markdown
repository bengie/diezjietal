---
layout: post
title:  "De Morgen Plus"
date:   2015-02-24
client: De Persgroep
categories: projects
---

<figure>
	<img src="/img/demorgen-plus.png" alt="">
</figure>

While I was a part of the front-end team of De Persgroep Publishing one of the projects we were assigned to in 2014 was the total revamp for [De Morgen](http://demorgen.be).

Both the newspaper and the website got a new look and for the website there were extra challenges as integrating a new paywall model and making it 100% responsive.

## Architecture

De Morgen Plus wasn't our first project with our new architectural setup for front-end projects.
The foundation for our setup was based on our experiences with the [Volkskrant Plus](/projects/2015/02/23/volkskrant-plus.html) and [HLN Regio](/projects/2015/02/22/hln-regio.html) projects.

### HTML and CSS

The HTML is written in the Java template engine [Thymeleaf](http://www.thymeleaf.org/). This way we, as front-end developers, have more control over the output and we can skip a great part of prototyping in static HTML files.

Our CSS approach is a combination of a modular architecture with [Smacss](https://smacss.com/), [Sass](http://sass-lang.com/) and [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

### Javascript

"F*$k jQuery" is our motto. Not that we don't like [jQuery](http://jquery.com/), we just think it bloats our codebase because a lot of what it contains we don't use at all and because of all the custom development we have to do. We use microframeworks like [Bonzo](https://github.com/ded/bonzo) and [Qwery](https://github.com/ded/qwery) to handle any cross-browser issues and to simplify the way we write JS. We already have our own custom library which we can use across various projects.

### Automation

We initially used [Grunt](http://gruntjs.com) to automate everything (build process, code hinting/linting for JS and Sass) but not long ago we switched to [Gulp](http://gulpjs.com).

## Honors & awards

<figure>
	<img src="/img/merit-awards-2014.jpg" alt="">
	<figcaption>The front-end team responsible for the 2014 De Morgen redesign</figcaption>
</figure>

January 2015 "de Morgen" was elected as "Medium of the year" on the Merit Awards.
More info [here](http://www.mm.be/news-nl-7835-merit-awards-de-morgen-medium-van-het-jaar-the-reasons-why) *(Dutch)*
