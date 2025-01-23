
'use client';

import Image from "next/image";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";

const Registry = () => {
  return (
      <>
            <Flex align="center" justify="center" className="mb-8">
                <Box className="w-full h-[38rem] lg:w-[28rem] lg:rounded-md relative overflow-hidden">
                    <Image 
                        src='/images/questions.jpeg'
                        alt='Marcel & Victoria'
                        className="object-cover"
                        fill
                        priority
                    />
                </Box>
            </Flex>
      
            <Flex className="" justify="center" align="center">
                <Box className="bg-white text-center lg:w-8/12 p-6 lg:p-0">
                    <Heading as="h2" className="mb-0 text-4xl text-gold font-normal text-uppercase">REGISTRY</Heading>
    
                    <Box className="mt-8 text-base font-medium text-gray-900">
                        <Text>
                            For all our friends and family who have lots of questions, please 
                            check out our Q & A first!
                        </Text>

                        <br />

                        <Text>
                            Your presence at our wedding is the greatest gift we could ask for! 
                            However, if you wish to honor us further, cash gifts are welcome.
                        </Text>
                    </Box>
    
                    <Box className="mt-4 text-base font-medium text-gray-900">
                        Please send any cash gifts to our account below.
                    </Box>
                    
                    <Box className="mt-4 text-base font-medium text-gray-900">
                        <strong>Account Number:</strong> 6505480509
                        <br />
                        <strong>Bank:</strong> Providus Bank
                        <br />
                        <strong>Account Name:</strong> Marcel & Victoria
                    </Box>
                </Box>
            </Flex>
      </>
  );
};

export default Registry;