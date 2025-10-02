# IDs & !important

Created: October 30, 2022 12:20 PM
Type: Section - CSS
Materials: https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/css/selectors-and-the-cascade
Reviewed: No

## Try to Avoid, But FYI

```html
<style type="text/css">
  #site-brand {
    color: red;
  }

  h1.nav-head.nav-main.other-useful-class {
    /*
     * this class is way too specific; never have a class selector so long
     * it's ridiculous and just to illustrate a point
     */
    color: green;
  }
</style>
<h1 id="site-brand" class="nav-head nav-main other-useful-class">
  The Brand of my Website
</h1>
```

You would think by how long the second class is, it'd win. ID selectors (`#site-brand`) win over class selectors. If tags are the one place and classes are the tens place, then IDs are the hundreds place. Using that, the first one is 100 and the second is 31.

```html
<style>
  #site-brand-2 {
    color: red;
    border: 1px solid red;
  }

  .nav-head-2 {
    color: green !important;
    border: 1px solid green;
  }
</style>
<h1 id="site-brand-2" class="nav-head-2 nav-main-2 other-useful-class-2">
  The Brand of my Website
</h1>
```

The `h1`'s `color` is going to be green but the `border` is going to be red. This is a *terrible* idea. Never use `!important`.

Comments in CSS: /* */