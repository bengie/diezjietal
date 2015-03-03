---
layout: post
title:  "Mobile First with Sass"
date: 2013-06-29
categories: blog
tags: [CSS, Sass, Compass]
intro: "Taking a Mobile First approach with your CSS and keeping &lt;IE9 happy"
---


## The philosophy
A Mobile First approach is starting with a basic experience for mobile devices. The well known one-column stack, and with <code>@media</code> queries you build new layouts for every breakpoint in your design. Devices, or browsers, that don't understand <code>@media</code> queries get the basic experience.

## The pitfall

From a <a href="/blog/2013/06/23/adaptive-web-design.html">Progressive Enhancement point-of-view</a> I find this an excellent approach. But this also means you will serve the one-column stack to those legacy desktop browsers (&lt; IE9) who don't understand `@media` queries. Unfortunately that's not something we can all get away with.

## The solution

Luckily we can fix this. With the help of <a href="http://sass-lang.com">Sass</a> and some very clever <a href="http://jakearchibald.github.io/sass-ie/">SassScripting by Jake Archibald</a>.

These snippets will generate a legacy stylesheet that serves the desktop layout to &lt;IE9. Yay!

## How do you start?

1. Add conditional comments to the <code>&lt;head&gt;</code> of your html file.

{% highlight html %}
<!--[if lte IE 8]>
	<link rel="stylesheet" href="css/master-old-ie.css">
<![endif]-->
<!--[if gt IE 8]><!-->
	<link rel="stylesheet" href="css/master.css">
<!--<![endif]-->
{% endhighlight %}

2. Create a `.scss` version of your legacy stylesheet. e.g. `master-old-ie.scss` and add the following snippet.

{% highlight scss%}
$fix-mqs: 60em; // the breakpoint where the desktop layout starts
@import 'master'; // import all other scss
{% endhighlight %}

The next step will clarify the variables.

3.
Add the following to your `_mixins.scss` file, or create a new partial, but don't forget to `@import` it in your `master.scss` file.

{% highlight scss %}
$fix-mqs: false !default; // set a default value and override it in master-old-ie.scss

// min-width media queries
@mixin mq-min($width) {
	// if we want the media query fallback, and yes we do in our master-old-ie.scss
	@if $fix-mqs {
		// if the width value set in master-old-ie.scss is greater or equal to the width set in our mixin
		@if $fix-mqs >= $width {
			// compile the content of our mixin WITHOUT the media query
			@content;
		}
		} @else {
			// else compile content of mixin WITH media query
			@media screen and (min-width: $width) {
		@content;
		}
	}
}

// max-width media queries
@mixin mq-max($width) {
	@if $fix-mqs {
		// same logic as above
		@if $fix-mqs <= $width {
			@content;
		}
	} @else {
		@media screen and (max-width: $width) {
			@content;
		}
	}
}
{% endhighlight %}

4. An example

{% highlight scss %}
.container {
	background-color: hotpink;
	@include mq-min(30em) {
		background-color: dodgerblue;
	}
	@include mq-min(60em) {
		background-color: firebrick;
	}
}
{% endhighlight %}

In `master.css`, this will compile to &hellip;

{% highlight css%}
.container {
	background-color: hotpink;
	@media screen and (min-width: 30em) {
		background-color: dodgerblue;
	}
	@media screen and (min-width: 60em) {
		background-color: firebrick;
	}
}
{% endhighlight %}

And in `master-old-ie.css` this will compile to &hellip;

{% highlight css%}
.container {
	background-color: hotpink;
	background-color: dodgerblue;
	background-color: firebrick;
}
{% endhighlight%}

Okay, it's a little dirty to repeat the same property and let the cascade do the lifting but hey, it gets the job done.

## Bonus

A little bonus mixin to compile CSS only for our `master-old-ie.css` file. Use this if you don't want to pollute your CSS with hacks.

{% highlight scss %}
$old-ie: false !default;

@mixin old-ie {
	// Only use this content if we're dealing with old IE
	@if $old-ie {
		@content;
	}
}
{% endhighlight %}

Add to the top of `master-old-ie.scss`

{% highlight scss %}
$old-ie: true; // BONUS: we want to include some CSS hacks only to this file
{% endhighlight %}

A little example &hellip;

{% highlight scss %}
.selector {
	display: inline-block;
	// this will output/compile only in master-old-ie.scss (because we've set $old-ie: true; at top of page) and will target IE7 with the star hack
	@include old-ie {
		*display: inline;
		*zoom: 1;
	}
}
{% endhighlight %}

Our `master.css` will compile to &hellip;

{% highlight css %}
.selector {
	display: inline-block;
}
{% endhighlight %}

&hellip; and our`master-old-ie.css` will compile to &hellip;

{% highlight css %}
.selector {
	display: inline-block;
	*display: inline;
	*zoom:1;
}
{% endhighlight %}

## Heads up!

By using this approach (media queries per selector instead of one media query per breakpoint and all your selectors in that query) this will bloat your CSS output. But by <a href="https://github.com/h5bp/server-configs/blob/master/apache/README.md#gzip-components">gzipping</a> your files the difference will be negligible.

## Credit where credit's due

I don't want to take credit for this approach. All credits go to <a href="http://jakearchibald.com/">Jake Archibald</a>. I just wanted to make a little tutorial for Sass beginners and share my workflow with others.
