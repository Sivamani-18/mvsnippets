<!-- [![Version](https://vsmarketplacebadge.apphb.com/version/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/version-short/dsznajder.es7-react-js-snippets.svg)
[![Install](https://vsmarketplacebadge.apphb.com/installs/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/installs-short/dsznajder.es7-react-js-snippets.svg)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/downloads-short/dsznajder.es7-react-js-snippets.svg)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/rating-short/dsznajder.es7-react-js-snippets.svg) -->

# VS Code React/HTML/CSS/JS/Apostrophecms snippets

JavaScript and React / HTML / CSS / Apostrophecms snippets plugin features for [VS Code](https://code.visualstudio.com/)

## Installation

### Visual Studio Marketplace

Launch _Quick Open_:

- [_Linux_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf): `Ctrl+P`
- [_macOS_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf): `⌘P`
- [_Windows_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf): `Ctrl+P`

Paste the following command and press `Enter`:

```shell
ext install Sivasubramaniyam.mwdevsnippets
```

## Search command

You can search through snippets with `MV snippet search` command which can be run with `CMD + Shift + P` or just use `CMD + Shift + R` (`CTRL + ALT + R` for Windows & Linux) keybinding.


### HTML

|  Prefix | Method                                              |
| ------: | --------------------------------------------------- |
|  `mw.section→` | `Add section tag with comment`                   |


### CSS

|  Prefix | Method                                              |
| ------: | --------------------------------------------------- |
|  `mw-body→` | `common css`|



### React

|  Prefix | Method                                              |
| ------: | --------------------------------------------------- |
|  `rcreduxp→` | `React Class Compoment Redux PropTypes`|


### TSReact

|  Prefix | Method                                              |
| ------: | --------------------------------------------------- |
|  `rh→` | `Typescript React Function Component` |
|  `tsrcc→` | `Type Script React Class Component` |


<br>

### Apostrophecms Snippets

## Features

A snippet library for ApostropheCMS development.

### HTML Template Snippets

|  Prefix | Method                                              |
| ------: | --------------------------------------------------- |
|  `apos.richtext→` | `Renders a rich text singleton in your template`|
|  `apos.log→` | `Passes expression to console.log.`|
|  `apos.singleton→` | `Renders a single widget in your template`|
|  `apos.area→` | `Renders a single widget in your template`|
|  `apos.isEmpty→` | `Conditional that detects an empty widget`|

### Schemas
#### Further Reading: [https://v2.docs.apostrophecms.org/reference/modules/apostrophe-schemas/#apos-schemas](https://v2.docs.apostrophecms.org/reference/modules/apostrophe-schemas/#apos-schemas)

|  Prefix | Method                                              |
| ------: | --------------------------------------------------- |
|  `apos.schema.field→` | `A generic schema field`|
|  `apos.schema.integer→` | `An integer schema field`|
|  `apos.schema.url→` | `A url schema field`|
|  `apos.schema.float→` | `A float schema field`|
|  `apos.schema.area→` | `A generic schema area`|
|  `apos.schema.singleton→` | `A generic schema singleton`|
|  `apos.schema.date→` | `A date field`|
|  `apos.schema.time→` | `A time field`|
|  `apos.schema.boolean→` | `A date field`|
|  `apos.schema.string→` | `A string field`|
|  `apos.schema.password→` | `A password field`|
|  `apos.schema.slug→` | `A slug field`|
|  `apos.schema.tags→` | `A tag array field`|
|  `apos.schema.textarea→` | `A textarea field`|
|  `apos.schema.attachment→` | `An attachment field`|
|  `apos.schema.video→` | `A video field`|
|  `apos.schema.select→` | `A select field`|
|  `apos.schema.array→` | `An array field`|
|  `apos.schema.checkboxes→` | `An array of checkboxes`|
|  `apos.schema.select.choice→` | `A select choice`|
|  `apos.schema.joinByOne→` | `A joinByOne field`|
|  `apos.schema.joinByArray→` | `A joinByArray field`|
|  `apos.schema.joinByOneReverse→` | `A joinByOneReverse field`|
|  `apos.schema.joinByArrayReverse→` | `A joinByArrayReverse field`|


### MISC


|  Prefix | Method                                              |
| ------: | --------------------------------------------------- |
|  `apos.self.find→` | `Fetch a cursor from within a module that extends apostrophe-pieces`|
|  `apos.docs.find→` | `Fetch a cursor from within a module outside of the one you are currently in`|
|  `apos.piece→` | `A piece defition`|
|  `apos.pages→` | `A custom pages defition`|

<br>

### apostrophe - set password and change password

Add user and set password

```
node app apostrophe-users:add admin admin
```

Change Password

```
node app apostrophe-users:change-password admin

```