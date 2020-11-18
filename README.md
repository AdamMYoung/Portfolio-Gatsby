# TQ Gatsby Template

This is a Gatsby template based on the TQ React template, used to kickstart the development of static Gatsby apps. It comes pre-configured with:

- Axios (with examples)
- React Redux (with examples)
- SSR and CSR configuration (with examples)
- Localization support (with examples)
- Dynamic CMS page generation (with examples)

In terms of UI styling, the template is based on Bootstrap, with SASS overrides and CSS modules used as default.

## Structure

The template has the following structure:

- API - All API interaction logic, made through Axios
- Images - Static content to display on the site
- CSS - Base SASS files, along with overrides for bootstrap if required.
- Components - Custom re-usable react components, sub-categorized for readability.
  - Containers - React Redux containers, used to hook into the Redux store and provide interaction logic
  - Hooks - React hooks used in the application
  - Providers - Data providers used within the application, allowing components to hook into them and access exposed data
  - Views - Standalone view components, typically used by containers to display information to the user
- Routes - Client-side routing, for use in SPA applications.
  - Custom - Custom route logic, such as custom authenticated routes.
- Templates - Templates for use in dynamic page generation, typically using Kentiko.
- Pages - Static pages to render, with routing based on file name and folder structure.
- Store - Redux store information, such as actions, reducers, types and thunks
- Utils - Utility classes of the application

## Development Tips

Below are some tips you should try to follow when developing within this template.

- React components should be pascal case. e.g. `<MyNewComponent/>` and `MyNewComponent.tsx`.
- Classes should be camel case. e.g. `stringHelpers.ts`
- Folders should be all lower case, separated by hyphens. e.g. `/src/my-new-folder`
- Try and avoid too many nested folders. This can result in ugly and unreadable import statements.
- React is based around **composition** rather than inheritance. This usually means you'll develop simpler components first, and build more complex ones from this. Don't dive straight into implementation, first break it down into its constituent parts. This will greatly promote re-usability within the application.
- Please read the Gatsby documentation before creating your own solution. There are many plugins and the differentiation between SSR and CSR is very important in Gatsby.

## Configuration

- .env - Configuration information is provided to the application using the .env files at the root of the template. These provide differing URLS at compile time depending on the build selected (dev/test/build).

- .prettier - Opinionated code formatter, used to apply agreed styling to the codebase.

## Building

### `npm start` / `yarn start`

This will start the application in developer mode. Redux calls will be visible via the Redux devtools browser extension, and break points can be hit in this mode.

### `npm test` / `yarn test`

This will run all tests within the application, and output the results to the console window.

### `npm run build` / `yarn run build`

This will build a production-ready version of the application, to deploy where needed.

## Further Reading

Below are some good tutorials/guides to get to grips with the various technologies used within the template.

- React - https://reactjs.org/docs/getting-started.html
- Gatsby - https://www.gatsbyjs.com/docs/guides/
- Axios - https://github.com/axios/axios
- React Bootstrap - https://react-bootstrap.github.io/components/alerts
- React Redux - https://redux.js.org/basics/basic-tutorial
- React Redux (Typescript) - https://redux.js.org/recipes/usage-with-typescript
