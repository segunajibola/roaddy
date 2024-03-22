import { AppRouter } from "./routes.jsx";

export const App = () => {
  return (
    <>
      <div className="min-h-[100svh] hidden md:flex text-center text-2xl px-8 justify-center items-center">
        There is no desktop version available for now, please check back later.
      </div>
      <div className="md:hidden">
        <AppRouter />
      </div>
    </>
  );
};
