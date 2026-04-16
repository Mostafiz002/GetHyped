export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-380 mx-auto px-6 w-full">
      {children}
    </div>
  );
}