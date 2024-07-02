import React, { forwardRef } from 'react';

export interface FactoryPayload {
  props: Record<string, any>;
  ref?: any;
}

export type Factory<Payload extends FactoryPayload> = Payload;

export interface FactoryComponentWithProps<Payload extends FactoryPayload> {
  withProps: (props: Payload['props']) => React.ForwardRefExoticComponent<
    Payload['props'] & React.RefAttributes<Payload['ref']>
  >;
}

export type FactoryComponent<Payload extends FactoryPayload> = React.ForwardRefExoticComponent<
  Payload['props'] &
  React.RefAttributes<Payload['ref']>
> & FactoryComponentWithProps<Payload>;

export function factory<Payload extends FactoryPayload>(
  ui: React.ForwardRefRenderFunction<Payload['ref'], Payload['props']>,
) {
  const Component = forwardRef(ui) as any;

  Component.withProps = (fixedProps: any) => {
    const Extended = forwardRef((props, ref) => (
      <Component {...fixedProps} {...props} ref={ref as any} />
    )) as any;
    Extended.displayName = `WithProps(${Component.displayName})`;
    return Extended;
  };

  return Component as FactoryComponent<Payload>;
}
