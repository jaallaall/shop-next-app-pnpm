import { Options } from "interfaces";
import Link from "next/link";
import { Fragment } from "react";

interface Props {
  breadcrumbs: Options[];
}

const Breadcrumbs: React.FC<Props> = ({ breadcrumbs }): React.ReactElement => {
  return (
    <nav className="bg-grey-light w-full rounded-md mb-4">
      <ol className="list-reset flex">
        {breadcrumbs?.map((item, i) => {
          if (i === breadcrumbs.length - 1) {
            return (
              <li key={item.id} className="text-gray-500 dark:text-neutral-400">
                {item.title}
              </li>
            );
          }
          return (
            <Fragment key={item.id}>
              <li>
                <Link
                  href={item.href}
                  className="hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  {item.title}
                </Link>
              </li>
              <li>
                <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                  /
                </span>
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
