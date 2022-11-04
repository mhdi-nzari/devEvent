function MenuIcon({ onClick, className }: { onClick: () => void; className?: string }) {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path d="M6.5 16L19 16M11.5 1L19 1M1.5 8.5H19" stroke="#2D264B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default MenuIcon;
