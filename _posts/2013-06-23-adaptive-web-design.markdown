---
layout: post
title:  "Adaptive Web Design"
date:   2013-06-23
categories: blog
tags: [Best practices, HTML5, WAI-ARIA, JavaScript, Progressive Enhancement]
intro:
---

<figure>
	<img src="/img/adaptive.jpg" alt="Adaptive Web Design Banner">
	<figcaption>image credits to <a href="http://veerle.duoh.com">Veerle's blog</a> and <a href="http://easy-readers.net/contests/i-love-adaptive-web-design/">Easy Readers</a></figcaption>
</figure>

In december 2011 I had the privilege to attend a workshop on <a href="http://easy-readers.net/books/adaptive-web-design/">Adaptive Web Design</a> by the brilliant <a href="http://twitter.com/AaronGustafson ">@AaronGustafson</a>. The book is awesome, the hands-on workshop even more. Aaron shares some of his most valuable secrets and techniques in what I immediately believed was the only good way to build websites.

## What?

It's the combination of <a href="http://thomasbyttebier.be/blog/responsive-web-design-is-a-pleonasm"><del>responsive</del> web design</a>, accessibility and correct JavaScript use so users can access all your content without any technological and/or physical restrictions. You've probably heard of it before, it's also known as <strong>Progressive Enhancement</strong>.

Summarized this means: Even users with (low-end) mobile devices and flakey connections, and users with physical disabilities should be able to <strong>access all your content</strong>.

## Wait. You mean Gracef&hellip;

NO! Don't mistake this with &ldquo;Graceful Degradation&rdquo;.

Graceful Degradation is all about giving a heads up when something isn't available, e.g. the famous <code>&lt;noscript&gt;</code> tags,  while Progressive Enhancement is the opposite; giving all content to everyone and handing an improved experience to more capable devices/browsers. Huge difference.

## How?

### With markup

It all starts with some HTML. Simply add <code>alt=""</code> and <code>title=""</code> attributes to images and links has huge benefits in UX for people who use screen readers. Next, use semantically correct elements, like the new <code>header, nav, article</code> in HTML5. Again, screen readers will be very happy.

### With CSS

Provide fallbacks for browsers that don't understand those fancy CSS3 gradients or rgba(). Don't rely entirely on <a href="http://modernizr.com/">Modernizr</a>, because when there's no JavaScript available, <code>.no-cssgradients { background: hotPink;}</code> won't do you any good. Instead integrate a fallback in your base code (see example). Browsers that don't understand the gradient code will skip that line and use the fallback.

{% highlight css %}
.gradient {
	background: #ff5db1; /* fallback Old browsers */
	background: linear-gradient(to bottom, #ff5db1 0%,#ef017c 100%); /* W3C */
}
{% endhighlight %}

### With WAI-ARIA

<a href="http://www.w3.org/TR/wai-aria/">WAI-ARIA</a> are the W3C's guidelines for Accessible Rich Internet Applications. By adding some special attributes to your HTML elements you are once more helping screen readers. Have a look at the example below and look for <code>role=""</code> and <code>aria-xxxxx=""</code>.

{% highlight html %}
<div class="widget">
    <div class="tabs" role="widget">
        <ul class="nav nav-tabs" role="tablist">
            <li class="first active" role="tab" aria-selected="true" tabindex="0" aria-controls="most-read" aria-labelledby="tab-id-1">
                <a href="#most-read" data-toggle="tab" role="presentation" tabindex="-1" id="tab-id-1">Meest gelezen</a>
            </li>
            <li class="last" role="tab" aria-selected="false" tabindex="-1" aria-controls="most-shared" aria-labelledby="tab-id-2">
                <a href="#most-shared" data-toggle="tab" role="presentation" tabindex="-1" id="tab-id-2">Meest gedeeld</a>
            </li>
        </ul>
        <!-- / .tablist -->
        <div class="tab-content">
            <div class="tab-pane active" id="most-read" role="tabpanel" aria-labelledby="tab-id-1" aria-expanded="true" aria-hidden="false">
                <ol class="custom-list">
                    <li class="list__item-1">
                        <a href="#">Lorem ipsum enim id sit aute. Lorem ipsum in ex veniam sint.</a>
                    </li>
                    <li class="list__item-2">
                        <a href="#">Lorem ipsum enim id sit aute. Lorem ipsum in ex veniam sint.</a>
                    </li>
                </ol>
            </div>
            <div class="tab-pane" id="most-shared" role="tabpanel" aria-labelledby="tab-id-2" aria-expanded="false" aria-hidden="true">
                <ol class="custom-list">
                    <li class="list__item-1">
                        <a href="#">Lorem ipsum proident tempor nulla cillum fugiat.</a>
                    </li>
                    <li class="list__item-2">
                        <a href="#">Lorem ipsum proident tempor nulla cillum fugiat.</a>
                    </li>
                </ol>
            </div>
        </div>
        <!-- / .tabcontent -->
    </div>
    <!--  .tabs -->
</div>
<!--  / .widget -->
{% endhighlight %}

Screen readers, and other assistive technologies, use this to create overviews from your content. So the user can jump to the certain sections in your content.

Changing the <code>aria-xxxxx</code> values, and <code>tabindex</code>, does require the use of JavaScript, but modern screen readers have no problem with that. If JS is not available  make sure all your tab panels are visible with CSS.

### With JavaScript

JavaScript is hot these days and you can do some great things with it, but it can also destroy the accessibility of your content completely. So use your JavaScript wisely. Use it as an enhancement layer, not as a dependency. With the custom <code>data-xxxx=""</code> attributes we all got to use with the release of HTML5, you can hook JavaScript and still allow default behaviour for when JavaScript is not available.

Convince your (back-end) developers to create every task as a separate page. E.g. when you use <a href="http://en.wikipedia.org/wiki/Ajax_(programming)">AJAX</a> to fetch results, don't create an action that fetches those results directly from the database. Instead, in an <a href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">MVC environment</a>, create a Model that fetches the results and a View to display those results and with AJAX we inject the HTML from the View into our destination. So when JS isn't available and we click the link that should have triggered the AJAX call, we still get directed to a page, our View, and see the results. A serious improvement over not seeing anything at all.

## Something to read

If you want to learn more about Progressive Enhancement I can suggest you the following books.

* <a href="http://easy-readers.net/books/adaptive-web-design/">Adaptive Web Design</a> by Aaron Gustafson
* <a href="http://filamentgroup.com/dwpe/">Designing with Progressive Enhancement</a> by filamentgroup
