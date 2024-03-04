import { AppAbout, AppHero, AppSkills } from "@/components";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div>
      <AppHero />
      <AppAbout />
      <AppSkills />
    </div>
  );
}
