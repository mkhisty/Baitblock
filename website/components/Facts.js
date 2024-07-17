import { Chip, Card, CardHeader, Image } from "@nextui-org/react";

export function Facts() {
    return (
        <div className="flex flex-col items-center py-14 h-screen">
            <Chip 
                size="lg" 
                color="secondary"
                variant="dot"
            >
                Did You Know?
            </Chip>
            <div className="flex mt-10">
                <Card className="w-1/3 mx-5 bg-[#0e0e0e]" isHoverable isBlurred>
                    <CardHeader className="absolute flex flex-col items-start mt-3">
                        <h4 className="text-white font-medium text-lg">There are 3.4 billion phishing emails sent each day</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-fit rounded-lg hover:scale-105"
                        src="/laptop.jpg"
                    />
                </Card>
                <Card className="w-1/3 mx-5 bg-[#0e0e0e]" isHoverable isBlurred>
                    <CardHeader className="absolute flex flex-col items-start mt-3">
                        <h4 className="text-white font-medium text-lg">83% of organizations worldwide have been targeted through phishing</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-fit rounded-lg hover:scale-105"
                        src="/hand.jpg"
                    />
                </Card>
                <Card className="w-1/3 mx-5 bg-[#0e0e0e]" isHoverable isBlurred>
                    <CardHeader className="absolute flex flex-col items-start mt-3">
                        <h4 className="text-white font-medium text-lg">More than $10 billion are lost to phishing scams per year</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover rounded-lg hover:scale-105"
                        src="/cube.jpg"
                    />
                </Card>
            </div>
        </div>
    )
}