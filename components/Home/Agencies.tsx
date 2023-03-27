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
      <div className="grid md:grid-cols-6 grid-cols-3 gap-2">
        {agencies.map((item) => {
          return (
            <div
              key={item.id}
              className="relative group md:[&:not(:first-child)]:before:border-r md:[&:not(:first-child)]:before:border-gray-300 md:[&:not(:first-child)]:before:h-20 md:[&:not(:first-child)]:before:block md:[&:not(:first-child)]:before:absolute md:[&:not(:first-child)]:before:top-1/2 md:[&:not(:first-child)]:before:-translate-y-1/2 md:min-h-[150px] bg-white md:bg-transparent md:shadow-none shadow-md rounded-lg md:transform md:transition-transform md:duration-75 md:hover:scale-110 md:hover:bg-info-light md:p-3 p-1 md:group-hover:absolute md:right-0 md:left-0 md:top-0 z-10 hover:[&:not(:first-child)]:before:border-0 text-primary"
            >
              <Link
                href={item.href}
                className="text-center text-info rounded-md md:p-3 p-1"
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
                <span className="text-sm md:text-lg md:my-4 mt-2 block">
                  {item.title}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Agencies;
