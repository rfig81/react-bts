import { memo } from "react";
import { log } from "../../log";

import { ComponentType, ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon: ComponentType<{ className?: string }>;
}

const IconButton = memo(
  ({ children, icon: Icon, ...props }: IconButtonProps) => {
    log("<IconButton /> rendered", 2);

    return (
      <button {...props} className="button">
        <Icon className="button-icon" />
        <span className="button-text">{children}</span>
      </button>
    );
  }
);

export default IconButton;
