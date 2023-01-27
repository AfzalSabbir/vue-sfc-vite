# Vue SFC Vite - A Vue 3 SFC Vite template

> A package to create Vue 3 SFC Vite projects. <br/>
<sub><sup>Inspired by [VueSFCRollup](https://github.com/team-innovation/vue-sfc-rollup)</sup></sub> <br/>
**VueSFCRollup** was a great package to create SFC Rollup projects. But after there deprecation of the package, we
> decided to create a similar package for Vite.
> <br/><br/>
> Used [`Vite`](https://vitejs.dev/)/[`Library Mode`](https://vitejs.dev/guide/build.html#library-mode) configuration to
> create a single file component template for Vue 3 _(Supports Vue 2 as well)_.
> <br/><br/>
> `vue-sfc-vite` is a CLI templating utility that scaffolds a minimal setup for compiling a Vue Single File Component (
> SFC) - into a form ready to share via npm. It doesn't assume any particular flavor of CSS or docs generator, so you
> can use what you're already used to. It's the fastest way to produce npm-ready vue components!

## Installation

### Install globally

```bash
# Install globally (recommended)
npm install -g vue-sfc-vite
vue-sfc-vite
```

### **OR** use via npx

```bash
# For immediate, no-install usage
npx vue-sfc-vite
```

## Usage

```bash
# Fill in prompts

# Navigate to library folder
cd path/to/my-component-or-lib
npm install

## Create a SFC
vue-sfc-vite
```
_[**Note**: visit [here](https://gist.github.com/AfzalSabbir/e3a729413ba780e12f6a8ade3f76bf16) to get the installation guide for mono-repo using lerna]_

### SFC Options

- Which version of Vue are you writing for?
  - [x] Vue 3
  - [ ] Vue 2 

- Is this a single component or a library?
  - [x] Single Component

- What is the npm name of your component?
  - [x] my-component

- What is the kebab-case tag name for your component?
  - [x] my-component

- Will this component be written in JavaScript or TypeScript?
  - [x] TypeScript
  - [ ] JavaScript

- Enter a location to save the component files:
  - [x] ./my-component

### Add styles to your component
- Visit `my-component/src/assets/scss/my-component.scss` and add your styles to the file.
  - In `my-component.vue` file, import the styles file as shown below:
    ```scss
    <style scoped lang="scss">
      @import "../assets/scss/<%= componentName %>.scss";
    </style>
    ``` 
    _[**Note**: Importing styles in this way will make sure that the styles are scoped to the component. But if you import the styles in the `<script lang="ts/js">...</script>` tag of the `SFC`, then the styles might not work as expected. So, it's recommended to import the styles in the `<style scoped lang="scss">...</style>` tag of the `SFC` as shown above. Also, make sure that you have installed `sass` and `sass-loader` as dev dependencies. If not, then install them using the following command: `npm install -D sass sass-loader`. For more information, visit [here](https://vitejs.dev/guide/features.html#css-pre-processors).]_

## Features

- 📦 **Single File Component** - Create a single file component for Vue 3.
- 📦 **Vue 2 Support** - Create a single file component for Vue 2.
- 📦 **Vue 3 Support** - Create a single file component for Vue 3.
- 📦 **Vue 3 Composition API** - Create a single file component for Vue 3 with Composition API.
- 📦 **Vue 3 Composition API + Vue 2 Support** - Create a single file component for Vue 3 with Composition API and Vue 2
  Support.