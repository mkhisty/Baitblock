import { Link } from "@nextui-org/react"
import { GradientText } from "./GText"
import { LinkArrow } from "./LinkArrow"

export function Roadmap() {
    return (
        <div className="py-14 lg:px-16 h-screen flex mt-10 mx-10 flex-col gap-y-5">
            <div className="flex text-4xl lg:text-6xl">
                <h1 className="font-bold lg:mr-1">
                    Down the
                </h1>
                <GradientText content="Road" className="ml-2"/>
            </div>
            <p className="lg:text-xl text-lg">
                Take a look at Baitblock&apos;s 
                <Link href="https://baitblock.featurebase.app/roadmap"
                    className="lg:text-xl lg:ml-2 ml-1 text-lg"
                    underline="always"
                    isExternal
                    anchorIcon={<LinkArrow />}
                    showAnchorIcon
                >
                    roadmap
                </Link>
                . Feel free to leave a comment or suggestion.
            </p>
            <iframe src="https://baitblock.featurebase.app/roadmap" className="h-full rounded-md"></iframe>
        </div>
    )
}