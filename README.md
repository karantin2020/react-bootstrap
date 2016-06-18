# yet-another-react-bootstrap
Yet another React.JS bootstrap application.

React, webpack, ES6/7, eslint, karma, mocha, chai, sinon, enzyme.

See packages.json _scripts_ section for available commands.

Static
------
Almost everything (including dot files) from _/static_ directory is copied to the _/build_
(except styles and pug templates). But during development this is
not the case. So please don't rely on it's content during development.

In addition, styles that are imported from _/static_ from the code,
will not be used with __CSS Modules__, and will be inserted without
changes in class names. That could be usefull for the case when
you use some 3-d party styles. (The same is true for importing
styles from node_modules and bower_component).
But it worth trying to reduce the usage of that method.

Usage:

    import specialStyles from 'static/styles/special-styles.css';

You can also make webpack ignore some of the files inside _/static_.
Please, see webpack config looking for _CopyWebpackPlugin_

TODO
----
* fix hash calculation for extracted styles in production mode.
* handle svg (sprites)
* handle png sprites
* handle fonts
* add browsersync
* fix source maps for js and css
