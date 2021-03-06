# Share Buttons (Vanilla JS)

###Short facts
* Pure Javascript, no need to use jQuery
* 8 top social networks and mailto links
* 2 different view styles
* Easily configurable position of dropdown
* Possibility to set options via data-attributes
* Browsers: Firefox, Chrome, Safari, iOS, Android, IE9+

Required Files :-
*   dist/social.ttf
*   dist/social.ttf
*   share-buttons.css
*   share-buttons.js


###License
Released under the MIT license - http://opensource.org/licenses/MIT

##Getting started

###Step 1: Add required files from dist directory

Download the package from this repository and include share-buttons.js and share-buttons.css (Add the "font" folder with the css file in same directory).

```html
<!-- Popup Javascript file -->
<script src="share-buttons.js"></script>
<!-- Popup CSS file -->
<link href="share-buttons.css" rel="stylesheet" />
```

###Step 2: Create HTML markup

Create an empty element, which will be the wrapper of our button and dropdown.
You can add data-attributes to easily configure script.

```html
<span id="share-button" class="arif-share-button-default"></span>
```

###Step 3: Call shareButtons initialization

Just place `new shareButtons(document.getElementById('share-button'));` in your javascript code.

```javascript
new shareButtons(document.getElementById('share-button'));
```

##Customization

There are two ways to set settings.

The first way is to add data-attributes with `data-share` prefix.
```html
<div id="share-button" class="arif-share-button-default" data-share-icon-style="box" data-share-networks="Mailto,Twitter,Pinterest,Facebook,GooglePlus,Linkedin"></div>
```
The second way is to send settings object with script initialization.
```javascript
new shareButtons(document.getElementById('share-button'), {
  iconStyle: 'box',
  boxForm: 'vertical',
  networks: 'Mailto,Twitter,Pinterest,Facebook,GooglePlus,Linkedin'
});
```

To use your own stylized button to trigger social share dropdown, you need to put custom element inside wrapper and set `shareButtons` option
```html
<div id="share-button" class="arif-share-button-default" data-share-position="topCenter" data-share-share-button-class="custom-button"><span class="custom-button"><i class="share-icon"></i> Custom Share Button</span></div>
```

That's all. Please, enjoy to use.

###Options

**shareButtonssClass**
Class of children element which should be used as dropdown trigger button
```
default: 'false'
options: Any string
```

**iconStyle**
View style
```
default: 'default'
options: 'default', 'box'
```

**boxForm**
In the box view you can configure links position
```
default: 'horizontal'
options: 'horizontal', 'vertical'
```

**position**
Dropdown position relatively to button
```
default: 'bottomCenter'
options: 'topLeft', 'topRight', 'topCenter', 'middleLeft', 'middleRight', 'bottomLeft', 'bottomRight', 'bottomCenter'
```

**buttonText**
Text on the share button
```
default: 'Share'
options: Any string
```

**url**
Shared page url
```
default: Current page url
options: Any url
```

**title**
Shared page title
```
default: Current page title
options: Any string
```

**image**
Shared page preview image
```
default: Current page preview image
options: Any image src
```

**description**
Shared page description
```
default: Current page description
options: Any string
```

**networks**
Which social network buttons to show
```
default: 'Mailto,Twitter,Pinterest,Facebook,Linkedin,Tumblr,Mailru,Whatsapp'
options: Any of the network name's from pervios row comma separated
```
