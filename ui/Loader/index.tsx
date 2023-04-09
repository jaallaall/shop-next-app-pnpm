import style from "./Loader.module.css";

const Loader: React.FC<{
  className?: string;
  loading: boolean | undefined;
}> = ({ className, loading }) => {
  return loading ? (
    <svg
      className={`${className} ${style["circular-loader"]} w-5 h-5 inline-block ml-4 text-primary`}
      viewBox="25 25 50 50"
    >
      <circle
        className={style["loader-path"]}
        cx={50}
        cy={50}
        r={20}
        fill="none"
        strokeWidth={2}
      />
    </svg>
  ) : null;
};

export default Loader;
