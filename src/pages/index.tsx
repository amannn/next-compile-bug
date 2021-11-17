function PageLayout({children}) {
  return <div style={{background: 'gray'}}>{children}</div>;
}

export default function Index() {
  // ReferenceError: PageLayout is not defined
  return <PageLayout>Index</PageLayout>
}

export function getStaticProps() {
  // When this line is removed, the page no longer breaks
  console.log(PageLayout.name);
  
  return {
    props: {}
  };
}
