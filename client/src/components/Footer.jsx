export default function Footer() {
    return (
        <footer className="w-full bg-card border-t border-hal-red">
            <div className="container mx-auto px-6 py-8">
                <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">
                        Created by <span className="text-hal-red font-semibold">
                            <a href="http://akshhay.vercel.app" className="hover:underline" target="_blank" rel="noopener noreferrer">
                                Akshay Kamble
                            </a>
                        </span>
                    </p>
                    <p>
                        Follow me on{" "}
                        <a href="http://letterboxd.com/akkshhay" className="hover:underline" target="_blank" rel="noopener noreferrer">
                            Letterboxd
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}