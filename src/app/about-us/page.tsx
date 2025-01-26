
'use client';
import Image from "next/image";
import { Box, Flex, Heading } from "@radix-ui/themes";

const snippets = [
    {
        label: "What's your favorite activity together?",
        value: "Eating grilled fish and potato fries while watching TV shows at home.",
    },
    {
        label: "Where are you going for your honeymoon?",
        value: "Send funds; then we'd update you after 😉",
    },
    {
        label: "What's the best meal you've eaten together?",
        value: "Victoria made one Oha soup one time, with eba. It was like I died and went to heaven.",
    },
    {
        label: "The nerdiest thing about us is?",
        value: "We would rather stay home and play video games and breathe each other's air, than go out 🤓",
    },
    {
        label: "What are your values?",
        value: "Integrity, Honesty and Respect.",
    },
    {
        label: "We are regulars at:",
        value: "Glover court, Godaif, Hans & Rene, That Suya guy on the street corner 😅",
    },
];

const Story = () => {
  return (
      <>
          <Flex align="center" justify="center" className="lg:mb-8">
            <Box className="w-full h-[38rem] lg:w-[28rem] lg:rounded-md relative overflow-hidden">
              <Image 
                src='/images/about-us.jpeg'
                alt='Marcel & Victoria'
                className="object-cover"
                fill
                priority
              />
            </Box>
          </Flex>

          <Flex justify="center" align="center">
            <Box className="bg-white text-center lg:w-8/12 p-8 lg:p-0">
                <Heading as="h2" size="8" className="lg:mt-16 text-gold font-normal text-uppercase">Tidbits</Heading>

                <Box className="mt-12 text-left">
                    <Box className="text-base font-bold text-gray-900">
                        How did you first meet?
                    </Box>

                    <Box>
                        <Heading as="h4" size="2" className="font-bold text-gray-900 mb-1 mt-3">VA</Heading>

                        <Box className="mt-3 text-base font-medium text-gray-900">
                            At church. I thought he was another one of those Media team bros who just feel themselves 
                            for nothing, always with an earpiece in one ear and not really following the service. LOL
                        </Box>

                        <Heading as="h4" size="2" className="font-bold text-gray-900 mb-1 mt-3">MC</Heading>

                        <Box className="mt-3 text-base font-medium text-gray-900">
                           We met at Church. I noticed her the moment she walked in, and I thought to myself &lsquo;Who be this fine girl? (In the middle of service ooo 😂) &rsquo;. 
                           I decided I was going to talk to her after service, but she disappeared immediately after the benediction. This happened for 3 consecutive weeks until one fateful day... (To be continued) 
                        </Box>
                    </Box>
                </Box>
               
                <Box className="mt-12 text-left">
                    <Box className="text-base font-bold text-gray-900">
                        What was your most memorable date?
                    </Box>

                    <Box>
                        <Heading as="h4" size="2" className="font-bold text-gray-900 mb-1 mt-3">VA</Heading>

                        <Box className="mt-3 text-base font-medium text-gray-900">
                            They have all been memorable, but we once went to see a &apos;stage&apos; play at Terra 
                            Kulture - turns out it was one of those they had intended the audience 
                            to be a part of it. It was hilarious!
                        </Box>

                        <Heading as="h4" size="2" className="font-bold text-gray-900 mb-1 mt-3">MC</Heading>

                        <Box className="mt-3 text-base font-medium text-gray-900">
                            We had a flight to catch very early in the morning, and we almost missed our 
                            flight. Everyone had already boarded and we had to run, literally, to catch up. Never seen her run that fast till that moment LOL.
                        </Box>
                    </Box>
                </Box>
               

                <Box className="mt-12 text-left">
                    {snippets.map((snippet) => (
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

export default Story;