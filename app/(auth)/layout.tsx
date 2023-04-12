import Layout from "components/Layout";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout isLogin>
      <section className="!py-0 relative flex min-h-full justify-center md:px-12 lg:px-0 flex-auto">
        <div className="relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28">
          {children}
        </div>
        <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
          <Image
            alt=""
            src="/static/images/background-auth.4bcf3f4b.jpg"
            width="1664"
            height="1866"
            decoding="async"
            data-nimg="1"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
}
