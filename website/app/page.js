import { About } from "@/components/About";
import { Facts } from "@/components/Facts";
import { Footer } from "@/components/Footer";
import { GradientText } from "@/components/GText";
import { NavBar } from "@/components/Navbar";
import { Roadmap } from "@/components/Roadmap";
import { Button, Link } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="h-screen w-screen bg-[url('/dark-background.jpg')] bg-cover bg-center">
        <div className="absolute w-screen h-screen flex justify-center items-center top-0 flex-col gap-y-6">
          <GradientText content="Empower Your Defenses" className="text-7xl"/>
          <p className="text-xl">Don't let youself take the bait! Get notified for the release of Baitblock.</p>
          <Button
            variant="faded"
            color="primary"
            size="lg"
            as={Link}
            href="https://w92qv61rb9z.typeform.com/to/RozBPKU9"
            isExternal
          >
            Notify Me
          </Button>
        </div>
      </div>
      <Facts />
      <About />
      <Roadmap />
      <Footer />
    </main>
    
  );
}

//TODO: Fix button