import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi" suppressHydrationWarning>
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                rel="stylesheet"
            />
        </head>
        <body>
        <script dangerouslySetInnerHTML={{
            __html: `
                    try {
                        const match = document.cookie.match(/(^| )theme=([^;]+)/);
                        if (match && match[2] === 'dark') {
                            document.documentElement.classList.add('dark');
                        }
                    } catch(e) {}
                `
        }}/>
        {children}
        </body>
        </html>
    );
}