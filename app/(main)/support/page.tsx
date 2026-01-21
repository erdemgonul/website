export const metadata = {
    title: "App Support",
    description: "Support for Erdem Gönül's apps.",
};

export default function Support() {
    return (
        <div className="px-4 md:px-0 md:max-w-screen-md flex flex-col bg-black md:mx-auto w-full pt-24 md:pt-48 pb-12 gap-y-12">
            <div className="flex flex-col gap-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    App Support
                </h1>
                <p className="text-[#bfbfbf] text-lg md:text-xl font-light">
                    Welcome to the support page for my apps. If you are experiencing any
                    issues, have questions, or want to provide feedback, please feel free
                    to contact me.
                </p>
            </div>

            <div className="flex flex-col gap-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    Contact Information
                </h2>
                <p className="text-[#bfbfbf] text-lg md:text-xl font-light">
                    You can reach me via email at:
                </p>
                <a
                    href="mailto:ahmeterdemgonul@gmail.com"
                    className="text-red text-lg md:text-xl hover:underline underline-offset-4 decoration-red w-fit"
                >
                    ahmeterdemgonul@gmail.com
                </a>
                <p className="text-[#bfbfbf] text-base mt-4 font-light opacity-80">
                    I try to respond to all inquiries as soon as possible.
                </p>
            </div>
        </div>
    );
}
