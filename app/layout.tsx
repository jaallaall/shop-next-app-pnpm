import AppProvider from "components/Layout";
import AuthContext from "components/Layout/AuthContext";
import ReactQueryWrapper from "components/Layout/ReactQueryWrapper";
import { Session } from "next-auth";
import { headers } from "next/headers";
import "styles/globals.css";

export const metadata = {
  title: "فروشگاه شیرآلات",
  description:
    "انواع لوله و اتصالات آب و گاز، لوله و اتصالات فلزی و پلیمری، شیر آلات ، تجهیزات آتش نشانی و... با بهترین قیمت و ارسال به تمامی نقاط ایران",
};

// async function getSession(cookie: string): Promise<Session> {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}Users/signup`,
//     {
//       headers: {
//         cookie,
//       },
//     }
//   );

//   const session = await response.json();

//   return Object.keys(session).length > 0 ? session : null;
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getSession(headers().get("cookie") ?? "");
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ReactQueryWrapper>
          {/* <AuthContext session={session}> */}
          <AppProvider>{children}</AppProvider>
          {/* </AuthContext> */}
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
