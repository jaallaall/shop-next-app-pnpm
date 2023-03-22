const CircularProgress: React.FC<{
  size?: number;
  strokeWidth?: number;
  percentage: number;
  color?: string;
}> = ({
  size = 35,
  strokeWidth = 3,
  percentage,
  color,
}): React.ReactElement => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (percentage * circumference) / 100;
  return (
    <div className="flex items-center ">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          fill="none"
          stroke="#ccc"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          fill="none"
          // stroke={"stroke-slate-100"}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeDasharray={[dash / 1200, circumference - dash / 1200] as any}
          strokeLinecap="round"
          style={{ transition: "all 0.5s" }}
          className={`stroke-${color}`}
        />
      </svg>
      <span className="whitespace-nowrap flex mr-2 items-center">
        <span className="w-9 block text-center">{percentage / 1000}</span>
        ثانیه : تا ارسال مجدد کد{" "}
      </span>
    </div>
  );
};

export default CircularProgress;
