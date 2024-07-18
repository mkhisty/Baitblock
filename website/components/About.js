import { Card, CardHeader, Image } from "@nextui-org/react";
import { GradientText } from "./GText";
import { Number } from "./Number";

export function About() {
    return (
        <div className="py-14 mx-4 lg:px-16 h-min flex mt-10">
            <div className="w flex flex-col gap-y-5">
                <div className="flex text-4xl lg:text-6xl flex-col space-y-2">
                    <div className="flex">
                        <h1 className="font-bold mr-1">
                            By the
                        </h1>
                        <GradientText content="Consumers" className="ml-2"/>
                    </div>
                    <div className="flex">
                        <h1 className="font-bold mr-1">
                            For the
                        </h1>
                        <GradientText content="Consumers" className="ml-2"/>
                    </div>
                </div>
                <p className="lg:text-xl text-lg">Baitblock is a consumer-driven product made to ensure the safety and security of your inbox. Having seen major email corporations fail to deter easy-to-detect phishing and spam emails, we decided to take things into our own hands.</p>
                <div className="flex flex-col-reverse lg:flex-row items-center">
                    <div className="flex gap-y-20 mt-10 flex-col lg:ml-20 w-1/2 items-center">
                        <div className="flex gap-x-10">
                            <Number number="1"/>
                            <div>
                                <h1 className="text-secondary font-bold mb-2 text-3xl lg:text-5xl">Forward an Email</h1>
                                <h1 className="text-lg font-bold">Send any sketchy emails to our AI-controlled inbox</h1>
                            </div>
                        </div>
                        <div className="flex gap-x-10">
                            <Number number="2"/>
                            <div>
                                <h1 className="text-secondary font-bold mb-2 text-3xl lg:text-5xl">Wait</h1>
                                <h1 className="text-lg font-bold">Wait for a response from our AI with an analysis report</h1>
                            </div>
                        </div>
                        <div className="flex gap-x-10">
                            <Number number="3"/>
                            <div>
                                <h1 className="text-secondary font-bold mb-2 text-3xl lg:text-5xl">Take Action</h1>
                                <h1 className="text-lg font-bold">Review the analysis and come to your own conclusion</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Card className="mx-5 bg-[#0e0e0e]" isHoverable isBlurred>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-fit rounded-lg"
                                src="/temp.jpg"
                            />
                        </Card>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/blue_blur.png')] bg-contain absolute w-1/3 h-screen bg-no-repeat left-auto right-0 bg-right hidden lg:flex"></div>
            <div className="bg-[url('/blue_blur.png')] scale-x-[-1] bg-contain absolute w-1/3 h-screen bg-no-repeat left-0 right-auto bg-right mt-20 hidden lg:flex"></div>
        </div>
    )
}