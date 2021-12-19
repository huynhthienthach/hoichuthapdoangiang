import React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/navbar/navbar';
import ResetCss from '../components/reset-css';
import SEO from '../components/seo';
import NotFound from '../containers/not-found';
import Footer from '../components/footer/footer';

const NotFoundPage = () => {
  return (
    <>
      <ResetCss />
      <Navbar />
      <SEO title="404: Không tìm thấy trang yêu cầu" />
      <NotFound />
      <Footer>
        Bản quyền thuộc về &copy; {new Date().getFullYear()}
        <a href="https://hoichuthapdoangiang.org/"> Hội chữ thập đỏ tỉnh An Giang.</a>
      </Footer>
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
