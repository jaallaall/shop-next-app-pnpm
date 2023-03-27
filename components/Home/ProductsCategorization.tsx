import Image from "next/image";
import Link from "next/link";
import { prods } from "utils";

const ProductsCategorization: React.FC = (): React.ReactElement => {
  return (
    <div>
      <h3 className="mb-6">دسته بندی محصولات</h3>
      <div className="grid md:grid-cols-5 grid-cols-3 gap-2">
        {prods.map((item) => {
          return (
            <div
              key={item.id}
              className="relative group md:[&:not(:first-child)]:before:border-r md:[&:not(:first-child)]:before:border-gray-300 md:[&:not(:first-child)]:before:h-20 md:[&:not(:first-child)]:before:block md:[&:not(:first-child)]:before:absolute md:[&:not(:first-child)]:before:top-1/2 md:[&:not(:first-child)]:before:-translate-y-1/2 md:min-h-[150px] bg-white md:bg-transparent md:shadow-none shadow-md rounded-lg md:transform md:transition-transform md:duration-75 md:hover:scale-110 md:hover:bg-info-light md:p-3 p-1 md:group-hover:absolute md:right-0 md:left-0 md:top-0 z-10 hover:[&:not(:first-child)]:before:border-0 text-primary"
            >
              <Link href={item.href} className="text-center">
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
              <ul className="text-right hidden md:group-hover:block">
                {item.des.map((it) => {
                  return <li key={it.id}>{it.title}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsCategorization;
