# <img width="100" src="https://github.com/equneko/alfascript/blob/main/res/icon.png"></img> AlfaScript - Little Odd Experiment
**AlfaScript** is a little-bit additional experiment features for the **JavaScript** programming language. </br>
That brings you to the different way of coding on the web-browsers.

### ~ Browsers Support - ES5 EcmaScript 2009 ~
Chrome v1+ | Firefox v1+ | Edge v12+ | Opera v3 | IE v9+ | Safari v1 | Android WebView v4.4

# Installation
- Download Released Versions
- Using CDN JSDelivr:
```xml
<script src="https://cdn.jsdelivr.net/gh/equneko/alfascript/src/v0.11/alfascript.js"></script>
```
```xml
<script src="https://cdn.jsdelivr.net/gh/equneko/alfascript/src/v0.11/alfascript.min.js"></script>
```

# Get Started
Deal with **Standard Feature** for a useful code, that had been type more than once. </br>
An example below are the basic of **AlfaScript** additional experiment features. ``alfa.use(feature)``,
``log(object)`` and ``put(text)``
```javascript
alfa.use('#std','math.random');

log("Hello World");
var range = put("Type Number Randomly");
log("Your Random Number: "+random()*range);
```

## DOM Manipulation
This is the best feature that makes **JavaScript** able to manipulate DOM easier with function methods. </br>
With the ``dom.init`` and ``dom.render`` you can use a feature that allows you to create, manipulate **HTML Element** indirectly.
```javascript
alfa.use('#std','dom','dom.render');

dom.init('h1','p');
render(
  h1("Hello World!"),
  p("Learn Weird Language <b>AlfaScript!</b>")
);
```
