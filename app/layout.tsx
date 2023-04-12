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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="flex flex-col min-h-screen text-right text-[15px] text-blue-gray-500 bg-white relative">
        {children}
      </body>
    </html>
  );
}
