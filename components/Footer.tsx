export default function Footer() {
    return (
        <footer className="px-6 md:px-8 py-10 border-t border-border text-sm text-muted">
            <div className="container mx-auto flex items-center justify-between">
                <p>© {new Date().getFullYear()} Rino</p>
                <p className="opacity-80">Built with Next.js</p>
            </div>
        </footer>
    );
}
