"use client";


export const CodeGraph = () => {
    return (
        <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
            {/* Background Ripples */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-[480px] rounded-full border border-white/5" />
                <div className="size-[360px] rounded-full border border-white/5" />
                <div className="size-[240px] rounded-full border border-white/10" />
                <div className="size-[120px] rounded-full border border-white/10" />
            </div>

            {/* Central Node */}
            <div className="relative z-10 flex size-24 items-center justify-center rounded-3xl bg-neutral-900 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <Icons.code className="size-10 text-white" />

                {/* Connecting Lines (SVG Overlay) */}
                <svg className="absolute inset-0 size-full overflow-visible pointer-events-none">
                    {/* Top Right: Python (ML) */}
                    <path d="M 48 0 L 48 -60 L 100 -60" fill="none" stroke="url(#gradient-ml)" strokeWidth="2" className="opacity-50" />
                    {/* Right: Next.js (Web) */}
                    <path d="M 96 48 L 160 48" fill="none" stroke="url(#gradient-web)" strokeWidth="2" className="opacity-50" />
                    {/* Bottom Right: PostgreSQL (Data) */}
                    <path d="M 48 96 L 48 140 L 100 140" fill="none" stroke="url(#gradient-data)" strokeWidth="2" className="opacity-50" />
                    {/* Top Left: React (Frontend) */}
                    <path d="M 0 48 L -60 48 L -60 -40" fill="none" stroke="url(#gradient-web)" strokeWidth="2" className="opacity-50" />
                    {/* Bottom Left: PyTorch (DL) */}
                    <path d="M 0 60 L -60 60 L -60 120" fill="none" stroke="url(#gradient-ml)" strokeWidth="2" className="opacity-50" />

                    <defs>
                        <linearGradient id="gradient-ml" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" /> {/* Blue */}
                            <stop offset="100%" stopColor="#8b5cf6" /> {/* Purple */}
                        </linearGradient>
                        <linearGradient id="gradient-web" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" /> {/* Green */}
                            <stop offset="100%" stopColor="#3b82f6" /> {/* Blue */}
                        </linearGradient>
                        <linearGradient id="gradient-data" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" /> {/* Purple */}
                            <stop offset="100%" stopColor="#ec4899" /> {/* Pink */}
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Outer Nodes (Manually positioned based on path endpoints) */}

            {/* Python */}
            <div className="absolute top-[130px] right-[100px] flex size-16 items-center justify-center rounded-2xl bg-neutral-900 border border-white/10 shadow-xl">
                <Icons.python className="size-8" />
            </div>

            {/* Next.js */}
            <div className="absolute top-[218px] right-[40px] flex size-16 items-center justify-center rounded-2xl bg-neutral-900 border border-white/10 shadow-xl">
                <Icons.nextjs className="size-8" />
            </div>

            {/* PostgreSQL */}
            <div className="absolute bottom-[80px] right-[100px] flex size-16 items-center justify-center rounded-2xl bg-neutral-900 border border-white/10 shadow-xl">
                <Icons.postgresql className="size-8" />
            </div>

            {/* React */}
            <div className="absolute top-[130px] left-[100px] flex size-16 items-center justify-center rounded-2xl bg-neutral-900 border border-white/10 shadow-xl">
                <Icons.react className="size-8" />
            </div>

            {/* PyTorch/DL */}
            <div className="absolute bottom-[100px] left-[100px] flex size-16 items-center justify-center rounded-2xl bg-neutral-900 border border-white/10 shadow-xl">
                <Icons.pytorch className="size-8" />
            </div>
        </div>
    );
};

const Icons = {
    code: ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    react: ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#61DAFB" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(45 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(-45 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        </svg>
    ),
    nextjs: ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5" />
            <path d="M15 9L9 15" stroke="white" strokeWidth="1.5" />
            <path d="M9 9V15" stroke="white" strokeWidth="1.5" />
        </svg>
    ),
    postgresql: ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#336791" strokeWidth="2" strokeLinejoin="round" />
            <path d="M2 17L12 22L22 17" stroke="#336791" strokeWidth="2" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="#336791" strokeWidth="2" strokeLinejoin="round" />
        </svg>
    ),
    python: ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#3776AB" />
            <path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#FFD43B" />
        </svg>
    ),
    pytorch: ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 2L2 22h20L12 2zm0 3.5L18.5 19H5.5L12 5.5z" fill="#EE4C2C" />
        </svg>
    )
};
