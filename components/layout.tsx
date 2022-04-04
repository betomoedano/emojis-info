import Head from 'next/head';
import * as React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  metaDescription?: string;
}
const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  pageTitle,
  metaDescription,
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div className="max-w-6xl mx-auto my-8 p-5">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
