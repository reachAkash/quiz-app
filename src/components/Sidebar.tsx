import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "/logo.png";

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <img src={Logo} />
            {/* Akash */}
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <div>Trivia</div>
          </div>
          <div>Quiz</div>
          <div>Leaderboard</div>
        </div>
        <SheetFooter className="flex flex-col gap-2">
          <Button type="submit" className="bg-teal-500">
            Login
          </Button>
          <Button type="submit" className="bg-teal-500">
            Register
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
