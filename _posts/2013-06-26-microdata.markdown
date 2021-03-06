---
layout: post
title:  "Microdata"
date:   2013-06-26
categories: blog
tags: [HTML5, Google, SEO, attributes, microformats]
intro: "Give your semantic HTML an SEO boost with microdata."
---


Say what? Yes, there's magic code to give your content an advantage in in all major search engines. It's called <a href="http://schema.org">microdata</a>.

> Microdata is a collection of schemas, i.e., html tags, that webmasters can use to markup their pages in ways recognized by major search providers. Search engines including Bing, Google, Yahoo! and Yandex rely on this markup to improve the display of search results, making it easier for people to find the right web pages.

## Why?

All your webpages have a meaning. To humans this is easy to understand. An <code>&lt;article&gt;</code> on a news site will probably be a news article with a title and body text, but on a movie site, like <a href="http://imdb.com">IMDB</a>, this can contain a summary, info about director, genre, &hellip; <br> Search engines have a limited understanding of what is being discussed on those pages. By adding tags and/or attributes we help search engines to understand your content.

## An example

Let's start with an easy one. All our sites contain pages. So every page is a schema, a <a href="http://schema.org/WebPage">WebPage</a>.

{% highlight html %}
<html itemscope itemtype="http://schema.org/WebPage">
    ...
</html>
{% endhighlight %}

With <code>itemscope</code> you specify that the entire page, or block, is about a particular item. <code>itemtype</code> defines the block. <br> So far we've only told that our page is a WebPage, I'm pretty sure search engines are smart enough to know, without the <strong>microdata</strong>, that it's a WebPage.

It gets interesting when your start marking up certain sections in your page to give extra meaning. Let's start with a <a href="http://schema.org/NewsArticle">news article</a>.</p>

{% highlight html %}
<article itemscope itemtype="http://schema.org/NewsArticle">
    <header>
        <h1 itemprop="name">News article title</h1>
    </header>
    <footer>written by <span itemprop="author"><a href="/profile/peter-jackson/">Peter Jackson</a></span> on <time datetime="2013-06-10" itemprop="datePublished">06/10/2013</time></footer>
    <figure>
        <img src="http://placehold.it/600x300" alt="image alt" itemprop="image">
        <figcaption>caption here</figcaption>
    </figure>
    <div class="article__body" itemprop="articleBody">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, natus, tenetur explicabo consequuntur non autem cum cupiditate temporibus. Dolorem, quam.</p>
    </div>
</article>
{% endhighlight %}

There's a lot more information now for search engines to index and give better search results to the user.

### Nesting schemas

You can nest schemas. With the <code>article</code> example above we nested a Movie schema in a WebPage schema. That's an easy one.

Let's break up our <code>article</code> example. We see the <code>span itemprop="author"</code>. It's a name of a <a href="http://schema.org/Person">Person</a>. Now apply some more schema.

{% highlight html %}
<span itemprop="author" itemscope itemtype="http://schema.org/Person">
    <a href="/profile/peter-jackson/" itemprop="name url">Peter Jackson</a>
</span>
{% endhighlight %}

Note: You can add multiple properties to one <code>itemprop</code>.

## In the wild

We applied these schemas to the new 2013 <a href="http://standaard.be">De Standaard</a> website <small>( more on this <a href="/projects/2013/06/20/de-standaard.html">project</a> )</small> and only a few days after the launch multiple articles scored first-page results on <a href="http://google.be">Google.be</a>, and they still do.

Have a look at the source of this site or <a href="http://google.com">Google</a>, they use microdata as well.
