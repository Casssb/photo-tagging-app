import { Suspense } from 'react';
import Header from '../components/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Loading from '../components/Loading';

type Props = {};

const RootLayout = (props: Props) => {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default RootLayout;
