---
layout: post
title:  "Volkskrant Plus"
date:   2015-02-23
client: De Persgroep
categories: projects
---

<figure>
	<img src="/img/volkskrant-plus.png" alt="">
</figure>

My very first large project for De Persgroep Publishing was the total revamp for [de Volkskrant](http://volkskrant.nl).

The website got a new look and there were extra challenges as integrating a new paywall model and making it 100% responsive.

## Architecture

De Volkskrant Plus was our first project with our new architectural setup for front-end projects.

### CSS

Our CSS approach is a combination of a modular architecture with [Smacss](https://smacss.com/), [Sass](http://sass-lang.com/) and [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

Directory structure of our CSS files:

{% highlight bash %}
|_____mixins.scss
|_____print.scss
|_____site-settings.scss
|____base
| |_____base.scss
| |_____defaults.scss
| |_____extends.scss
| |_____helpers.scss
| |_____normalize.scss
| |_____webfonts.scss
|____layout
| |_____grid.scss
| |_____layout.scss
| |_____layouts.scss
| |_____sections.scss
|____main-old-ie.scss
|____main.scss
|____modules
| |_____about.scss
| |_____actionbar.scss
| |_____actions.scss
| |_____advertising.scss
| |_____advertorial.scss
| |_____alert.scss
| |_____ampersand.scss
| |_____anchor.scss
| |_____ankeilers.scss
| |_____articles.scss
| |_____author.scss
| |_____badges.scss
| |_____banner.scss
| |_____blender.scss
| |_____block-grid.scss
| |_____blockquotes.scss
| |_____breadcrumb.scss
| |_____breaking-toast.scss
| |_____buttons.scss
| |_____calendar.scss
| |_____carousel.scss
| |_____center.scss
| |_____check.scss
| |_____cluster.scss
| |_____component.scss
| |_____cookiewall.scss
| |_____counter.scss
| |_____datepicker.scss
| |_____deals.scss
| |_____dividers.scss
| |_____dropdown.scss
| |_____event-info.scss
| |_____favs.scss
| |_____flex-embed.scss
| |_____forms.scss
| |_____gidsend.scss
| |_____headers.scss
| |_____hyper-distribution.scss
| |_____iconfont.scss
| |_____icons.scss
| |_____identity.scss
| |_____images.scss
| |_____ingredient.scss
| |_____integration.scss
| |_____intermediair.scss
| |_____island.scss
| |_____labels.scss
| |_____landmark.scss
| |_____letters.scss
| |_____lightbox.scss
| |_____lists.scss
| |_____marketing.scss
| |_____matrix.scss
| |_____media-overlay.scss
| |_____meta.scss
| |_____modal.scss
| |_____modules.scss
| |_____nav.scss
| |_____outside-of-the-box.scss
| |_____pagination.scss
| |_____paywall.scss
| |_____peekaboo.scss
| |_____photo-sets.scss
| |_____pillow.scss
| |_____pills.scss
| |_____poll.scss
| |_____progress.scss
| |_____pullout.scss
| |_____rating.scss
| |_____reactions.scss
| |_____reveal.scss
| |_____ribbon.scss
| |_____slideshow.scss
| |_____snippet.scss
| |_____social-media.scss
| |_____stamps.scss
| |_____steps.scss
| |_____story-stream.scss
| |_____subarticle.scss
| |_____tables.scss
| |_____tabs.scss
| |_____tags.scss
| |_____toggle.scss
| |_____toggler.scss
| |_____tooltip.scss
| |_____ux.scss
| |_____video.scss
| |_____weather.scss
| |_____well.scss
| |_____widgets.scss
|____modules_sso
| |_____alerts.scss
| |_____buttons.scss
| |_____forms.scss
| |_____grid.scss
| |_____icons.scss
| |_____modules_sso.scss
| |_____products.scss
| |_____sso-settings.scss
| |_____tabs.scss
|____states
| |_____states.scss
|____styleguide.md
|____theme
| |_____development.scss
| |_____theme-advertorial.scss
| |_____theme-cult.scss
| |_____theme-didu.scss
| |_____theme-economy.scss
| |_____theme-integration.scss
| |_____theme-myvk.scss
| |_____theme-opinion.scss
| |_____theme-science.scss
| |_____theme-sports.scss
| |_____theme-sso.scss
| |_____theme-tech.scss
| |_____theme-user.scss
| |_____theme.scss
{% endhighlight %}

### Javascript

"F*$k jQuery" is our motto. Not that we don't like [jQuery](http://jquery.com/), we just think it bloats our codebase because a lot of what it contains we don't use at all and because of all the custom development we have to do. We use microframeworks like [Bonzo](https://github.com/ded/bonzo) and [Qwery](https://github.com/ded/qwery) to handle any cross-browser issues and to simplify the way we write JS. We already have our own custom library which we can use across various projects.
