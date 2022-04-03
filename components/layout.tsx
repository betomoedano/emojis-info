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
      <div className="max-w-4xl mx-auto my-8 border border-red-200">
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
