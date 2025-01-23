
'use client';
import Image from "next/image";
import { Box, Flex, Heading } from "@radix-ui/themes";
import { formatDate } from "@/utils/lib";
import { RSVP_DEADLINE } from "@/utils/constants";

const questions = [
    {
        label: 'When is the RSVP deadline?',
        value: `Please RSVP by ${formatDate(RSVP_DEADLINE)}, so we can adequately prepare to host you. :)`,
    },
    {
        label: 'Can I bring a date?',
        value: "Unfortunately, we cannot accommodate guests not indicated in the invitation. Rest assured that you will be seated with people you know and will have a great time!",
    },
    {
        label: "Are kids welcome?",
        value: "Our preference is for an adults-only event but where you are unable to leave your children behind, there will be a section for them and their minders, where applicable.",
    },
    {
        label: "Where should I park?",
        value: "There is a free parking space in and around the church and the hall for the reception.",
    },
    {
        label: "What should I wear?",
        value: "Dress Code: Comfortably festive. Colors of the day: Ivory, mint green and eggplant.",
    },
    {
        label: "Is it okay to take pictures with our phones and cameras during the wedding?",
        value: "Yes! We would love for you to take pictures and share them with us. There will be a card with a QR code on it, directing you to a Drive where you can share the photos.",
    },
];

const Questions = () => {
  return (
      <>
         <Flex align="center" justify="center" className="mb-8">
            <Box className="w-full h-[38rem] lg:w-[28rem] lg:rounded-md relative overflow-hidden">
              <Image 
                src='/images/questions.jpg'
                alt='Marcel & Victoria'
                className="object-cover"
                fill
                priority
              />
            </Box>
          </Flex>

          <Flex className="" justify="center" align="center">
            <Box className="bg-white text-center lg:w-8/12 p-6 lg:p-0">
                <Heading as="h2" size="9" className="mb-0 text-gold font-normal text-uppercase">Q&A</Heading>

                <Box className="mt-8 text-base font-medium text-gray-900">
                    For all our friends and family who have lots of questions, please 
                    check out our Q & A first!
                </Box>

                <Box className="mt-12 text-left">
                    {questions.map((snippet) => (
                        <Box className="mt-12" key={snippet.label}>
                            <Box className="text-base font-bold text-gray-900">
                                {snippet.label}
                            </Box>

                            <Box className="mt-4 text-base font-medium text-gray-900">
                                {snippet.value}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
          </Flex>
      </>
  );
};

export default Questions;