import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
} from "@nextui-org/navbar";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { GradientText } from "./GText";

export function NavBar() {
    return (
        <Navbar className="py-6 bg-transparent absolute" maxWidth="xl" isBlurred={false}>
            <NavbarBrand className="gap-x-2">
                <Image 
                    src={"/logo.png"} 
                    alt="Baitblock Logo" 
                    width={100}
                    height={100}
                    priority
                />
                <GradientText content="Baitblock" className="text-4xl" />
            </NavbarBrand>
            <NavbarContent justify="end">
                <Button
                    variant="ghost"
                    size="lg"
                    color="secondary"
                    as={Link}
                    href="https://w92qv61rb9z.typeform.com/to/RozBPKU9"
                    isExternal
                >
                    Notify Me
                </Button>
            </NavbarContent>
        </Navbar>
    )
}