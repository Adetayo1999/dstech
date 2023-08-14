type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <div className="pt-10 md:py-14 flex flex-col gap-y-16 ">{children}</div>
    </>
  );
};
