
import { Box, Flex } from "@radix-ui/themes";

import Image from "next/image";
import RSVPForm from "@/components/forms/rsvp";

const RSVP = () => {
  return (
      <>
         <Flex align="center" justify="center" className="mb-8">
          <Box className="w-full h-[38rem] lg:w-[28rem] lg:rounded-md relative overflow-hidden">
              <Image 
                src='/images/rsvp.jpeg'
                alt='Marcel & Victoria'
                className="object-cover"
                fill
                priority
              />
            </Box>
          </Flex>

          <Flex className="" justify="center" align="center">
            <Box className="bg-white text-center lg:w-8/12 p-6 lg:p-0">
                <Box className="lg:mt-12 text-left">
                    <RSVPForm />
                </Box>
            </Box>
          </Flex>
      </>
  );
};

export default RSVP;