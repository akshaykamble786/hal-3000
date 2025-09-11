import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dropzone, DropzoneContent, DropzoneEmptyState } from "./ui/dropzone";

export default function HeroSection() {
    const [username, setUsername] = useState("")
    const [files, setFiles] = useState();

    const handleDrop = (files) => {
        console.log(files);
        setFiles(files);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username.trim()) {
            console.log("Analyzing Letterboxd user:", username)
            // Here you would typically navigate to results or trigger analysis
        }
    }

    return (
        <section className="flex-1 flex items-center justify-center px-6 py-14">
            <div className="max-w-2xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight text-balance">
                        I'm sorry, Dave.
                        <br />
                        <span className="text-hal-red">I'm afraid I can't do that.</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-lg mx-auto text-pretty">
                        But I can analyze your Letterboxd movie habits with precision beyond human capability.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
                    <Dropzone
                        maxFiles={3}
                        onDrop={handleDrop}
                        onError={console.error}
                        src={files}
                    >
                        <DropzoneEmptyState />
                        <DropzoneContent />
                    </Dropzone>
                    <Button type="submit" className="bg-hal-red hover:bg-red-800/90 text-white font-bold px-6">
                        ANALYZE
                    </Button>
                </form>
            </div>
        </section>
    )
}