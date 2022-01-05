# AYDev Portfolio

## Overview

This repo is my current portfolio, found at [aydev.uk](https://aydev.uk). It's built with Gatsby 4, Chakra UI, and backed by Contentful.

## Structure

The project is broken down into the following structure

-   `@chakra-ui` - Style overrides for Chakra-UI.
-   `components` - All re-usable components used within the site.
-   `hooks` - Custom utility and static content hooks.
-   `images` - Images used within the site.
-   `pages` - Static pages within the site.
-   `providers` - All context providers.
-   `templates` - Dynamic pages within the site.
-   `utils` - A collection of utility functions.
-   `views` - Stand-alone components used within the site.

## Setup

You will need the following variables defined in your `.env.development` file:

-   `CONTENTFUL_ACCESS_TOKEN` - Access token for contentful
-   `CONTENTFUL_SPACE_ID` - Space ID for contentful
-   `CONTENTFUL_HOST` - Host for contentful (live/preview)
-   `GA_TRACKING_ID` - Google Analytics tracking ID.
-   `HJ_TRACKING_ID` - Hotjar tracking ID.
-   `HJ_SNIPPET_VERSION` - Version of the Hotjar snippet version used.
-   `GITHUB_ACCESS_TOKEN` - Access token for Github to pull analytics
-   `SENTRY_DSN` - DSN for sentry performance monitoring.

Once these are defined, simply run `yarn install` and then `yarn start`.
