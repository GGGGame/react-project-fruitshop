export const Home = () => {
  return (
    <div className="py-2 pl-16 pr-16">
      <h1 className="py-2 pb-2 text-3xl font-normal leading-9">
        Seleziona un Frutto
      </h1>
      <div className="flex">
        <div className="pb-9 w-64 h-80">
          <img className="h-64" alt="cardfruit" />
        </div>
        <div className="pb-9 w-64 h-80">
          <img className="h-64" alt="cardfruit" />
        </div>
        <div className="pb-9 w-64 h-80">
          <img className="h-64" alt="cardfruit" />
        </div>
      </div>
    </div>
  );
};
