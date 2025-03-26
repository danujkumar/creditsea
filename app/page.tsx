import NavbarComponent from "@/components/Navbar";
import Middle from "@/components/Middle";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <Middle />
      </div>
    </div>
  );
}
