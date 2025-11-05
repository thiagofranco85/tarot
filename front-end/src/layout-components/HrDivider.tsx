export function HrDivider({ className }: { className?: string }) {
  return (
    <hr
      className={`
            border-none 
            h-px 
            w-full 
            bg-gradient-to-r 
            from-transparent 
            via-white/75 
            to-transparent
            ${className}
        `}
    />
  );
}
