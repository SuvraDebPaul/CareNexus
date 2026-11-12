"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState, type ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type passwordInputProps = Omit<ComponentProps<"input">, "type">;

export default function PasswordInput({
  className,
  disabled,
  ...props
}: passwordInputProps) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative">
      <Input
        type={visible ? "text" : "password"}
        disabled={disabled}
        className={cn("pr-10 [&::-ms-reveal]:hidden", className)}
        {...props}
      />
      <Button
        type="button"
        variant={"ghost"}
        size={"icon-sm"}
        disabled={disabled}
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "Hide password" : "Show password"}
        aria-pressed={visible}
        className="absolute top-1/2 right-1 -translate-y-1/2 text-muted-foreground hover:bg-transparent hover:text-foreground"
      >
        {visible ? <EyeOff /> : <Eye />}
      </Button>
    </div>
  );
}
