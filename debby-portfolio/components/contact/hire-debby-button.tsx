"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { GmailIcon, WhatsAppIcon } from "@/components/icons/brand-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type HireDebbyButtonProps = {
  projectTitle?: string;
  className?: string;
  fullWidth?: boolean;
};

export function HireDebbyButton({
  projectTitle,
  className,
  fullWidth,
}: HireDebbyButtonProps) {
  const subject = projectTitle
    ? `Project inquiry: ${projectTitle}`
    : "Project inquiry with Debby Tella";
  const whatsappText = encodeURIComponent(
    projectTitle
      ? `Hi Debby, I saw your work "${projectTitle}" and I would like to hire you.`
      : "Hi Debby, I would like to hire you for a design project."
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`whitespace-nowrap ${fullWidth ? "w-full " : ""}${className ?? ""}`}
        >
          <MessageCircle className="h-4 w-4 shrink-0" />
          <span className="whitespace-nowrap">Hire Debby</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72 p-2">
        <DropdownMenuLabel className="font-normal">
          <p className="font-medium text-foreground">Message Debby</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Replies within 4–5 hours. Pay by bank transfer or crypto — no PayPal.
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer gap-3 py-3">
          <a
            href={`${site.whatsapp}?text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#25D366]/15 text-[#25D366]">
              <WhatsAppIcon className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-medium">Message on WhatsApp</span>
              <span className="block text-xs text-muted-foreground">{site.phone}</span>
            </span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer gap-3 py-3">
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-red-500/10 text-red-600">
              <GmailIcon className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-medium">Message on Gmail</span>
              <span className="block text-xs text-muted-foreground">{site.email}</span>
            </span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
