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
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const navigate = useNavigate();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="primary">
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
          <SheetClose asChild>
            <Button
              onClick={() => navigate("/signin")}
              type="submit"
              className="bg-teal-500 hover:bg-teal-600"
            >
              Login
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              onClick={() => navigate("/signup")}
              type="submit"
              className="bg-teal-500 hover:bg-teal-600"
            >
              Register
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
