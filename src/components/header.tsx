import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { CartSidebar } from "@/components/cart/sidebar";

export const Header = () => {
  return (
    <header className="flex justify-between items-center my-5 mx-3">
      <div className="flex gap-3 items-center">
        <Logo />
        <ThemeToggle />
      </div>
      <div className="flex gap-3 items-center">
        <CartSidebar />
      </div>
    </header>
  );
};
