import Nav from '../navbar/navbar';
import Footer from '../footer/footer';
import React from 'react';
import Container from '../container/container';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Nav></Nav>
      <div className='w-full h-full my-5' id='wrapper'>
        <Container>{children}</Container>
      </div>
      <Container>
        <Footer></Footer>
      </Container>
    </>
  );
}
