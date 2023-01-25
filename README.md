<div align="center">

<img src="https://github.com/sheriffMoose/storybook-ngx/blob/master/logo.png?raw=true" alt="logo" width="200" />

<h1>Storybook Angular Extras</h1>

<p>Storybook addon that adds few features to the original Angular Storybook integration.</p>

[![][img.release]][link.release]
[![][img.license]][link.license]

![][img.node]
![][img.npm]
![][img.downloads]

[![][img.angular]][link.npm]
[![][img.storybook]][link.npm]
[![][img.typescript]][link.npm]

[![][img.health]][link.snyk]

[![][img.banner]][link.npm]

</div>

```
## Announcement

I have recently decided on splitting this addon into multiple other addons. So, we will be moving to @storybook-extras repo which will contain all the addons. This will make it easier to maintain and also to add new features. I will be working on this in the next few weeks.

This addon will be deprecated in favor of the new addons. And it will be pointing to the new addons for the features. So, you can still use it as it is. But, I will be adding new features to the new addons.

For more information the features and new addons, please refer to the documentation available at the [`@storybook-extras`](https://github.com/sheriffMoose/storybook-extras) repo.
```


## Features

-   ⚡️ Zero config setup.
-   📚 Supports latest Storybook v7.
-   🅰️ Supports latest Angular v15.
-   📔 Coverage Instrumentation for Test-Runner
-   🧪 Auto injector for Angular services
-   🦥 Lazy loading documentation
-   💬 Source code display
-   🌯 Story Wrappers selector toolbar
-   💻 Console Logs Panel
-   📃 Auto Markdown & HTML Docs support
-   👨‍💻 Swagger/OpenAPI Integration


## Getting started

1. Install the addon:

```js
yarn add @sheriffmoose/storybook-ngx -D
```

1. Add the addon

```js
// .storybook/main.js
module.exports = {
    ...
    "addons": [
        "@sheriffmoose/storybook-ngx",
        ...
    ],
    ...
}
```

3. Refer to the sections below for the documentation of the built-in features.

## Demo/Chromatic
Find the published demo storybook on chromatic [here](https://master--63c1a45beed1a8f036a44e28.chromatic.com/)



## Migration Plan

These features each have their own addon, and are available for all frameworks. They still work the same way as before, but are under new name and new refactored code.

| Feature | Previously | New Addon |
| --- | --- | --- |
| 📔 Coverage Instrumentation for Test-Runner | @sheriffMoose/storybook-ngx | @storybook-extras/coverage |
| 🧪 Auto injector for Angular services | @sheriffMoose/storybook-ngx | @storybook-extras/angular |
| 🦥 Lazy loading documentation | @sheriffMoose/storybook-ngx | @storybook-extras/angular |
| 💬 Source code display | @sheriffMoose/storybook-ngx | @storybook-extras/angular |
| 🌯 Story Wrappers selector toolbar | @sheriffMoose/storybook-ngx | @storybook-extras/angular |
| 📃 Auto Markdown & HTML Docs support | @sheriffMoose/storybook-md | @storybook-extras/markdown |
| 💻 Console Logs Panel | Part of @sheriffMoose/storybook-ngx | @storybook-extras/console |
| 👨‍💻 Swagger/OpenAPI Integration | Part of @sheriffMoose/storybook-ngx | @storybook-extras/swagger |

## Credits

-   Thanks for `JS Devtools` for their amazing `coverage istanbul loader`, we are also working on integration this instrumentation into `@storybook/addon-coverage`.
-   Thanks for `@storybook/addon-backgrounds` for the inspiration for the `wrappers selector` feature.
-   This would not have been possible without the official `@storybook/angular` framework.
-   Thanks for the team behind the official `Storybook Addon Kit` specially [`@winkerVSbecks`](https://github.com/winkerVSbecks) for the amazing work they put into this kit that was very helpful for generating this addon.













[img.logo]:
https://github.com/sheriffMoose/storybook-ngx/blob/master/logo.png?raw=true
[img.release]:
https://img.shields.io/github/actions/workflow/status/sheriffMoose/storybook-ngx/release.yml?logo=github&label=release
[img.license]:
https://img.shields.io/github/license/sheriffMoose/storybook-ngx?logo=github

[img.node]:
https://img.shields.io/node/v/@sheriffmoose/storybook-ngx?logo=node.js&logoColor=white&labelColor=339933&color=grey&label=
[img.npm]:
https://img.shields.io/npm/v/@sheriffmoose/storybook-ngx?logo=npm&logoColor=white&labelColor=CB3837&color=grey&label=
[img.downloads]:
https://img.shields.io/npm/dt/@sheriffmoose/storybook-ngx?logo=docusign&logoColor=white&labelColor=purple&color=grey&label=

[img.angular]:
https://img.shields.io/npm/dependency-version/@sheriffmoose/storybook-ngx/dev/@angular/core?logo=angular&labelColor=DD0031&color=grey&label=
[img.storybook]:
https://img.shields.io/npm/dependency-version/@sheriffmoose/storybook-ngx/dev/storybook?logo=storybook&logoColor=white&labelColor=FF4785&color=grey&label=
[img.typescript]:
https://img.shields.io/npm/dependency-version/@sheriffmoose/storybook-ngx/dev/typescript?logo=typescript&logoColor=white&labelColor=3178C6&color=grey&label=

[img.health]:
https://snyk.io/advisor/npm-package/@sheriffmoose/storybook-ngx/badge.svg

[img.banner]:
https://nodei.co/npm/@sheriffmoose/storybook-ngx.png

[link.release]:
https://github.com/sheriffMoose/storybook-ngx/actions/workflows/release.yml
[link.license]:
https://github.com/sheriffMoose/storybook-ngx/blob/master/LICENSE
[link.npm]:
https://npmjs.org/package/@sheriffmoose/storybook-ngx
[link.snyk]:
https://snyk.io/advisor/npm-package/@sheriffmoose/storybook-ngx