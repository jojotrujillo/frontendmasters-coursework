# CSS Cascade

Created: October 30, 2022 6:38 AM
Type: Section - CSS
Materials: https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/css/selectors-and-the-cascade
Reviewed: No

## The Cascade

Try to avoid using this ability of CSS where-ever possible. It'll save you hours-and-hours of debugging, I promise.

So, the cascade. What if you have two CSS classes that have conflicting properties? Which one "wins" and is applied? Let's see an example:

```html
<style>
  .title {
    color: red;
  }

  .title {
    color: green;
  }
</style>
<h1 class="title">Cool Title</h1>
```

We have two rules with the same class (which is "legal" CSS.) So which one gets applied? Since they're equal, the one that comes **last** wins. So in this case, the `h1` would be green. When everything is equal, the *last one* gets applied. It'd work the same if we had two `h1` selectors as well.

```html
<style>
  .main-brand-2 {
    border: 1px solid black;
    color: red;
  }

  .title-2 {
    color: green;
  }
</style>
<h1 class="title-2 main-brand-2">Branding here</h1>
```

Yes, one tag can have multiple classes. In the eyes of CSS, those two selectors are equal since they both have the same **specificity** (key word, you'll see it used a lot when talking about CSS.) They both specify one class which makes them equal. So in this case, since `.title` comes last in the CSS, it wins. The color will be green. What about the border? Since `.title` doesn't conflict, it'll have a black border too. Keep in mind that each of these "conflicts" is resolved on a property-by-property basis. So the end result is a `h1` that has a black border and green font.

```html
<style>
  .main-brand-3.title-3 {
    color: red;
  }

  .title-3 {
    color: green;
  }
</style>
<h1 class="title-3 main-brand-3">Branding here</h1>
```

This how you add two classes to one selector. Notice there's no space between the two class names (that means something else.) The selector `.main-brand.title` will only match a tag that has **both**
classes. If it only has one of the two, it will not match. As you may imagine, since it has two classes, it's more specific, and therefore it wins.

```html
<style>
  .title-4 {
    color: orange;
  }

  h1 {
    color: green;
  }
</style>
<h1 class="title-4">Another h1</h1>
```

Now we have to understand specificity even more. **A class is considered more specific than a tag**. So a class selector "overpowers" a tag selector. It's more specific. Therefore, even though the `h1` selector comes last, the `.title` wins because it's more specific. This is why it's useful to do *everything* using classes; you don't need to worry about these specificity wars if everything is equal.

ℹ️ A useful but imperfect way to think about this is to think of specificity like a number. The class is like the tens digit, and the tag is like the ones digit. So something with one class selector would have a number `10` specificity and something with one tag selector would a specificity of `1`. The bigger number wins. This is imperfect because one class selector is still bigger than 10 tag selectors, but it's a useful mental device to quickly evaluate mentally which tag is more specific.

```html
<style>
  h1.main-brand-5 {
    color: red;
  }

  .main-brand-5.title-5 {
    color: orange;
  }

  .main-brand-5 {
    color: green;
  }
</style>
<h1 class="title-5 main-brand-5">Another Example</h1>
```

The first selector, `h1.main-brand` is how you select both a tag and a class at the same time. As you may imagine, this is more specific than the third selector, `.main-brand`. If you remember our shortcut trick, the first selector would be 11, the second would be 20, and the last would be 10, making the second selector the most specific, and indeed it is. The first selector isn't a good idea to do; using a tag and a class is usually a bad idea and means you're likely doing something weird in your code.