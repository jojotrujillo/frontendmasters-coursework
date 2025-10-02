# Organizing HTML

Created: October 29, 2022 6:41 AM
Type: Section - HTML
Materials: https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/html/organizing-html
Reviewed: No

## Organization and Semantics

```html
<div>
  <h2>@sassy_pants_mcgee</h2>
  <h3>Posted 15m ago</h3>
  <img src="http://pets-images.dev-apis.com/pets/dog25.jpg" alt="a doggy" />
  <p>
    You ever think about barking out the window? What would happen if I didn't
    bark at them? Keeps me up at night.
  </p>
</div>
```

As long as you’re considering accessibility and conforming your best by using semantic tags to convey the meaning behind the content, then there comes a point where it’s more personal preference. For example, Brian encapsulated this post in a div tag but he also could’ve used an article tag.

```html
<div class="social-post">
  <h2 class="user-name">@sassy_pants_mcgee</h2>
  <h3 class="posted-date">Posted 15m ago</h3>
  <img
       class="profile-picture"
       src="http://pets-images.dev-apis.com/pets/dog25.jpg"
       alt="a doggy"
       />
  <p class="social-post-text">
    You ever think about barking out the window? What would happen if I didn't
    bark at them? Keeps me up at night.
  </p>
</div>
```

The use of classes in the above code snippet shows a better way of adding clarity to your code to better describe the content for future maintainers.

Look below to see how we’re able to take a reusable chunk of HTML and build an entire social feed component. Classes and semantics allow us to reuse our chunks of HTML.

```html
<div class="social-feed">
  <div class="social-post">
    <h2 class="user-name">@sassy_pants_mcgee</h2>
    <h3 class="posted-date">Posted 15m ago</h3>
    <img
         class="profile-picture"
         src="http://pets-images.dev-apis.com/pets/dog25.jpg"
         alt="a doggy"
         />
    <p class="social-post-text">
      You ever think about barking out the window? What would happen if I didn't
      bark at them? Keeps me up at night.
    </p>
  </div>
  <div class="social-post">
    <h2 class="user-name">@TailCurious</h2>
    <h3 class="posted-date">Posted 18m ago</h3>
    <img
         class="profile-picture"
         src="http://pets-images.dev-apis.com/pets/dog26.jpg"
         alt="a different doggy"
         />
    <p class="social-post-text">
      You ever notice that white bit of fluff behind you? Is that just me? I
      always try to chase it but it's always gets away. #ScaryTails
    </p>
  </div>
  <div class="social-post">
    <h2 class="user-name">@haveUrCakeAndEatIt2</h2>
    <h3 class="posted-date">Posted 21m ago</h3>
    <img
         class="profile-picture"
         src="http://pets-images.dev-apis.com/pets/dog27.jpg"
         alt="a doggy"
         />
    <p class="social-post-text">#BirthdayGrrrrrrrrrrl</p>
  </div>
</div>
```

## Things to Know

- If you have an absolute link like `href="www.google.com"`
 that will actually take you to Google. But if your website were `www.example.com` and on there you had a link to `href="/about"` it would take you to `www.example.com/about`. It's relative to the base URL. The leading slash means it's always `www.example.com/about`
 no matter where you are on the site. If you're at `www.example.com/blah` and there's a link to `href="about"`
 with no slash, the link will take you to `www.example.com/blah/about` whereas `href="/about"`
 will take you to `www.example.com/about`.
- Class names are case-insensitive so the rule of thumb is to just make them lowercase and to use dashes in place of spaces.
- Class naming is also up to the coder, but generally, you want to convey meaning behind the name to help future maintainers.