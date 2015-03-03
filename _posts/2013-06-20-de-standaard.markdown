---
layout: post
title:  "De Standaard"
date:   2013-06-20
client: Corelio
categories: projects
intro: "&ldquo;Hi Gregory, do you have some spare time in January, and maybe February 2013?<br>
			&mdash; Yeah sure. Why?<br>
			Can you help us with the front-end for the new De Standaard site?&rdquo;"
---

<figure>
	<img src="/img/destandaard.jpg" alt="redesign of De Standaard newspaper site">
</figure>

And that's how a crazy 5 months started. [Corelio](http://corelio.be) wanted to launch the first responsive newspaper site in Belgium, 5 years after the famous [Mark Boulton redesign](http://markboultondesign.com/), and they asked me to help them. I was honoured, bedazzled at first. I never did a project of this scale so I was a little out of my comfort zone. After a good talk with the in-house front-end dev, [@stevenbenisek](http://twitter.com/stevenbenisek), I felt at ease. We both had the same philosophy and approach for this project. Progressive enhancement, Sass, Vanilla JS, front-end performance, &hellip; We wanted to make something that could serve as an example. Large scale websites don't have to be slow monsters, this one's going to blast.

## Process

Our job: make static HTML templates based on the designs and ship them to thedevelopers. [Jekyll](http://jekyllrb.com/) and [GitHub](https://github.com/) to the rescue. **Jekyll** to make maintanable static HTML templates and **GitHub** to deliver the files to all developers. It worked like a charm.

After evaluating the designs and reading the briefs, we decided to build our own custom grid. Because gutters had to be set in fixed pixel dimensions and we couldn't use `box-sizing: border-box;` so we had to nest a few more `div`'s as intended. But our job is to make it work, so we did.

### Architecture

Because this was a large project we had to write maintainable code. Both in HTML as in CSS. One way to do this is, is by building the site in a modular and scalable architecture. Combining what we've learned from [Twitter Bootstrap](http://twitter.github.io/bootstrap/index.html) (for HTML components) and [SMACSS](http://smacss.com/) (modular CSS) we ended up with something that's easy to use by the webmasters and any other developer, new or veteran to the project. If they need to add a certain module to a page all they have to do is to copy/paste the required HTML and add the necessary CSS classes. No need to write extra CSS with the risk of breaking something and
violating the brand's identity guidelines.

&mdash; <em>&ldquo;What's with the strange CSS classes?&rdquo;</em><br>
That's [BEM](http://bem.info/) methodology. It makes it easier for developers to break things up in just a glance at the code. Read more about BEM: [here](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) and [here](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/).

### Only blazing fast is acceptable!

The previous version of De Standaard had page loading times up to 20s. Time for some action. With the help of [RequireJS](http://requirejs.org/) and a few simple front-end performance boosters we reduced it to <2s, with **all the news related content loading under 1s** and loading JS-heavy components (like advertising and carousels) asynchronously. We were able to avoid [jQuery](http://jquery.com) inclusion for 90% of the pages so page size is reduced and battery life on mobile devices improved.

### Progressive enhancement

Not one user should be excluded from your site's content because of technological or physical restrictions. With [WAI ARIA](http://www.w3.org/TR/wai-aria/) you can improve accessibility for people with assistive technologies. Our non-JS-first approach ensures access to all content without
technological restrictions. We used JavaScript as an enhancement layer not as a dependency, so all necessary tasks can be completed without JavaScript turned on.

### Pleasing the Big G

SEO is important for every site but how can you improve your results? How do you please the Big G? Start with a solid and semantic HTML structure. Check! Add some magical attibutes. Wait, what? Yes, you can improve your SEO results with the aid of some simple attributes on your HTML. They call it
[microdata](http://schema.org). Have a look at the source code of [De Standaard](http://standaard.be) and search for `itemtype, itemscope, itemprop`. Want proof? Only a few days after launch we scored several first page results for various articles on [Google](http://google.be), and they
still do. Check!

  *[SEO]: Search Engine Optimization

### Styleguide

Don't forget your webmasters. They have to work with the site after we signed off. Give them something to work with and make it as easy as possible. Give them **a styleguide**. Have a look at [Twitter Bootstrap](http://twitter.github.io/bootstrap/index.html) and you know what I'm talking about. You can use it as a reference during the development of the site and it's valuable documentation for any contributor to the project.

### Pitfalls

* Working with advertising on a responsive website is a challenge. <a href="http://twitter.com/stevenbenisek">@stevenbenisek</a> and <a href="http://www.adhese.com/">Adhese</a> did a fantastic job in finding a new approach for serving those ads. <em>Edit: Adhese wrote a <a href="http://adhese.prezly.com/ads-in-new-layout-standaardbe-faster-simpler-and-safer-thanks-to-adhese">blog post</a> about the advertising model on De Standaard.</em>

* Don't forget to design your &ldquo;hidden&rdquo; pages (404, 500, signup pages)

### Tools of the trade

HTML5, CSS3, JavaScript, [Jekyll](http://jekyllrb.com/), [GitHub](https://github.com/), [Sass](http://sass-lang.com/) and [Compass](http://compass-style.org/), [Grunt](http://gruntjs.com/),
[RequireJS](http://requirejs.org/), [BlessCSS](http://blesscss.com/).

### Credits

I want to thank the entire team at Corelio DCC. Account managers, projectmanagers, team leads, analysts, back-end developers, front-end devs, webmasters, designers, &hellip; they all did an amazing job. Definitely one of the best teams I ever had the chance to work with. THANK YOU for an amazing 5 months. Kudos.

