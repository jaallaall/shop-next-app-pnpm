"use client";

import Sidebar from "components/UserPanel/Sidebar";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { Portal } from "ui";
import { useMediaQuery } from "usehooks-ts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const matches = useMediaQuery("(min-width: 768px)");

  if (pathname?.search("invoicedetail")) {
    return (
      <section>
        <div className="container px-3 mx-auto">{children}</div>
      </section>
    );
  }
  return (
    <section>
      <div className="container px-3 mx-auto md:grid md:grid-cols-7 gap-3">
        <div className="pb-3 md:hidden">
          <button className="w-6 h-6" onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
        {matches ? (
          <aside className="col-span-2">
            <div className="bg-white border rounded-lg sticky top-12 h-[calc(100vh_-_70px)] grid grid-rows-[auto_auto_minmax(0,1fr)]">
              <Sidebar />
            </div>
          </aside>
        ) : (
          <Portal open={open} onClose={setOpen}>
            <button
              className="w-10 h-10 p-2 ml-0 mr-auto"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
              </svg>
            </button>
            <Sidebar setOpen={setOpen} />
          </Portal>
        )}

        <main className="md:col-span-5 bg-gray-200 border rounded-lg p-3">
          <Suspense
            fallback={
              <BallTriangle
                height={50}
                width={50}
                radius={5}
                color="#285192"
                ariaLabel="ball-triangle-loading"
                visible={true}
                wrapperClass="m-auto h-screen justify-center items-center"
              />
            }
          >
            {children}
          </Suspense>
        </main>
      </div>
    </section>
  );
}
