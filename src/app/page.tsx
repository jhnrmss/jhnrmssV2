import { AppAbout, AppExperience, AppHero, AppSkills } from "@/components";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div>
      <AppHero />
      <AppAbout />
      <AppSkills />
      <AppExperience />
    </div>
  );
}
