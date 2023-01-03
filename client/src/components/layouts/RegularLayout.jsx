const RegularLayout = (props) => {
  return (
    <>
      <main className={"w-full h-full text-center p-16"}>
        <div className={"absolute inset-0 bg-hero-pattern -z-20"} />
        {props.children}
      </main>
    </>
  );
};

export default RegularLayout;
