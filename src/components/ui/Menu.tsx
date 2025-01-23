'use client';

import { useEffect, useState } from "react";
import { Box, Button, Flex, Heading } from "@radix-ui/themes";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

import { AnimatePresence, motion } from "motion/react";
import { routes } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
    const [isVisible, setVisible] = useState(false);
    const pathname = usePathname();
    const width = window.outerWidth * 0.8;

    const toggleVisibility = () => {
        setVisible((prev) => !prev);
    };

    useEffect(() => {
        if (isVisible) {
            toggleVisibility();
        }

        // eslint-disable-next-line
    }, [pathname]);

    return ( 
        <>
            <Button onClick={toggleVisibility} className="bg-slate-50 z-50 text-black text-black text-xl font-semibold fixed top-5 left-5 h-[3rem] px-6 z-50" radius="full">
                <RxHamburgerMenu size={20}/> Menu
            </Button>

            <AnimatePresence>
                {isVisible && (
                    <motion.div className="fixed py-3 px-6 z-50 left-0 top-0 bottom-0 bg-white shadow" style={{ width }} initial={{ width: 0, opacity: 0 }} animate={{ width, opacity: 1 }} exit={{ width: 0, opacity: 0 }} >
                        <Flex justify="end" align="end">
                            <Button onClick={toggleVisibility} radius="full" className="bg-purple-100 w-8 h-8" variant="soft">
                                <TfiClose size={10} />
                            </Button>
                        </Flex>

                        <Heading as="h2" className="text-3xl text-center my-8 font-semibold text-violet">
                            Marcel & Victoria <br /> <span className="text-2xl font-normal">#LoveLedbyFaith</span>
                        </Heading>

                        <Box className="mt-16">
                                {routes.map((route) => (
                                    <Box key={route.path} className="mb-8">
                                        <Link href={route.path} className="text-base font-semibold text-violet bg-purple-100 px-6 py-3 rounded-full w-full">
                                                {route.label}
                                        </Link>
                                    </Box>
                                ))}

                            <Box className="mt-16">
                                <Link href='/rsvp' className="cursor-pointer bg-transparent text-black border-gold border-2 border-solid rounded-full px-6 py-3">
                                    RSVP
                                </Link>
                            </Box>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
 
export default Menu;