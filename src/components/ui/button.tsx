import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg hover:scale-[1.03] transition-all duration-200",
        destructive: "bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90",
        outline:
          "border border-primary/30 bg-background hover:bg-primary/8 hover:border-primary/50 text-primary transition-all",
        secondary: "bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/85 hover:shadow-lg transition-all",
        ghost: "hover:bg-primary/10 hover:text-primary text-foreground transition-all",
        link: "text-primary underline-offset-4 hover:underline font-semibold",
        hero: "text-white shadow-[0_6px_25px_-8px_rgba(44,95,110,0.5)] hover:shadow-[0_10px_40px_-8px_rgba(44,95,110,0.55)] hover:scale-[1.04] transition-all duration-300",
        glass: "glass text-foreground hover:bg-white/25 transition-all",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-full px-4 text-xs",
        lg: "h-12 rounded-full px-8 text-base font-semibold",
        xl: "h-14 rounded-full px-10 text-base font-semibold",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
