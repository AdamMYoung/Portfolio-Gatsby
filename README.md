# React-Redux-Router Kickstart

This is a generic template, used to kickstart the development of modern React apps. It comes pre-configured with:

- Axios (with examples)
- React Redux (with examples)
- React Router (with examples)
- Generic authentication providers

## Structure

The template has the following structure:

- API - All API interaction logic, made through Axios
- Assets - Static content to display on the site
- Containers - React Redux containers, used to hook into the Redux store and provide interaction logic
- Hooks - React hooks used in the application
- Providers - Data providers used within the application, allowing components to hook into them and access exposed data
- Routes - URL routes of the application
- Store - Redux store information, such as actions, reducers, types and thunks
- Utils - Utility classes of the application
- Views - Standalone view components, typically used by containers to display information to the user

## Development Rules

Below are some rules you should try to follow when developing within this template.

- React components should be pascal case. e.g. `<MyNewComponent/>` and `MyNewComponent.tsx`.
- Classes should be camel case. e.g. `stringHelpers.ts`
- Folders should be all lower case, separated by hyphens. e.g. `/src/my-new-folder`
- If you find yourself re-implementing properties, try extending existing props instead. For an example of this, check the `AuthenticatedRoute.tsx` props.
- Try and avoid too many nested folders. This can result in ugly and unreadable import statements.
- React is based around **composition** rather than inheritance. This usually means you'll develop simpler components first, and build more complex ones from this. Don't dive straight into implementation, first break it down into its constituent parts. This will greatly promote re-usability within the application.

## Configuration

- .env - Configuration information is provided to the application using the .env files at the root of the template. These provide differing URLS at compile time depending on the build selected (dev/test/build).

- .prettier - Opinionated code formatter, used to apply agreed styling to the codebase.

## Building

### `yarn start`

This will start the application in developer mode. Redux calls will be visible via the Redux devtools browser extension, and break points can be hit in this mode.

### `yarn test`

This will run all tests within the application, and output the results to the console window.

### `yarn build`

This will build a production-ready version of the application, to deploy where needed.

## Further Reading

Below are some good tutorials/guides to get to grips with the various technologies used within the template.

- React - https://reactjs.org/docs/getting-started.html
- Axios - https://github.com/axios/axios
- React Router - https://reacttraining.com/react-router/web/
- React Redux - https://redux.js.org/basics/basic-tutorial
- React Redux (Typescript) - https://redux.js.org/recipes/usage-with-typescript
