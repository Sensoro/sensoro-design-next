import '@testing-library/jest-dom/vitest';

// eslint-disable-next-line no-restricted-globals
global.ResizeObserver = class ResizeObserver {
  cb: any;
  constructor(cb: any) {
    this.cb = cb;
  }

  observe() {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
  }

  unobserve() {}
  disconnect() {}
};
