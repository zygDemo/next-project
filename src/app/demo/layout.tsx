
export default function Demo({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      父组件
      {children}
    </div>
  );
}
