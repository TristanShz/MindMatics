const RegularLayout = (props) => {
  return (
    <>
      <main
        className={
          "container mx-auto text-center p-16 flex flex-col items-center"
        }
      >
        <div className={"absolute inset-0 bg-hero-pattern -z-20"} />
        {props.children}
      </main>
    </>
  );
};

export default RegularLayout;
