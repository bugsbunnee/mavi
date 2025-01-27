
'use client';

import Image from "next/image";
import Link from "next/link";

import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { Box, DataList, Flex, Heading, Text } from "@radix-ui/themes";
import { TbHanger } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";

import Map from "@/components/ui/Map";

import { formatDate } from "@/utils/lib";
import { urbanist, weddingDetails } from "@/utils/constants";
import { MdOutlineDirections } from "react-icons/md";

import 'add-to-calendar-button';

const Schedule = () => {
  return (
      <>
         <Flex align="center" justify="center" className="mb-8">
            <Box className="w-full h-[38rem] lg:w-[28rem] lg:rounded-md relative overflow-hidden">
              <Image 
                src='/images/invite.png'
                alt='Wedding Invite'
                className="object-fill"
                fill
                priority
              />
            </Box>
          </Flex>

          <Flex className="text-black" justify="center" align="center">
            <Box className="bg-white text-center lg:w-8/12 p-6 lg:p-0">
                <Heading as="h2" size="8" className="mb-0 text-black font-medium text-uppercase">Schedule</Heading>

                <Box className="mt-12">
                    <Flex justify="center" align="center" className="pb-4 border-b border-gray-200 my-16">
                        <Text className="center text-black text-xl uppercase tracking-widest font-medium max-w-56">
                           {formatDate(weddingDetails.traditional.date, 'dddd')} <br /> {formatDate(weddingDetails.traditional.date)}
                        </Text>
                    </Flex>

                    <Flex justify="center" align="center">
                        <Box>
                            <DataList.Root>
                                <DataList.Item className="mb-3.5 flex flex-col-reverse max-lg:justify-center max-lg:items-center lg:grid">
                                    <DataList.Label className="block min-w-20 text-right text-gray-500 text-base font-semibold">
                                        {weddingDetails.traditional.startTime}
                                    </DataList.Label>
                                    <DataList.Value className="text-left text-xl capitalize tracking-widest font-semibold">
                                        Traditional Wedding
                                    </DataList.Value>
                                </DataList.Item>

                                <DataList.Item className="flex flex-col max-lg:justify-center max-lg:items-center lg:grid" align="center">
                                    <DataList.Label className="min-w-20 items-center mb-8 lg:mb-0 gap-4 lg:gap-0 text-right text-gray-500 text-base font-semibold">
                                        <AddToCalendarButton
                                            buttonStyle="round"
                                            styleLight={`--btn-background: white; --font: ${urbanist.style.fontFamily}`}
                                            name={weddingDetails.traditional.id}
                                            options={['Apple','Google']}
                                            location="World Wide Web"
                                            startDate={weddingDetails.traditional.date}
                                            endDate={weddingDetails.traditional.date}
                                            endTime={weddingDetails.traditional.endTime}
                                            startTime={weddingDetails.traditional.startTime}
                                            timeZone="Africa/Lagos"
                                        />

                                        <Link href={weddingDetails.traditional.url} target="_blank" rel="noopenner noreferrer" className="flex items-center gap-2 lg:hidden text-base px-4 py-3 h-[3rem] border border-[#d2d2d2] shadow-lg rounded-full">
                                            <MdOutlineDirections /> Directions
                                        </Link>
                                    </DataList.Label>
                                    <DataList.Value className="text-base items-center capitalize font-normal">
                                        Our Traditional Wedding
                                    </DataList.Value>
                                </DataList.Item>
                                
                                <DataList.Item className="mb-3.5" align="center">
                                    <DataList.Label className="hidden lg:block min-w-20 text-right text-gray-500 text-base font-semibold">
                                    </DataList.Label>
                                    <DataList.Value className="gap-4 text-base justify-center text-center lg:text-left items-center capitalize font-normal">
                                        <TbHanger size={25} /> Traditional Attire in pale yellow, burnt orange and dark red
                                    </DataList.Value>
                                </DataList.Item>
                                
                                <DataList.Item className="mb-3.5" align="center">
                                    <DataList.Label className="hidden lg:block min-w-20 text-right text-gray-500 text-base font-semibold">
                                    </DataList.Label>
                                    <DataList.Value className="gap-4 text-plant underline font-medium text-base text-center lg:text-left max-lg:justify-center items-center capitalize font-normal">
                                        <CiLocationOn size={25} /> 
                                        
                                        <Link href={weddingDetails.traditional.url}>
                                            {weddingDetails.traditional.location}
                                        </Link>
                                    </DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                    </Flex>
                    
                    <Flex justify="center" align="center" className="pb-4 border-b border-gray-200 my-16">
                        <Text className="center text-black text-xl uppercase tracking-widest font-medium max-w-56">
                            {formatDate(weddingDetails.white.date)}
                        </Text>
                    </Flex>

                    <Flex justify="center" align="center">
                        <Box>
                            <DataList.Root>
                                <DataList.Item className="mb-3.5 flex flex-col-reverse max-lg:justify-center max-lg:items-center lg:grid">
                                    <DataList.Label className="block min-w-20 text-right text-gray-500 text-base font-semibold">
                                        <span className="text-right">{weddingDetails.white.startTime} - {weddingDetails.white.endTime}</span>
                                    </DataList.Label>
                                    <DataList.Value className="text-left text-xl capitalize tracking-widest font-semibold">
                                        Church Wedding
                                    </DataList.Value>
                                </DataList.Item>

                                <DataList.Item className="flex flex-col max-lg:justify-center max-lg:items-center lg:grid" align="center">
                                    <DataList.Label className="min-w-20 items-center mb-8 lg:mb-0 gap-4 lg:gap-0 text-right text-gray-500 text-base font-semibold">
                                        <AddToCalendarButton
                                            buttonStyle="round"
                                            styleLight={`--btn-background: white; --font: ${urbanist.style.fontFamily}`}
                                            name={weddingDetails.white.id}
                                            options={['Apple','Google']}
                                            location="World Wide Web"
                                            startDate={weddingDetails.white.date}
                                            endDate={weddingDetails.white.date}
                                            startTime={weddingDetails.white.startTime}
                                            endTime={weddingDetails.white.endTime}
                                            timeZone="Africa/Lagos"
                                        />

                                        <Link href={weddingDetails.white.url} target="_blank" rel="noopenner noreferrer" className="flex items-center gap-2 lg:hidden text-base px-4 py-3 h-[3rem] border border-[#d2d2d2] shadow-lg rounded-full">
                                            <MdOutlineDirections /> Directions
                                        </Link>
                                    </DataList.Label>
                                    <DataList.Value className="text-base items-center capitalize font-normal">
                                       The one where we say our vows
                                    </DataList.Value>
                                </DataList.Item>
                                
                                <DataList.Item className="mb-3.5" align="center">
                                    <DataList.Label className="hidden lg:block min-w-20 text-right text-gray-500 text-base font-semibold">
                                    </DataList.Label>
                                    <DataList.Value className="gap-4 text-base justify-center text-center lg:text-left items-center capitalize font-normal">
                                        <TbHanger size={25} /> We are big on celebrating with you colorfully so be comfortably festive!
                                    </DataList.Value>
                                </DataList.Item>
                                
                                <DataList.Item className="mb-3.5" align="center">
                                    <DataList.Label className="hidden lg:block min-w-20 text-right text-gray-500 text-base font-semibold">
                                    </DataList.Label>
                                    <DataList.Value className="gap-4 text-plant underline font-medium text-base max-lg:justify-center text-center lg:text-left items-center capitalize font-normal">
                                        <CiLocationOn size={25} /> 
                                        
                                        <Link href={weddingDetails.white.url}>
                                            {weddingDetails.white.location}
                                        </Link>
                                    </DataList.Value>
                                </DataList.Item>
                                <DataList.Item className="mb-3.5" align="center">
                                    <DataList.Label className="hidden lg:block min-w-20 text-right text-gray-500 text-base font-semibold">
                                    </DataList.Label>
                                    <DataList.Value className="gap-4 text-plant underline font-medium text-base items-center capitalize font-normal">
                                        <Map 
                                            lat={weddingDetails.white.coords.lat}
                                            lng={weddingDetails.white.coords.lng}
                                        />
                                    </DataList.Value>
                                </DataList.Item>
                            </DataList.Root>

                            <DataList.Root className="mt-16">
                                <DataList.Item className="mb-3.5 flex flex-col-reverse max-lg:justify-center max-lg:items-center lg:grid">
                                    <DataList.Label className="block min-w-20 text-right text-gray-500 text-base font-semibold">
                                        <span className="text-right">{weddingDetails.reception.startTime}</span>
                                    </DataList.Label>
                                    <DataList.Value className="text-left text-xl capitalize tracking-widest font-semibold">
                                        Reception
                                    </DataList.Value>
                                </DataList.Item>

                                <DataList.Item className="flex flex-col max-lg:justify-center max-lg:items-center lg:grid" align="center">
                                    <DataList.Label className="min-w-20 items-center mb-8 lg:mb-0 gap-4 lg:gap-0 text-right text-gray-500 text-base font-semibold">
                                        <AddToCalendarButton
                                            buttonStyle="round"
                                            styleLight={`--btn-background: white; --font: ${urbanist.style.fontFamily}`}
                                            name={weddingDetails.reception.id}
                                            options={['Apple','Google']}
                                            location="World Wide Web"
                                            startDate={weddingDetails.reception.date}
                                            endDate={weddingDetails.reception.date}
                                            startTime={weddingDetails.reception.startTime}
                                            endTime={weddingDetails.reception.endTime}
                                            timeZone="Africa/Lagos"
                                        />

                                        <Link href={weddingDetails.reception.url} target="_blank" rel="noopenner noreferrer" className="flex items-center gap-2 lg:hidden text-base px-4 py-3 h-[3rem] border border-[#d2d2d2] shadow-lg rounded-full">
                                            <MdOutlineDirections /> Directions
                                        </Link>
                                    </DataList.Label>
                                    <DataList.Value className="text-base text-center lg:text-left items-center capitalize font-normal">
                                        We are getting Married!!! 🕺🏾💃🏽 We&apos;d like to share food, drinks and some laughs 
                                        with everyone! Don&apos;t forget to put on dancing shoes 😁
                                    </DataList.Value>
                                </DataList.Item>
                                
                                <DataList.Item className="mb-3.5" align="center">
                                    <DataList.Label className="hidden lg:block min-w-20 text-right text-gray-500 text-base font-semibold">
                                    </DataList.Label>
                                    <DataList.Value className="text-base text-center lg:text-left items-center capitalize font-normal">
                                        We are big on celebrating with you colorfully so be comfortably festive! in Ivory, Mint Green and Eggplant
                                    </DataList.Value>
                                </DataList.Item>
                                
                                <DataList.Item className="mb-3.5" align="center">
                                    <DataList.Label className="hidden lg:block min-w-20 text-right text-gray-500 text-base font-semibold">
                                    </DataList.Label>
                                    <DataList.Value className="gap-4 text-plant text-center lg:text-left underline font-medium text-base justify-center text-center items-center capitalize font-normal">
                                        <CiLocationOn size={25} /> 
                                        
                                        <Link href={weddingDetails.reception.url}>
                                            {weddingDetails.reception.location}
                                        </Link>
                                    </DataList.Value>
                                </DataList.Item>

                                <DataList.Item className="mb-3.5" align="center">
                                    <DataList.Label className="hidden lg:block min-w-20 text-right text-gray-500 text-base font-semibold">
                                    </DataList.Label>
                                    <DataList.Value className="gap-4 text-plant underline font-medium text-base items-center capitalize font-normal">
                                        <Map 
                                            lat={weddingDetails.reception.coords.lat}
                                            lng={weddingDetails.reception.coords.lng}
                                        />
                                    </DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Box>
                    </Flex>
                </Box>
            </Box>
          </Flex>
      </>
  );
};

export default Schedule;