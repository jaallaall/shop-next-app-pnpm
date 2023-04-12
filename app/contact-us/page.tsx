import Layout from "components/Layout";
import dynamic from "next/dynamic";

const ContactUs = dynamic(() => import("components/WorkWithUs"));

export const metadata = {
  title: "همکاری با ما",
  description: "همکاری با ما",
};

export default function ContactUsPage() {
  return (
    <Layout>
      <ContactUs />
    </Layout>
  );
}
