function PageLayout({children}) {
  return <div style={{background: 'gray'}}>{children}</div>;
}

export default function Index() {
  return 'Index';
}

export function getStaticProps() {
  // When this line is removed, the page no longer breaks
  console.log(PageLayout.name);
  
  return {
    props: {}
  };
}

// ReferenceError: PageLayout is not defined
Index.getLayout = (page) => <PageLayout>{page}</PageLayout>;
