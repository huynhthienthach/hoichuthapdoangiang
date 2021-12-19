import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../containers/about';

type AboutPageProps = {};

const AboutPage: React.FunctionComponent<AboutPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Giới thiệu"
        description="Hội Chữ thập đỏ Việt Nam là tổ chức xã hội nhân đạo của quần chúng do Chủ tịch Hồ Chí Minh sáng lập và là Chủ tịch danh dự đầu tiên. Hội thành lập ngày 23/11/1946, là thành viên của Mặt trận Tổ quốc Việt Nam và là thành viên của Phong trào Chữ thập đỏ và Trăng lưỡi liềm đỏ quốc tế."
      />

      <About />
    </Layout>
  );
};

export default AboutPage;
