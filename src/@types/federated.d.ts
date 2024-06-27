declare module 'softeer-fo/DefaultLayout' {
  interface Props extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    headerExtra?: React.ReactNode;
    footer?: boolean;
  }

  const DefaultLayout: React.ComponentType<Props>;
  export default DefaultLayout;
}
