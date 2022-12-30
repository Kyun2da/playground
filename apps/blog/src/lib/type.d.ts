export type OmitPropsOf<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  P extends keyof ComponentProps<C>
> = Omit<ComponentProps<C>, P>;

export type PickPropsOf<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  P extends keyof ComponentProps<C>
> = Pick<ComponentProps<C>, P>;

export type SetOptionalProps<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  P extends keyof ComponentProps<C>
> = OmitPropsOf<C, P> & Partial<PickPropsOf<C, P>>;
