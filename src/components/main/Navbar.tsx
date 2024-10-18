import { useState } from "react";
import { Menu, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";

const SearchInput = () => (
  <div className="relative w-full">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    <Input type="search" placeholder="Search..." className="pl-10 w-full" />
  </div>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const session = useSession();

  return (
    <nav className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">AH Karaoke</span>
          </div>

          {/* Centered Search Bar (hidden on mobile) */}
          <div className="hidden md:flex flex-1 justify-center px-2">
            <div className="max-w-lg w-full">
              <SearchInput />
            </div>
          </div>

          {/* Profile Dropdown (hidden on mobile) */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {/* <Button
                  variant="ghost"
                  className="relative w-8 h-8 rounded-full"
                > */}
                {/* <User className="h-5 w-5" /> */}
                <img
                  className="w-10 h-10 rounded-full cursor-pointer"
                  src={session?.data?.user?.image || ""}
                  alt="Rounded avatar"
                />
                {/* </Button> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open main menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <SearchInput />
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 rounded-full cursor-pointer"
                  src={session?.data?.user?.image || ""}
                  alt="Rounded avatar"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-primary">
                  {session?.data?.user?.name || ""}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {session?.data?.user?.email || ""}
                </div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Sign out
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
