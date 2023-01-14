import { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Loading from '../components/Loading';
import HeaderResponsive from '../components/Header';

type Props = {};

const RootLayout = (props: Props) => {
  return (
    <>
      <HeaderResponsive />
      <ScrollRestoration />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default RootLayout;
