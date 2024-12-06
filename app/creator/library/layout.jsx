import LibraryNavbar from "@/app/components/LibraryNavbar";

export default function LibraryLayout({ children }) {
  return (
    <div>
      <LibraryNavbar />
      <div>{children}</div>
    </div>
  );
}
