---
layout: post
title:  "Iconfonts: The how's and why's"
date:   2015-03-02
categories: blog
intro: ""
---

## Clarification

Icon fonts (.woff, .eot, .svg, .ttf,...) are vector based and thus are lossless scalable, extra sharp on retina displays and relatively small file size

*Browsers consider it text, so the icons are anti-aliased as such. Can lead to icons not being as sharp as you might expect.*

They will give sharp results **if you obey the following rules**.

## Grid size

If you design your own icons or want to extend an existing font pack with custom designed icons, you will have to make sure both are designed on the same grid (or 'canvas' to use Illustrator slang) dimensions. E.g. a square canvas of 14x14, 16x16, 20x20, .... You may not mix different grid sizes in your icons or mix icon packs with different grid sizes. On [Icomoon's library](https://icomoon.io/app/#/select/library) you can see the grid size on which the entire icon pack is designed.

<figure>
	<img src="/img/icon-grid-size.png" alt="">
</figure>

Grid sizes matter for the (vertical) alignment and the actual rendered sizes of the icon.

Let's give an example: Typical footer from an undisclosed site ...

<figure>
	<img src="/img/footer.png" alt="">
</figure>

If we got the paperclip (Archief) icon from a 14x14 grid size icon pack (like FontAwesome) and the newspaper (digikrant) icon from a 20x20 grid size icon pack (like Entypo) and our base font-size is 16px based. Both icons will be rendered at a non-optimal size for their grid size.
16px base : paperclip icon gets scaled up with 114.28% and newspaper icon gets scaled down to 80%. That's when you get 'blurry' icons. We don't want that.
Also the vertical alignment could be off based on how they were set in the icon pack. So if we would need to make both icons have crispy sharp edges we need to write extra CSS and very specific CSS for that icon on that location in the footer. That's something we want to avoid at all cost. We are building modular projects remember. Also the newspaper icon would be bigger than the paperclip icon and that's not the result we want.

## Font-size

These days web projects mostly use a 16px base font-size so we are better of using icons that are based on that same number. A 16x16 grid size icon pack (like Icomoon Free, Icomoon Ultimate and many others) is the best decision. Now if you start scaling the icons with `font-size: 2em;` you will get crispy results and it will be easier to align it vertically.

Excerpt from icomoon.io documentation

> Font Metrics
>
> You can set the baseline and the em size (size of the em square) of your font using the IcoMoon app. The height of the baseline is determined as a percentage of the em size.
>
> The IcoMoon app aligns the top of the icon canvas to the ascender line and its bottom to the descender line of the font. Using this technique, the size of your font will directly translate to the size of the icon. For example, if you set your font-size in CSS to be 16px, you will get a 16px icon. This method was first introduced by IcoMoon.

### So why are there still other grid size icon packs?

Some icon packs are designed for specific reasons, e.g. to serve in the navigation of an Admin section. If the designer knows the font-size in the header is 20px based, then it's better to use a 20x20 grid size icon pack.

### Why are my icons blurry?

The icon font is vector based so you can scale it without any degradation but your screen is pixel based. If you scale down, e.g. `font-size: 0.66em;` , the vectors will fall between 2 pixels instead of right on the pixel. This will result in antialiasing (because your browser treats it as text) and sub-pixel rendering of your graphics card and screen giving you blurry edges.  Same if you size up, e.g. `font-size: 1.33em;` If you use multiples of 16 (32, 48, ....) you get better results. Retina screens, like iPhone, give crispier results, even on those odd font-sizes, because they simply have more pixels.

Excerpt from the icomoon.io documentation

> Getting Crisp Results
>
>Icon fonts have a bad reputation of looking blurred. But as you can see in the UI of this website (icomoon.io), it is possible to get completely sharp and crisp results.
>
>To get crisp results, the IcoMoon app should know the grid size of the icons you're choosing. You don't need to worry about grid sizes when using icons from IcoMoon's library. But if you're importing your own SVGs, you need to set the grid size manually. You can do so using the edit panel. To bring up the edit panel, click on the pencil button and then click on an icon. You can also use the menu on top right of each icon set to reset all grid sizes in that set.
>
> Notice: Don't change the grid size of the icons imported from IcoMoon's library. They already have the correct grid size set for them.
>
> When in the font tab of the IcoMoon app, your icons will be grouped by their grid sizes. To get the best results, you should use this size when using your font. For example, if an icon set is optimized for (16 × N)px sizes, you will get crisp results by setting your font-size to 16px, 32px, 48px (= 3 × 16px), etc. Also note that by using `-webkit-font-smoothing: antialiased;` in your CSS, or by prioritizing the SVG font over other formats, you can get better results.

### So why are we still using iconfonts?

In short: to avoid http requests. If we start using png's again (even when we 'sprite' them) we will need to use a lot more http requests and we all know http requests are the bottleneck for web performance and are the most expensive (for the client) when it comes to bandwidth. Also you don't need to maintain a gazillion icons when something changes or you need an icon in another size.

Also file size will be way lower in comparison to using sprites.

Last but not least, you serve multiple file types (eot, woff, svg, ...) so you give the browser the opportunity to choose which file type is better to suit its needs.

## Summary

We want the best result and icon fonts can give us that result if you use an icon pack with a grid size corresponding the base font size.

## Testcase

On IcoMoon I created a new project and added **Entypo** font to it. Entypo is a 20x20 grid based font.
I also created another project and added **Icomoon Ultimate** to it. A 16x16 grid based icon font.

I created 4 testcases:

1. Entypo and a base font-size of 20px
2. Entypo and a base font-size of 16px
3. Icomoon Ultimate and a base font-size of 16px
4. Icomoon Ultimate and a base font-size of 20px
^

1. I used Entypo (20x20) and a base font-size of 20px<br>
**Result**: <span class="success">crisp</span>

<figure>
	<img src="/img/entypo-crisp.png" alt="">
</figure>

2. I used Entypo (20x20) on a base font-size of 16px<br>
**Result**: <span class="error">blurry</span> - look at icon-classic-computer

<figure>
	<img src="/img/entypo-blurry.png" alt="">
</figure>

3. I used Icomoon Ultimate (16x16) and a base font-size of 16px<br>
**Result**: <span class="success">crisp</span>

<figure>
	<img src="/img/ultimate-crisp.png" alt="">
</figure>

4. I used Icomoon Ultimate (16x16) on a base font-size of 20px<br>
**Result**: <span class="error">blurry edges</span>

<figure>
	<img src="/img/ultimate-blurry.png" alt="">
</figure>

### Credits

I originally wrote this blog post for the in-house teams (development and design) and contractors of De Persgroep Publishing on the company's intranet. Kudos to them for allowing me to share this blog post with the community.
