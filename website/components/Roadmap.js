import { Link } from "@nextui-org/react"
import { GradientText } from "./GText"
import { LinkArrow } from "./LinkArrow"

export function Roadmap() {
    return (
        <div className="py-14 px-16 h-screen flex mt-10 mx-10 flex-col gap-y-5">
            <div className="flex text-6xl">
                <h1 className="font-bold mr-1">
                    Down the
                </h1>
                <GradientText content="Road" className="ml-2"/>
            </div>
            <p className="text-xl">
                Take a look at Baitblock's 
                <Link href="https://baitblock.featurebase.app/roadmap"
                    className="text-xl ml-2"
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