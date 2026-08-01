export default function AppLogo() {
    return (
        <>
            <img
                src="/brainova2.png"
                alt="BrainNova Logo"
                className="h-8 w-auto object-contain"
            />
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    BrainNova
                </span>
            </div>
        </>
    );
}
