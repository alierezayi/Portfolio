import Header from "@/components/Header";
import TopLeftImg from "@/components/TopLeftImg";
import Nav from "@/components/Nav";

const MainLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page bg-site text-white bg-cover bg-no-repeat relative">
      <TopLeftImg />
      <Header />
      <Nav />
      {children}
    </div>
  );
};

export default MainLayoutProvider;
