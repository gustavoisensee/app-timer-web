import * as Sentry from '@sentry/browser';

export const init = () => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      environment: process.env.NODE_ENV,
      dsn: 'https://9cc0a5da65304e728e2fffdb249c4b9a@sentry.io/1516843'
    });
  }
};
