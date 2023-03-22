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
              className="relative group [&:not(:first-child)]:before:border-r [&:not(:first-child)]:before:border-gray-300 [&:not(:first-child)]:before:h-20 [&:not(:first-child)]:before:block [&:not(:first-child)]:before:absolute [&:not(:first-child)]:before:top-1/2 [&:not(:first-child)]:before:-translate-y-1/2"
            >
              <Link
                href={item.href}
                className="text-center text-info transform transition-transform duration-75 hover:scale-110 hover:bg-info-light rounded-md p-3 group-hover:absolute"
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
                <ul className="text-right hidden group-hover:block">
                  {item.des.map((it) => {
                    return <li key={it.id}>{it.title}</li>;
                  })}
                </ul>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsCategorization;
