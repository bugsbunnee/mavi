
'use client';
import Image from "next/image";

import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { formatDate } from "@/utils/lib";
import { weddingDetails } from "@/utils/constants";
import { useRouter } from "next/navigation";

import useCountDown from "@/hooks/useCountDown";

const Home = () => {
  const { days, hours, minutes } = useCountDown(weddingDetails.white.date);
  const { push } = useRouter();

  const getSuffix = (value: number) => {
    return value > 1 ? 's' : '';
  };

  return (
      <>
         <Flex align="center" justify="center" className="mb-8">
            <Box className="w-full h-[38rem] lg:w-[28rem] lg:rounded-md relative overflow-hidden">
              <Image 
                src='/images/landing.jpeg'
                alt='Marcel & Victoria'
                className="object-cover"
                fill
                priority
              />
            </Box>
          </Flex>

          <Box className="text-center px-8">
            <Heading as="h2" size="8" className="mb-0 text-black font-medium text-uppercase">{formatDate(weddingDetails.white.date, 'dddd')}, <br /> {formatDate(weddingDetails.white.date)}</Heading>
        
            <Box className="my-6">
              <Heading
                as="h3"
                size="6"
                className="text-black font-normal text-uppercase"
              >
                {weddingDetails.white.location}
              </Heading>
            </Box>
            
            <Text className="text-sm text-black uppercase tracking-widest">
              {days} day{getSuffix(days)}, {hours} hour{getSuffix(hours)} and {minutes} minute{getSuffix(minutes)} to go
            </Text>

            <Box className="mt-12 mb-14">
              <Button onClick={() => push('/rsvp')} className="cursor-pointer bg-transparent border-gold border-2 border-solid rounded px-6 h-12">
                <Text size="3" className="text-black text-base">
                  RSVP
                </Text>
              </Button>
            </Box>

            <Flex align="center" justify="center">
              <Text className="text-base font-normal text-align max-w-lg text-black">
                We can&apos;t wait to share our special day with you. Help us capture our wedding with Joy.
              </Text>
            </Flex>
          </Box>
      </>
  );
};

export default Home;