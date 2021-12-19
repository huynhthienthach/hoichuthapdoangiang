import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from '../../components/gatsby-image';
import SocialProfile from '../../components/social-profile/social-profile';
import {
  IoLogoFacebook,
} from 'react-icons/io';
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from './style';

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: 'https://www.facebook.com/Hoichuthapdoangiang/',
    tooltip: 'Facebook',
  },
];

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
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
    <AboutWrapper>
      <AboutPageTitle>
        <h2>Giới thiệu</h2>
        <p>
          Hội Chữ thập đỏ Việt Nam là tổ chức xã hội nhân đạo của quần chúng
          do Chủ tịch Hồ Chí Minh sáng lập và là Chủ tịch danh dự đầu tiên.
          Hội thành lập ngày 23/11/1946, là thành viên của Mặt trận Tổ quốc Việt Nam và
          là thành viên của Phong trào Chữ thập đỏ và Trăng lưỡi liềm đỏ quốc tế.
        </p>
      </AboutPageTitle>

      <AboutImage>
        <GatsbyImage src={Data.avatar.childImageSharp.gatsbyImageData} alt="about" />
      </AboutImage>

      <AboutDetails>
        <h2>Nguyên tắc hoạt động của Phong trào Chữ thập đỏ và Trăng lưỡi liềm đỏ quốc tế</h2>
        <p>
          <strong>Nhân đạo</strong> Phong trào Chữ thập đỏ – Trăng lưỡi liềm đỏ được hình thành từ mong muốn mang lại sự giúp đỡ không phân biệt đối xử dành cho những người bị thương trên chiến trường, bằng tất cả nỗ lực, với khả năng trong nước và quốc tế, ngăn ngừa và giảm bớt đau thương cho nhân loại, ở bất cứ nơi nào. Mục đích của Phong trào là bảo vệ tính mạng, sức khỏe con người và đảm bảo tôn trọng nhân phẩm con người. Phong trào thúc đẩy sự hiểu biết lẫn nhau, tình hữu nghị, sự hợp tác, hòa bình bền vững giữa các dân tộc.
        </p>
        <p>
          <strong>Vô tư</strong> Phong trào không phân biệt đối xử dựa trên các yếu tố như dân tộc, giống nòi, tôn giáo, tầng lớp hay quan điểm chính trị. Những nỗ lực của Phong trào nhằm giảm bớt khổ đau cho mọi cá nhân chỉ dựa trên cơ sở duy nhất là nhu cầu của họ, và dành ưu tiên cho những trường hợp có hoàn cảnh cấp bách nhất.
        </p>
        <p>
          <strong>Trung lập</strong> Để giữ niềm tin của nhân dân, Phong trào không đứng về phe nào trong các cuộc xung đột; không can dự vào các vấn đề gây mâu thuẫn về chính trị, chủng tộc, tôn giáo hoặc lý tưởng.
        </p>
        <p>
          <strong>Độc lập</strong> Phong trào hoàn toàn độc lập. Các Hội quốc gia, vừa phải làm tốt vai trò bổ trợ cho chính phủ trong công tác nhân đạo, tuân theo luật pháp của Nhà nước mình, vừa phải duy trì quyền tự chủ để có thể hoạt động phù hợp với những nguyên tắc của Phong trào.
        </p>
        <p>
          <strong>Tự nguyện</strong> Phong trào Chữ thập đỏ – Trăng lưỡi liềm đỏ là tổ chức nhân đạo hoạt động tự nguyện, không dùng bất kỳ hình thức xúi giục, ép buộc nào để đạt được mục đích.
        </p>
        <p>
          <strong>Thống nhất</strong> Ở mỗi nước, chỉ có duy nhất một Hội Chữ thập đỏ hoặc Trăng lưỡi liềm đỏ. Hội nhất thiết phải mở cho sự tham gia của tất cả mọi người. Hội phải thực hiện các hoạt động nhân đạo trên phạm vi toàn lãnh thổ.
        </p>
        <p>
          <strong>Toàn cầu</strong> Phong trào Chữ thập đỏ–Trăng lưỡi liềm đỏ Quốc tế là một mạng lưới có phạm vi toàn cầu, trong đó tất cả các Hội quốc gia đều bình đẳng, chia sẻ trách nhiệm và nhiệm vụ khi hỗ trợ lẫn nhau.
        </p>
        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  );
};

export default About;
