export default function App({Component}) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component />);
}
