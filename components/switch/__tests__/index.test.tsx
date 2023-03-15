import React from 'react';
import { Switch } from '../index';
import { focusTest } from '../../../tests/shared/focusTest';
import { mountTest } from '../../../tests/shared/mountTest';
import { fireEvent, render } from '../../../tests/utils';

describe('Switch', () => {
  focusTest(Switch, { refFocus: true });
  mountTest(Switch);

  it('should has click wave effect', () => {
    jest.useFakeTimers();

    const { container } = render(<Switch />);
    fireEvent.click(container.querySelector('.s-switch')!);
  });
});
