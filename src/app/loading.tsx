import Image from "next/image";
import { Flex } from "@radix-ui/themes";

const Loading = () => {
    return ( 
        <Flex align="center" justify="center" className="bg-white h-screen w-screen">
            <Image
                src='/images/mv-logo.jpeg'
                alt='Marcel & Victoria Signature'
                className="object-cover w-24 h-24"
                width={150}
                height={150}
            />
        </Flex>
     );
}
 
export default Loading;