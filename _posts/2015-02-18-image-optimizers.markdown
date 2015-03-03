---
layout: post
title:  "Image Optimising with Gulp"
date:   2015-02-18
categories: blog
intro: ""
---

We care about web performance but we <del>always</del> *often* forget to minimize our image assets. We can save upto 40% or more on those assets. This can be automated with certain apps or automated through a JS Task managers like [Gulp.js](http://gulpjs.com/) or [Grunt.js](http://gruntjs.com/)

For this blogpost I use **Gulp**

## Pick the best plugin

I found two candidates. *If I missed any, please place a comment below.*

* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
* [gulp-smushit](https://www.npmjs.com/package/gulp-smushit)

My testcase setup was as follows:

* a folder with the original images ( 1 .jpg and 1 .png)
* separate destination folders for the optimised images

Our test images ... both resized and optimised for this blog post ...

<div class="row">
    <div class="col col--half">
        <figure>
            <img src="/img/salomon.jpg" alt="">
            <figcaption>The JPG, 1928x1928 ~ 1.5 MB</figcaption>
        </figure>
    </div>
    <div class="col col--half omega">
        <figure>
            <img src="/img/shark9.png" alt="">
            <figcaption>The PNG, 1082x610 ~ 85 KB</figcaption>
        </figure>
    </div>
</div>

My `gulpfile.js` config

{% highlight js %}
var gulp = require('gulp');
var imagemin = require('gulp-imagemin'),
    smushit = require('gulp-smushit');

gulp.task('imagemin', function () {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('imagemin-img'));
});

gulp.task('smushit', function () {
    return gulp.src('img/*')
        .pipe(smushit({
            verbose: true
        }))
        .pipe(gulp.dest('smushit-img'));
});
{% endhighlight %}

### gulp-imagemin

Minify PNG, JPEG, GIF and SVG images

**Pro:**

* a lot of configurable options
* you can include other optimizing plugins, like [pngquant](https://www.npmjs.com/package/imagemin-pngquant) *(see code example below)*
* can handle all image formats

**Cons:**

* no `verbose` option for the output

`gulpfile.js` with **pngquant**

{% highlight js %}
var gulp = require('gulp');
var imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

gulp.task('imagemin', function () {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('imagemin-img'));
});
{% endhighlight %}

With **pngquant enabled** we save extra bytes on PNG files: 203.79 kB vs. 164.67 kB  (12.9% vs 10.4%) and you don't notice any quality loss in the asset.

{% highlight bash %}
# with pngquant
➜  optim  gulp imagemin
[10:07:37] Using gulpfile /Applications/MAMP/htdocs/POC/optim/gulpfile.js
[10:07:37] Starting 'imagemin'...
[10:07:38] gulp-imagemin: Minified 2 images (saved 203.79 kB - 12.9%)
[10:07:38] Finished 'imagemin' after 1.07 s

# without pngquant
➜  optim  gulp imagemin
[11:10:05] Using gulpfile /Applications/MAMP/htdocs/POC/optim/gulpfile.js
[11:10:05] Starting 'imagemin'...
[11:10:06] gulp-imagemin: Minified 2 images (saved 164.67 kB - 10.4%)
[11:10:06] Finished 'imagemin' after 835 ms
{% endhighlight %}

### gulp-smushit

Plugin to optimize PNG and JPG using Yahoo Smushit. [Smush.it](http://smush.it/) uses optimization techniques specific to image format to remove unnecessary bytes from image files. It is a "lossless" tool, which means it optimizes the images without changing their look or visual quality.

**Pro:**

* Easy to configure
* Plug 'n' play

**Cons:**

* Only for jpg and png

{% highlight js %}
var gulp = require('gulp');
var smushit = require('gulp-smushit');

gulp.task('smushit', function () {
    return gulp.src('img/*')
        .pipe(smushit({
            verbose: true
        }))
        .pipe(gulp.dest('smushit-img'));
});
{% endhighlight %}

Verbose output in the terminal

{% highlight bash %}
➜  optim  gulp smushit
[10:37:47] Using gulpfile /Applications/MAMP/htdocs/POC/optim/gulpfile.js
[10:37:47] Starting 'smushit'...
[10:37:51] /Applications/MAMP/htdocs/POC/optim/img/salomon.jpg
[10:37:51] gulp-smushit: Compress rate % 8.60
[10:37:51] gulp-smushit: 1491876 bytes  to   1363503 bytes
[10:37:54] /Applications/MAMP/htdocs/POC/optim/img/shark9.png
[10:37:54] gulp-smushit: Compress rate % 19.56
[10:37:54] gulp-smushit: 84576 bytes  to   68034 bytes
[10:37:54] Finished 'smushit' after 7.16 s
{% endhighlight %}

## Comparison

They both compress almost equally (see below) with **imagemin** coming in first place.

{% highlight bash %}

{% endhighlight %}

<div class="row">
    <div class="col col--half">
        <figure>
            <img src="/img/salomon-imagemin.png" alt="">
            <figcaption>jpg compressed with imagemin</figcaption>
        </figure>
    </div>
    <div class="col col--half omega">
        <figure>
            <img src="/img/salomon-smushit.png" alt="">
            <figcaption>jpg compressed with smushit</figcaption>
        </figure>
    </div>
</div>

<div class="row">
    <div class="col col--half">
        <figure>
            <img src="/img/shark-imagemin.png" alt="">
            <figcaption>png compressed with imagemin</figcaption>
        </figure>

        <figure>
            <img src="/img/shark9-imagemin-pngquant.png" alt="">
            <figcaption>png compressed with imagemin and pngquant</figcaption>
        </figure>
    </div>
    <div class="col col--half omega">
        <figure>
            <img src="/img/shark-smushit.png" alt="">
            <figcaption>png compressed with smushit</figcaption>
        </figure>
    </div>
</div>

### Crunching the numbers ...

<table class="table table--bordered">
    <thead class="table__head">
        <th></th>
        <th scope="col">original</th>
        <th scope="col">Imagemin</th>
        <th scope="col">Smushit</th>
    </thead>
    <tbody class="table__body">
        <tr>
            <td scope="row">JPG</td>
            <td>1.491.876 bytes (1.5MB)</td>
            <td>1.344.231 bytes (1.3MB)</td>
            <td>1.363.503 bytes (1.4MB)</td>
        </tr>
        <tr>
            <td scope="row">PNG</td>
            <td>84.576 bytes (85KB)</td>
            <td>67.550 bytes (68kb)<br>
                <strong>28.428 bytes (28KB) with pngquant</strong></td>
            <td>68.034 bytes (68KB)</td>
        </tr>
        <tr>
            <td scope="row">Time</td>
            <td></td>
            <td>835ms or <strong>1.07s</strong></td>
            <td>7.16s</td>
        </tr>
    </tbody>
</table>

And we have a winner: [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) !!!!

* more options and extendable
* more image formats supported
* better compression
* faster

### Credits

I originally wrote this Proof of Concept for the in-house teams of De Persgroep Publishing on the company's intranet. Kudos to them for allowing me to share this blog post with the community.




