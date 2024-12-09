import CreatorNavBar from "../components/CreatorNavBar";

export default function BlogLayout({ children }) {
  return (
    <div className="flex bg-[#e6e7e9] min-w-screen h-screen">
      <div className="w-[19.5vw] mr-[1px]">
        <CreatorNavBar/>
      </div>
      <div className="w-full overflow-y-scroll scrollable-none">
          {children}
      </div>
    </div>
  );
}