import Image from "next/image";
import { Button } from "../ui/button";
import Colors from "@/data/Colors";

const Header = () => {
  return (
    <div className=" flex items-center justify-between p-4">
      <Image
        src={"/logo.webp"}
        alt="Logo of the website"
        width={40}
        height={40}
      />
      <div className="flex gap-5">
        <Button variant="ghost">Sign In</Button>
        <Button
          className="text-white"
          style={{
            backgroundColor: Colors.BLUE,
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Header;
