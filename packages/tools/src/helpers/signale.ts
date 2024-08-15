import signale from 'signale';

const { Signale } = signale;

export function createLogger(scope: string) {
  return new Signale({
    scope,
    types: {
      success: {
        badge: '✔',
        color: 'green',
        label: '',
      },
      error: {
        badge: '✖',
        color: 'red',
        label: '',
      },
    },
  });
}
