interface StatCardProps {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  className?: string;
}

const StatCard = ({
  title,
  subtitle,
  description,
  color,
  className,
}: StatCardProps) => (
  <div
    className={`p-8 rounded-4xl text-left flex flex-col justify-between h-full text-black shadow-xl ${color} ${className}`}
  >
    <h2 className="text-[70px] leading-none font-semibold tracking-tighter">
      {title}
    </h2>
    <div className="mt-20">
      <p className="text-[26px] font-bold leading-tight">{subtitle}</p>
      <hr className="border-t-2 border-black/90 my-1.5" />
      <p className="text-[16px] font-medium opacity-90 mt-2 ">{description}</p>
    </div>
  </div>
);

export default StatCard;