import React, { useState } from 'react';
import { mountTest } from '../../../tests/shared/mountTest';
import { fireEvent, render } from '../../../tests/utils';
import { Segmented } from '../index';

const prefixCls = 's-segmented';

function expectMatchChecked(container: HTMLElement, checkedList: boolean[]) {
  const inputList = Array.from(
    container.querySelectorAll<HTMLInputElement>(`.${prefixCls}-item-input`),
  );

  expect(inputList).toHaveLength(checkedList.length);

  inputList.forEach((input, i) => {
    const checked = checkedList[i];

    expect(input.checked).toBe(checked);
  });
}

describe('Segmented', () => {
  mountTest(Segmented);

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('render empty segmented', () => {
    const { asFragment } = render(<Segmented options={[]} />);
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('render segmented ok', () => {
    const { asFragment, container } = render(
      <Segmented options={[{ label: 'Daily', value: 'Daily' }, 'Weekly', 'Monthly']} />,
    );

    expect(asFragment().firstChild).toMatchSnapshot();

    expectMatchChecked(container, [true, false, false]);
  })

  it('render label with ReactNode', () => {
    const { asFragment, container } = render(
      <Segmented
        options={[
          { label: 'Daily', value: 'Daily' },
          { label: <div id="weekly">Weekly</div>, value: 'Weekly' },
          { label: <h2>Monthly</h2>, value: 'Monthly' },
        ]}
      />,
    );

    expect(asFragment().firstChild).toMatchSnapshot();

    expectMatchChecked(container, [true, false, false]);

    expect(container.querySelector('#weekly')?.textContent).toContain('Weekly');
    expect(container.querySelectorAll('h2')[0].textContent).toContain('Monthly');
  });

  it('render segmented with defaultValue', () => {
    const { container } = render(
      <Segmented
        options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
        defaultValue="Quarterly"
      />,
    );

    expectMatchChecked(container, [false, false, false, true, false]);
  });
});
