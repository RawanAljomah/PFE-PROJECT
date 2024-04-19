"use client";
import { Button } from "@/components/ui/button";

import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isCoachPage = pathname?.startsWith("/coach");
  const isPlayerPage = pathname?.includes("/chapter");
  const isSearchPage = pathname === "/search"

  return (
    <>
    {isSearchPage && (
      <div className="hidden md:block">
        <SearchInput />
      </div>
    )}
    <div className="flex gap-x-2 ml-auto">
      {isCoachPage || isPlayerPage ? (
        <Link href="/">
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/coach/courses">
          <Button size="sm" variant="ghost">
            Coach mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
    </>
  );
};
