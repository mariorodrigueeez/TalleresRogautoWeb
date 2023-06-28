// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Navbar } from './views/Navbar/Navbar';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <Navbar />
      <div className="">
        <h1 className="">Oops, something went wrong! </h1>
        <p className="">We apologize for the inconvenience. </p>
        <div className="">
          <p className="">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </div>
  );
}
