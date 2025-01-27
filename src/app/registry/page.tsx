
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
                        If you are thinking of giving us a gift, we are thankful. We would appreciate if all gifts are monetized. Here are the account numbers:
                    </Box>
                    
                    <Box className="mt-4 text-base font-medium text-gray-900 text-center">
                        <Text>
                            $ <span className="font-semibold">USD</span>
                        </Text>
                        
                        <br />

                        <Text>
                            <strong>Bank:</strong> Access Bank 
                        </Text>
                        
                        <br />

                        <Text>
                            <strong>Account number:</strong> 1814462080
                        </Text>

                        <br />

                        <Text>
                            <strong>Sort code:</strong> 044152985
                        </Text>

                        <br />

                        <Text>
                            <strong>Swift code:</strong> ABNGNGLA
                        </Text>

                        <br />

                        <Text as="div" className="mt-4">
                            ₦ <span className="font-semibold">NAIRA</span>
                        </Text>
                        
                        <Text>
                            <strong>Bank:</strong> Providus Bank
                        </Text>
                        
                        <br />

                        <Text>
                            <strong>Account number:</strong> 6504534814
                        </Text>

                        <br />

                        <Text>
                            <strong>Account Name:</strong> Marcel & Victoria
                        </Text>
                    </Box>
                </Box>
            </Flex>
      </>
  );
};

export default Registry;