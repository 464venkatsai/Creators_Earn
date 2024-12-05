import Alert from "../components/ShowAlert";
import CreatorNavBar from "../components/CreatorNavBar";

export default function CreatorLayout({ children }) {
  return (
    <div className="flex bg-[#e6e7e9] min-w-screen h-screen overflow-hidden">
      <div className="w-[19.5vw]">
        <CreatorNavBar/>
      </div>
      <div className="w-full overflow-y-scroll scrollable-none">
          {children}
      </div>
    </div>
  );
}
