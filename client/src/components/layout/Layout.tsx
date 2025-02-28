import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}