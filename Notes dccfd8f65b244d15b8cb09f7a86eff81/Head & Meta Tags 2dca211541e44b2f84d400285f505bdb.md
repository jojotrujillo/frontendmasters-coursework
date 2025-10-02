# Head & Meta Tags

Created: October 29, 2022 7:30 AM
Type: Section - HTML
Materials: https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/html/head-and-meta-tags
Reviewed: No

## Metadata

Link to HTML template for beginning of HTML project:

[fem-intro-to-web-dev/index.html at c7add331743867a9a3de1c8eea3a0c824d366e18 · jojotrujillo/fem-intro-to-web-dev](https://github.com/jojotrujillo/fem-intro-to-web-dev/blob/c7add331743867a9a3de1c8eea3a0c824d366e18/index.html)

If navigating to the HTML template on GitHub, notice the necessary HTML boilerplate to enable browsers to properly interpret the type of document you’re trying to display. This is meta information, such as character set, viewport, and language.

`<!DOCTYPE html>` - Since your browser can understand several versions of HTML, put this at the top to signal to the browser that we're using the latest version.

`<html lang="en"></html>` - Technically, HTML is just a specific type of XML, this tag is necessary to signal to any reader this is actually an HTML doc. The `lang="en"` is the language you're writing your HTML in.

`<head></head>` - Head tells browsers how to handle browser re-sizing's, what character sets your page uses, what the title is, what the favicon is, where the CSS is located, etc. The `<head>` tag (which is over the `body` tag, duh) contains all the important meta data. Nothing that gets *displayed* to the user (like a div or an h1) will *ever* be put in the head.

`<meta>` - The meta tag consists of:

- The `charset="UTF-8"` bit is saying your file is using UTF-8 encoding which includes all characters, letters, and emojis you’d expect to use. Just always use UTF-8 even though there’s more options.
- `name="viewport" content="width=device-width, initial-scale=1.0"` - This is letting the browser know how specifically to handle mobile devices like phones and small tablets. If you don't put this, the browser may just output a really zoomed out view of your website and it's very hard to read.

`<title></title>` allows you to set the title that shows up on the browser tab. It will also be the title of the search result when people search for it on Google.

`<body></body>` All of your visible HTML will go here. Your divs, spans, tables, h1s, etc. all here.

## Things to Note

- Shortcut in VS Code to generate this boilerplate: Be in HTML mode, type html:5, hit Tab
- By convention, the root of your web project should be index.html. If you were building example.com, then index.html would be the home page. If you made an about.html page, then that'd be example.com/about.html. If you made a directory called `dogs` inside of your folder and you added a luna.html file to that directory, the address would be example.com/dogs/luna.html: https://github.com/jojotrujillo/fem-intro-to-web-dev/commit/3309afd1753e3f44f7cb08027122f4532de3d304.