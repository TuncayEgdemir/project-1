import React from "react";
import NavbarItem from "./NavbarItem";
import { useRouter } from "next/navigation";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) return null;
  const router = useRouter();

  return (
    <div className="bg-black w-56  absolute top-8 py-5 z-20 right-0 flex-col border-2 rounded-md flex">
      <div className="flex flex-col gap-4 ">
        <div className="text-center">
          <NavbarItem label="Home" onClick={() => router.push("/")} />
        </div>
        <div className="text-center">
          <NavbarItem label="About" onClick={() => router.push("/about")} />
        </div>

        <div className="text-center">
          <NavbarItem
            label="Services"
            onClick={() => router.push("/services")}
          />
        </div>

        <div className="text-center ">
          <NavbarItem label="Contact" onClick={() => router.push("/contact")} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
