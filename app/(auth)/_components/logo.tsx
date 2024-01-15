import Image from "next/image";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image height={80} width={80} alt="Gamehub" src="/spooky.svg" />
      </div>
      <div className="flex flex-col items-center">
        <p className={`${font.className} text-xl font-semibold`}>Gamehub</p>
        <p className={`${font.className} text-sm text-muted-foreground`}>
          Let&apos;s play
        </p>
      </div>
    </div>
  );
};
