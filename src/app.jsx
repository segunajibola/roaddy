import { AppRouter } from "./routes.jsx";
import "aos/dist/aos.css";
import "react-loading-skeleton/dist/skeleton.css";

export const App = () => {
  return (
    <>
      <div className="min-h-[100svh] hidden md:flex text-center text-2xl px-8 justify-center items-center">
        There is no desktop version available for now, please check back later.
        Access the webbsite on mobile phones for now or any device with 767px
        width or below.
      </div>
      <div className="md:hidden">
        <AppRouter />
      </div>
    </>
  );
};
