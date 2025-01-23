
'use client';

import React, { PropsWithChildren } from "react";
import Image from "next/image";
import classNames from "classnames";

import Menu from "./Menu";

import { Box, Flex, Heading, TabNav } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import { routes } from "@/utils/constants";

const PageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
    const currentPath = usePathname();

    return (
        <div className="w-screen relative min-h-screen lg:flex lg:items-center lg:justify-center">
            <div className="block lg:hidden w-full bg-violet flex items-center justify-center relative">
                <Menu />

                <div className="absolute left-0 z-40 top-0 w-screen h-screen">
                    <div className="w-full h-full bg-cover bg-no-repeat absolute bg-center bg-hero-pattern"></div> 
                </div> 

                <div className="absolute right-0 top-0 w-[7.56rem] h-[6.93rem]">
                    <div className="w-full h-full bg-contain bg-no-repeat absolute bg-right-top bg-[url('/images/tr.png')]"></div> 
                </div>

                <div className="absolute left-0 top-0 w-[7.56rem] h-[6.93rem]">
                    <div className="w-full h-full bg-contain bg-no-repeat absolute bg-left-top bg-[url('/images/tl.png')]"></div> 
                </div>

                <div className="relative z-40 w-full min-h-[18rem] flex items-center justify-center">
                    <div className="text-center">
                        <Heading as="h1" className="text-gold font-normal text-6xl">
                            Marcel & Victoria <br /> <span className="text-xl">#LoveLedbyFaith #TheMaVUnion</span>
                        </Heading>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block w-screen h-screen min-h-screen flex items-center justify-center bg-violet fixed top-0 left-0 right-0 bottom-0">
                <div className="fixed right-0 bottom-0 w-[20rem] h-[20rem]">
                    <div className="w-full h-full bg-contain bg-no-repeat absolute bg-right-bottom bg-[url('/images/br.png')]"></div> 
                </div>
                
                <div className="fixed right-0 top-0 w-[20rem] h-[20rem]">
                    <div className="w-full h-full bg-contain bg-no-repeat absolute bg-right-top bg-[url('/images/tr.png')]"></div> 
                </div>

                <div className="fixed left-0 top-0 w-[20rem] h-[20rem]">
                    <div className="w-full h-full bg-contain bg-no-repeat absolute bg-left-top bg-[url('/images/tl.png')]"></div> 
                </div>
                
                <div className="fixed left-0 bottom-0 w-[20rem] h-[20rem]">
                    <div className="w-full h-full bg-contain bg-no-repeat absolute bg-left-bottom bg-[url('/images/bl.png')]"></div> 
                </div>
                
                <div className="fixed left-0 top-0 w-screen h-screen">
                    <div className="w-full h-full z-50 bg-contain bg-repeat absolute bg-left-bottom bg-hero-pattern"></div> 
                </div>
            </div>

            <div className="z-50 lg:px-3 lg:py-24 text-center lg:border-gold lg:border-x-8 bg-white w-full lg:w-7/12 min-h-screen">
                <div className="hidden lg:block">
                    <Flex align="center" justify="center" className="mb-12">
                        <Image 
                            src='/images/mv-logo.jpeg'
                            alt='Marcel & Victoria Signature'
                            className="object-cover w-24 h-24"
                            width={150}
                            height={150}
                        />
                    </Flex>

                    <Flex align="center" justify="center">
                        <Heading className="max-w-3xl text-gold font-normal tracking-normal uppercase text-4xl lg:text-6xl">
                            Marcel <span className="text-4xl">&</span> Victoria <br /> <span className="text-xl lg:text-4xl">#LoveLedbyFaith  #TheMaVUnion</span>
                        </Heading>
                    </Flex>

                    <Box className="my-10">
                        <Flex direction="row" justify="center" gap="4" className="px-10">
                            <TabNav.Root className="shadow-none flex-col lg:flex-row items-center">
                                {routes.map((route) => {
                                    const isActive = currentPath === route.path;

                                    return (
                                        <TabNav.Link 
                                            key={route.label} 
                                            href={route.path}
                                            active={isActive}
                                            className={classNames({
                                                "text-gold p-2 capitalize": true,
                                                "bg-stone-100 rounded-lg": isActive,
                                            })} 
                                        >
                                            {route.label}
                                        </TabNav.Link>
                                    );
                                })}
                            </TabNav.Root>
                        </Flex>
                    </Box>
                </div>

                {children}

                <Flex align="center" justify="center" className="my-12">
                    <Box className="w-16 h-16 rounded-full overflow-hidden">
                        <Image 
                            src='/images/mv-logo-dark.jpeg'
                            alt='Marcel & Victoria Signature Dark'
                            className="object-cover"
                            width={150}
                            height={150}
                        />
                    </Box>
                </Flex>
            </div>
        </div>
    );
};

export default PageWrapper;