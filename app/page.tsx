import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
      // <main className="flex min-h-screen flex-col bg-[#121212]">
      //   <div className="container mt-24 mx-auto px-12 py-4">
      //     <HeroSection />
      //     {/*<AchievementsSection/>*/}
      //     {/*<AboutSection/>*/}
      //     {/*<ProjectsSection/>*/}
      //     {/*<EmailSection/>*/}
      //   </div>
      //   {/*<Footer/>*/}
      // </main>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <HeroSection />
        </main>
      </div>
  );
}
