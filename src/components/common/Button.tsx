interface ButtonProps {
  className?: string;
  href: string;
  text: string;
  newTab?: boolean;
}

export default function Button({
  className = "",
  href,
  text,
  newTab,
}: ButtonProps) {
  return (
    <a
      className={`inline-block rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none motion-reduce:transition-none motion-reduce:hover:scale-100 ${className}`}
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {text}
    </a>
  );
}
