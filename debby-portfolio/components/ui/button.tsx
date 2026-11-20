import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:-translate-y-0.5 active:translate-y-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] hover:bg-primary/92 hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)]",
        gold:
          "bg-gold text-charcoal shadow-[0_1px_0_rgba(255,255,255,0.25)_inset] hover:bg-[hsl(40_48%_54%)] hover:shadow-[0_14px_32px_hsla(40,42%,48%,0.35)]",
        outline:
          "border border-border bg-transparent hover:border-gold/45 hover:bg-secondary hover:text-foreground hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]",
        ghost: "hover:bg-secondary hover:text-foreground",
        link: "text-foreground underline-offset-4 hover:underline hover:translate-y-0",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
