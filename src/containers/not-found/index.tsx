import * as React from 'react';
import GatsbyImage from '../../components/gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {
  NotFoundWrapper,
  NotFoundContent,
  NotFoundImage,
  Goback,
  Icon,
} from './style';

interface NotFoundProps {}

const NotFound: React.FunctionComponent<NotFoundProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/404.png/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  return (
    <NotFoundWrapper>
      <NotFoundContent>
        <h1>Trang này không tồn tại</h1>
        <p>
          Trang mà bạn yêu cầu hiện không tồn tại. Hãy cố gắng tìm kiếm với từ khoá mới
          hoặc bấm vào nút Quay lại dưới đây.
        </p>
        <Goback>
          <Link to="/">
            <Icon>
              <IoMdArrowRoundBack />
            </Icon>
            Quay lại
          </Link>
        </Goback>
      </NotFoundContent>
      <NotFoundImage>
        <GatsbyImage src={Data.avatar.childImageSharp.gatsbyImageData} alt="author" />
      </NotFoundImage>
    </NotFoundWrapper>
  );
};

export default NotFound;
