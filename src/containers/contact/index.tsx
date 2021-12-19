import * as React from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import {
  ContactWrapper,
  ContactPageTitle,
  ContactFromWrapper,
  InputGroup,
} from './style';

interface MyFormValues {
  firstName: string;
  email: string;
  message: string;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

const Contact: React.SFC<{}> = () => {
  return (
    <Formik
      initialValues={{ firstName: '', email: '', message: '' }}
      onSubmit={(values: MyFormValues, actions: any) => {
        setTimeout(() => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 700);
      }}
      validationSchema={SignupSchema}
      render={({
        handleChange,
        values,
        errors,
        handleBlur,
        touched,
        isSubmitting,
      }: FormikProps<MyFormValues>) => (
        <>
          <Form>
            <ContactWrapper>
              <ContactPageTitle>
                <h2>Liên hệ</h2>
                <p>
                  Văn phòng Hội chữ thập đỏ tỉnh An Giang
                </p>
                <p>
                  Địa chỉ: số 10-11 Lê Lợi (số cũ là 25), P. Mỹ Bình, Tp. Long Xuyên (Đối diện cổng số 7 Bệnh viện Sản Nhi)
                </p>
                <p>
                  Số điện thoại: +84 76 385 2905
                </p>
                <p>
                  Email: hoictd@angiang.gov.vn
                </p>
              </ContactPageTitle>
              <ContactFromWrapper>
                <InputGroup>
                  <Input
                    type="text"
                    name="firstName"
                    value={`${values.firstName}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Tên"
                    notification={`${
                      errors.firstName && touched.firstName
                        ? errors.firstName
                        : ''
                    }`}
                  />
                  <Input
                    type="email"
                    name="email"
                    value={`${values.email}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Email"
                    notification={`${
                      errors.email && touched.email ? errors.email : ''
                    }`}
                  />
                </InputGroup>
                <Input
                  type="textarea"
                  name="message"
                  value={`${values.message}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Lời nhắn"
                  notification={
                    errors.message && touched.message ? errors.message : ''
                  }
                />
                <Button
                  title="Gửi"
                  type="submit"
                  isLoading={!!isSubmitting}
                  loader="Đang gửi liên hệ.."
                />
              </ContactFromWrapper>
            </ContactWrapper>
          </Form>
        </>
      )}
    />
  );
};

export default Contact;
