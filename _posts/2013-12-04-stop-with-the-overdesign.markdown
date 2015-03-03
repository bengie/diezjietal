---
layout: post
title:  "Stop with the over-design"
date: 2014-02-04
categories: blog
tags: [design, UX, rwd, responsive, mobile]
intro: "Dear designers, stop with the over-design of things"
---

## Just stop it!

Just to make things clear, I'm a fan of <cite>Design Without Limitations</cite>. Hell yeah, I used to have this quote as a background on my computer back in the days I was a designer, but never, ever did I design something that could have resulted in bad code.

As a designer you want to give your users a <del>good</del> <ins>perfect</ins> experience on the website. You start designing and tweaking. These days with [Responsive Web Design](http://alistapart.com/article/responsive-web-design/) you have a lot to design and tweak. There are desktops, tablets, smartphones and who knows what else the future may bring us. But if you start redesigning *every* breakpoint, moving stuff around and hiding/showing content, you are lost my brother. A simple example: <a href="http://getbootstrap.com/javascript/#tabs">Tabs</a> can't just magically turn into <a href="http://getbootstrap.com/javascript/#collapse">accordions</a> when you switch breakpoints. They both require a completely different HTML structure. Back to the drawing board, my young padawan.

[A wise man](http://en.wikipedia.org/wiki/Dieter_Rams) once said : <cite>Good design is as little design as possible.</cite>

## Performance matters

> Just because we can do something doesn't mean we should.
>
> <cite>Jurassic Park</cite>

CSS3 brought us many goodies like rounded corners, shadows, gradients, animations and much more, but they come at a price. And that price is **performance**. We can create that subtle shadow around your box a lot easier now, but giving all your boxes shadows can make your FPS plummet and make your shiny UI unusable.

Adding all those fancy [Responsive patterns](http://bradfrost.github.io/this-is-responsive/patterns.html) and [JS plugins](http://usejquery.com/) may seem a great idea but they quickly turn your website in a slow monster<sup>*</sup>. And hey, what's the use of designing that great UI if your user will never see it because he already left your site?

So make a decision on what features you really want and start designing for those you need to drop. Because designing is all about finding solutions for a certain problem.

## How to fix this?

It's easy. **Designers should learn to code!** I don't mean hardcore development or advanced JavaScript but basic understanding of modular and scalable HTML and CSS. you don't even have to write it but just get familiar with, and most of all, learn from frameworkslike [Bootstrap](http://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/). Read up on
[SMACSS](http://smacss.com/) and [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/). Go and talk with the front-ender(s) in your company.



Basically it comes down to stop seeing your website as pages, and design each page separately, but see them as containers that hold different building blocks. No matter the page it's on, that block will always look and behave the same.

Maybe it's a bit out of your comfort zone and you probably already have a lot on your hands to keep up with current design standards but this will help us both (you as a designers, we as front-enders) a lot. You will learn to understand why we say "NO" each time you come up with that fancy gimmick in your UI. I promise you when you write a blog post about why it's important to have that feature I will read it and I will listen to your arguments.

#### * Something to read:

* [Painting pixels](http://www.html5rocks.com/en/tutorials/speed/unnecessary-paints/)
* [Scrolling performance](http://www.html5rocks.com/en/tutorials/speed/scrolling/)
