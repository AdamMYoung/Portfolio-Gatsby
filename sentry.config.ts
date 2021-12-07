import * as Sentry from '@sentry/gatsby';
import { Integrations as TracingIntegrations } from '@sentry/tracing';

Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [new TracingIntegrations.BrowserTracing()],
    autoSessionTracking: true,
    sampleRate: 0.6,
    tracesSampleRate: 0.6,
});
