import "tailwindcss/tailwind.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="border-b p-1 text-center">Login now to get 20% off </div>

      {children}
    </div>
  );
}
