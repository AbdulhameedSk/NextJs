import 'tailwindcss/tailwind.css';

export default function({children}:{children:React.ReactNode}) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <h1 className="text-2xl font-bold text-blue-500">Login now to get 20% off</h1>
            {children}
        </div>
    );
};