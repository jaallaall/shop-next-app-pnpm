import Image from "next/image";
import Link from "next/link";

const agencies = [
  {
    img: "/static/images/mirab.v4.jpg35-removebg-preview.pngب-2D2816FE.png",
    id: 1,
    alt: "image",
    title: " میراب",
    href: "/",
  },
  {
    img: "/static/images/ارتعاشات-صنعتی.png46-2D2816FE.png",
    id: 2,
    alt: "image",
    title: " ارتعاشات صنعتی",
    href: "/",
  },
  {
    img: "/static/images/download__2_.v4.jpg40-removebg-preview-2D2816FE.png",
    id: 3,
    alt: "image",
    title: " فاراب ",
    href: "/",
  },
];

const Agencies: React.FC = (): React.ReactElement => {
  return (
    <>
      <div className="flex justify-between mb-6">
        <h3>نمایندگی ها</h3>
      </div>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-2">
        {agencies.map((item) => {
          return (
            <div
              key={item.id}
              className="relative [&:not(:first-child)]:before:border-r [&:not(:first-child)]:before:border-gray-300 [&:not(:first-child)]:before:h-20 [&:not(:first-child)]:before:block [&:not(:first-child)]:before:absolute [&:not(:first-child)]:before:top-1/2 [&:not(:first-child)]:before:-translate-y-1/2"
            >
              <Link
                href={item.href}
                className="text-center text-info rounded-md p-3"
              >
                <span className="w-10 h-10 relative block mx-auto">
                  <Image
                    src={item.img}
                    alt="img"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </span>
                <span className="text-lg my-4 block">{item.title}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Agencies;
