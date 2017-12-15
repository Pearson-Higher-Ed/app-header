# app-header [![Build Status](https://travis-ci.org/Pearson-Higher-Ed/app-header.svg?branch=master)](https://travis-ci.org/Pearson-Higher-Ed/app-header)

## Usage

If you are consuming version 1.0.0+ of app-header, you must consume the Elements SDK, as it is a required dependency. It
is looking for the /fonts assets in the root of your served application.

Assumption: You have Node v4+ and npm 2+ installed.

	> npm i --save @pearson-components/app-header

### Bundle (Recommended)

The javascript bundle is available in /node_modules/@pearson-components/app-header/build/dist.app-header.js.

Add the following script include to your web page:

```html
	<script src="path/to/dist.app-header.js"></script>
```

Please see the [demo code](https://github.com/Pearson-Higher-Ed/app-header/blob/master/demo/src/bundle-eventing.js) for
examples of how to dispatch the event to initialize the app-header.

**Note this example is using CustomEvent, which must be poly-filled for IE.**

```js
document.dispatchEvent(new CustomEvent('o.DOMContentLoaded', {
    detail: {
      element: element,
      config: config
    }
  }));
```

The config property options are outlined further down in this README.

### CommonJS

This method requires a web bundler, such as webpack or browserify.

After installing the app-header from npm, define the target element and configuration options.

```js
var AppHeader = require('@pearson-components/app-header');
var appHeader = new AppHeader(element, options);
```


### Via CDN

This component is published to NPM and is therefore available via unkpg.com.  This allows teams to be able to consume the component through a
simple script include.  Below is an example which allows a basic App-Header to appear on the page.

```
<html>
  <head>
    <script type="text/javascript" src="https://unpkg.com/@pearson-components/app-header@2.1.0/build/dist.app-header.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        var element = document.getElementsByTagName('body');
        var config = {
          session: 'session',
          user: {givenName: 'Bender'},
          mode: 'Basic',
          onLogin: function () { alert('You signed in'); },
          onLogout: function () { alert('Buh-bye'); }
        };

        document.dispatchEvent(new CustomEvent('o.DOMContentLoaded', {
          detail: {
            element: element,
            config: config
          }
        }));
      });
    </script>
  </head>
  <body>
    <script>
      if (document.body.children[0].nodeName !== 'svg') {
        var pe_ajax = new XMLHttpRequest();
        pe_ajax.open("GET", "https://unpkg.com/pearson-elements@1.14.9/dist/icons/p-icons-sprite-1.1.svg", true);
        pe_ajax.responseType = "document";
        pe_ajax.onload = function(e) {
          document.body.insertBefore(
            pe_ajax.responseXML.documentElement,
            document.body.childNodes[0]
          );
        }
        pe_ajax.send();
      }

      document.dispatchEvent(new CustomEvent('DOMContentLoaded'));
    </script>
  </body>
</html>
```

### Configuration

Configuration properties may be passed as an object argument (preferred) to the constructor or defined in a configuration
block on the page:

```html
<script data-o-app-header-config type="application/json">
  {
  	"consoleBaseUrl": "https://...",
  	"session": "Session"
  }
</script>
```

Refer to the [options object](#api-ctor) for a list of properties.

<!-- ## Responsive -->

### Integration

Refer to the [Integration](INTEGRATION.md) document, which details use with piSession.js and context-based mode switching.

## API

### Constructor

<a name="api-ctor"></a>
`new AppHeader([element], [options])`

Creates a new instance of `AppHeader`.

- `element`: an `HTMLElement` or selector string. The selected element will be replaced with the `header` element unless it is `document.body`, in which case the header will be preprended to the body content.
- `options`: an object with the following properties:

| Property                 | Type                   | Description                       |
|--------------------------|------------------------|-----------------------------------|
| consoleBaseUrl           | `string`               | The consuming application base URL (default: https://console.pearson.com) |
| links                    | `object`               | Links in the user dropdown. Refer to the [Links](#links) section for the default list  |
| mode                     | `string`               | The mode. Refer to the [Modes](#modes) section for a list of supported modes and options. |

It is in this `options` object that you change the URLs and names of the links, including the home link. The name of the home link should be "Pearson [name of your application] home". The default is just "home".

```js
var AppHeader = require('@pearson-components/app-header');
var appHeader = new AppHeader({ mode: 'Signed Out', showLoginControls: false });
```

### Methods

`setMode(mode, [options])`

Sets the mode. Refer to the [Modes](#modes) section for a list of supported modes and options.

- `mode`: a string that indicates the header mode.
- `options`: an object containing the mode options.


<a name="links"></a>

## Links object

By default the links object looks like:

| Link Name                | URL                                           |
|--------------------------|-----------------------------------------------|
| home                     | `{consoleBaseUrl}/console/home`               |
| myAccount                | `{consoleBaseUrl}/account/manage/account`     |
| termsOfUse               | `{consoleBaseUrl}/account/manage/tos`         |
| privacyPolicy            | `{consoleBaseUrl}/account/manage/privacy`     |



<a name="modes"></a>

## Modes

The application header supports multiple modes that can be configured depending on the type and state of the application.

### Mode: Signed Out

Use this mode when the user is anonymous.

```js
new AppHeader({ mode: 'Signed Out', showLoginControls: false });
```

#### Options

| Property                 | Type                   | Description                       |
|--------------------------|------------------------|-----------------------------------|
| showLoginControls        | `Boolean`              | If true, show the 'Sign In' nav item. Default: true.
| onLogin                  | `Function` or `string` | A callback function that will be called when the user clicks the *Sign In* nav item. If this value is a string, the component will look in the global scope for a function with a matching name. |

### Mode: Basic

Use this mode when the user is authenticated.

```js
new AppHeader({
	mode: 'Basic',
	user: {
		givenName: 'John'
	},
	courseItems: [
		{ text: 'Physics', href: 'https://example.com/physics' },
		{ text: 'Chemistry', href: 'https://example.com/physics' }
	]
});
```

#### Options

| Property                 | Type                   | Description                       |
|--------------------------|------------------------|-----------------------------------|
| user                     | `Object`               | The user data.                    |
| user.givenName           | `string`               | The user's given name.            |
| courseItems              | `Array<Object>`        | A collection of course menu items. |
| courseItems.text         | `string`               | The menu item text.               |
| courseItems.href         | `string`               | The menu item url.                |
| courseItems.onClick      | `Function`             | If provided, the function will be called when the user clicks the menu item. |
| onLogout                 | `Function` or `string` | A callback function that will be called when the user clicks the *Sign Out* menu item. If this value is a string, the component will look in the global scope for a function with a matching name. |

### Mode: Course

Use this mode when the user is authenticated and is in an application that adheres to the course format.

```js
new AppHeader({
	mode: 'Course',
	user: {
		givenName: 'John'
	},
	courseNav: {
		heading: { text: 'Physics', href: 'https://example.com/physics' },
		items: [
			{ text: 'Performance', href: 'https://example.com/performance' },
			{ text: 'Assessments', href: 'https://example.com/assessments' }
		]
	}
});
```

#### Options

| Property                 | Type                   | Description                       |
|--------------------------|------------------------|-----------------------------------|
| user                     | `Object`               | The user data.                    |
| user.givenName           | `string`               | The user's given name.            |
| courseNav                | `Object`               | An object containing options for course navigation menu items. |
| courseNav.heading        | `Object`               | An object representing the current course. |
| courseNav.heading.text   | `string`               | The heading menu item text.       |
| courseNav.heading.href   | `string`               | The heading menu item url.        |
| courseNav.items          | `Array<Object>`        | The course navigation menu items. |
| courseNav.items.text     | `string`               | The menu item text.               |
| courseNav.items.href     | `string`               | The menu item url.                |
| courseNav.items.active   | `Boolean`              | Represents the active area of the course. If true, the menu item will be disabled. Default: false. |
| onLogout                 | `Function` or `string` | A callback function that will be called when the user clicks the *Sign Out* menu item. If this value is a string, the component will look in the global scope for a function with a matching name. |

### Mode: Integration

Use this mode when the application is configured as an integration with a non-Pearson application or web property&mdash;for example, a third party LMS.

```js
new AppHeader({ mode: 'Integration' });
```

### Events

| Event Name               | Description                                         |
|--------------------------|-----------------------------------------------------|
| oAppHeader.help.toggle	 | Fires when the **Help** nav item is clicked.				 |
| oAppHeader.login         | Fires when the **Sign In** nav item is clicked.     |
| oAppHeader.logout        | Fires when the **Sign Out** menu item is clicked.   |

```js
document.addEventListener('oAppHeader.help.toggle', function (e) {
	// Do stuff
});
```

## z-index

By default, the header's `z-index` property is set to 1000. This value can be changed by setting the `$o-app-header-z-index` SASS variable.


## Changing the header.template

If you make changes to the header.template file, the template generator needs to be run (manually).

```
node bin/gen-template srcFile endFile
```

The `endFile` here is template.js, meaning if you made a change in header.template, your command is

```
node bin/gen-template src/html/header.template src/js/template.js
```


<!-- ## i18n

Setting the `locale` configuration property will render the header with the translated strings, if the locale is supported.
The following languages are supported:

- `ar` Arabic
- `de` German
- `en` English (default)
- `fr` French
- `it` Italian
- `ja` Japanese
- `ko` Korean
- `nl` Dutch
- `pl` Polish
- `pt` Portuguese
- `ru` Russian
- `tr` Turkish
- `zh-Hans` Chinese (simplified) -->

## Browser support

Browser versions that do not support [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) must use a polyfill, for example via the [polyfill service](https://cdn.polyfill.io/v1/docs/):

```html
<script src="https://cdn.polyfill.io/v1/polyfill.min.js?features=default,WeakMap"></script>
```

## Contributing

Please review the [guidelines](https://github.com/Pearson-Higher-Ed/docs/blob/master/origami-contributions.md) for contributing before getting started.

### Toolchain

- [Node.js](http://nodejs.org) `v4+`
- [webpack](https://webpack.github.io/)

Recommendation: If you are using different node versions on your machine, use [nvm](https://github.com/creationix/nvm)
to manage them.

### Demo

The following npm script will build the component, fire up a webpack dev server at localhost:8080/demo, and hot reload
any saved changes to the source without having to refresh the browser.

	npm install
	npm run dev

### Test

The following npm script will execute the unit tests.

	npm test

### How do I debug?

Source maps are enabled for the webpack dev server. Using **Chrome dev tools** - open the "Sources" tab, navigate to
`top/webpack://./`, and you will find the original source files for which you can set breakpoints in Chrome's debugger.

## License

This software is published by Pearson Education under the [MIT license](LICENSE).
