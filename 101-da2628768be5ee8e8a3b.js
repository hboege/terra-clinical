(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1201:function(e,n){},1291:function(e){e.exports=JSON.parse('{"name":"terra-clinical-detail-view","main":"lib/DetailView.js","version":"3.10.0","description":"Detail Views allows you to create a view with text at different levels of importance. A detail view can contain a title, subtitles, a graph, a footer and a list of elements that can display information at a more detailed level. A Detail List is a structural subcomponent of Detail View indented to be used within the details prop. A Detail List accepts and arranges DetailListItem elements in a flexbox layout that wraps the list of items by row. Detail List Items are the elements to be placed within a Detail List. A Detail List Item accepts one element item and applies a minimum width of 50% so that the element spans at minimum half of the Detail List. This allows the Detail List to have either one or two items per row depending on the width of the item content in each item.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-clinical.git"},"keywords":["Cerner","Terra","terra-clinical-detail-view","DetailView","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-clinical/issues"},"homepage":"https://github.com/cerner/terra-clinical#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-clinical-item-display":"^3.9.0","terra-clinical-label-value-view":"^3.10.0","terra-doc-template":"^2.0.0","terra-icon":"^3.0.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},1847:function(e,n,t){"use strict";t.r(n),n.default='ChangeLog\n=========\n\nUnreleased\n----------\n\n3.10.0 - (September 26, 2019)\n------------------\n### Changed\n* Minor dependency updates\n\n3.9.0 - (September 19, 2019)\n----------\n### Changed\n* Convert SCSS files to .module.scss\n\n3.8.0 - (September 6, 2019)\n----------\n### Changed\n* Removed inline styles from dev site components.\n* Replaced Object.assign syntax with Object spread syntax\n* Add comments for ESlint 6\n* Cleaned up imports in examples and test files\n\n3.7.0 - (August 14, 2019)\n----------\n### Changed\n* Updated package.json test scripts\n\n3.6.0 - (July 16, 2019)\n----------\n### Changed\n* Replaced inline stylings for terra-dev-site components with .scss files\n* Update wdio specs to use Terra.describeViewports\n\n### Fixed\n* Added max-width to DetailListItem resolving IE10 wrapping issue for label-value-views inside of detail-view-list.\n\n3.5.0 - (June 11, 2019)\n----------\n### Removed\n* Removed node_modules from .npmignore\n\n3.4.0 - (March 26, 2019)\n----------\n### Changed\n* Update react/react-dom peer-dependency to latest stable minor release\n\n### Removed\n* Removed peer dependency on terra-base\n* Removed baseStyles import from terra-base\n\n3.3.0 - (February 26, 2019)\n----------\n### Changed\n* Minor dependency updates\n\n3.2.0 - (February 5, 2019)\n----------\n### Changed\n* Minor dependency updates\n\n3.1.0 - (January 22, 2019)\n----------\n### Change\n* Dependency updates\n\n3.0.0 - (January 17, 2019)\n----------\n### Breaking Change\n* Renamed theming variables to match new lint standards\n\n### Added\n* Changelog dev site doc page\n\n2.17.0 - (November 21, 2018)\n----------\n### Changed\n* Minor dependency updates\n\n2.16.0 - (October 8, 2018)\n----------\n### Changed\n* Minor dependency updates\n\n2.15.0 - (October 2, 2018)\n----------\n### Changed\n* Formatting changes per eslint v5 update\n\n2.14.0 - (September 5, 2018)\n----------\n### Changed\n* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2\n* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2\n\n2.13.0 - (August 30, 2018)\n----------\n### Changed\n* Minor dependency updates\n\n2.12.0 - (August 1, 2018)\n----------\n### Changed\n* Minor updates\n\n2.11.1 - (July 25, 2018)\n----------\n### Changed\n* Patch release\n\n2.11.0 - (July 25, 2018)\n----------\n### Changed\n* Minor updates\n\n2.10.0 - (July 17, 2018)\n----------\n### Changed\n* Minor updates\n\n2.9.0 - (July 3, 2018)\n----------\n### Changed\n* Minor updates\n\n2.8.0 - (June 28, 2018)\n----------\n### Added\n* Added word-wrap property to DetailView titles and subtitles\n* Added test page for overflow text\n\n### Fixed\n* Lint in doc page\n\n2.7.0 - (June 19, 2018)\n----------\n### Changed\n* Minor updates\n\n2.6.0 - (June 12, 2018)\n----------\n### Changed\n* Conform to eslint updates\n* Added theming variables in Detail View\n\n2.5.0 - (May 30, 2018)\n----------\n### Changed\n* Moved examples to src\n\n2.4.0 - (May 22, 2018)\n----------\n### Changed\n* Minor dependency updates\n\n2.3.0 - (May 1, 2018)\n----------\n### Added\n* Added new props "secondaryTitles", "accessory", and "isSmallerTitles"\n\n### Changed\n* Updated spacing & text sizes\n* Updated empty/none default prop values to undefined\n\n2.2.0 - (March 27, 2018)\n----------\n### Changed\n* Updated text sizes & colors\n\n2.1.0 - (March 6, 2018)\n----------\n### Changed\n* Minor dependency updates\n\n2.0.0 - (February 19, 2018)\n----------\n### Changed\n* Update to React 16\n\n1.5.0 - (February 19, 2018)\n----------\n### Changed\n* Minor dependency updates\n\n1.4.0 - (September 26, 2017)\n-----------------\n### Changed\n* Remove stylelint-disable selector-class-pattern\n\n1.3.0 - (September 1, 2017)\n-----------------\n### Changed\n* Change dependency on terra-base to v2.0.0\n* Update nightwatch tests and test scripts.\n\n1.2.0 - (August 16, 2017)\n-----------------\n### Changed\n* Change data-class to be name spaced\n\n### Fixes\n* Fixed divider rendering for when graphic is not present which caused double dividers\n* Fixed styling that applied padding-bottom on all children\n\n1.1.1 - (July 27, 2017)\n-----------------\n* Updated spacing around react-docgen comments\n\n1.1.0 - (July 18, 2017)\n-----------------\n### Changed\n* Converted component to use CSS modules\n* Updated nightwatch test scripts\n\n### Removed\n* Removed nightwatch.config file\n\n1.0.0 - (June 28, 2017)\n-----------------\nInitial stable release\n'},1971:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(0)),i=r(t(1200)),d=r(t(1847)),s=t(1291);function r(e){return e&&e.__esModule?e:{default:e}}var o=function(){return a.default.createElement(i.default,{packageName:s.name,srcPath:"https://github.com/cerner/terra-clinical/tree/master/packages/".concat(s.name),readme:d.default})};n.default=o}}]);
//# sourceMappingURL=101-da2628768be5ee8e8a3b.js.map