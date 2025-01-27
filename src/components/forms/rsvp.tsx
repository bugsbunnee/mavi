'use client';

import toast from "react-hot-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Flex, Heading, RadioGroup, Separator, Spinner, Text, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import { BiBook, BiBrain, BiEnvelope, BiHash, BiParty, BiUser } from "react-icons/bi";
import { z } from "zod";

import { RSVP_DEADLINE } from "@/utils/constants";
import { formatDate } from "@/utils/lib";

import sendRSVP from "@/services/rsvp";

const schema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    attending: z.string(),
    favoriteDanceMove: z.string().optional(),
    storyName: z.string().optional(),
    marriageAdvice: z.string().optional(),
    hashtag: z.string().trim().optional(),
    figure: z.string().optional(),
    favoriteMemory: z.string().optional(),
});

type RSVP = z.infer<typeof schema>;

const RSVPForm = () => {
    const { control, formState, register, reset, handleSubmit } = useForm<RSVP>({ resolver: zodResolver(schema), mode: 'all' });

    const submitRSVP = async (data: RSVP) => {
        try {
            await sendRSVP(data);
            toast.success('RSVP Saved Successfully!');

            reset();
        } catch (error) {
            console.log(error);
            toast.error('Ooops! Looks like we could\'t save your response at this time! Please try again later');
        }
    };

    return ( 
        <form className="placeholder-gray-600" onSubmit={handleSubmit(submitRSVP)}>
            <Box className="text-center">
                <Heading as="h2" size="8" className="mb-2 text-gold font-semibold text-uppercase">RSVP</Heading>
                <Text className="font-medium text-base ">RSVP by {formatDate(RSVP_DEADLINE)}</Text>
            </Box>

            <Box className="mt-16">
                <Heading as="h3" className="text-xs font-semibold text-gold">Name (*)</Heading>

                <Flex direction="row" gap="3" justify="start" align="center" mt="3">
                    <Flex className="flex-1">
                        <TextField.Root variant="soft" {...register('firstName')} radius="small" className="w-full bg-white placeholder-gray-600 text-sm border border-gold text-black outline-0" placeholder="First Name" size="3">
                            <TextField.Slot>
                                <BiUser className="text-gold" height="16" width="16" />
                            </TextField.Slot>
                        </TextField.Root>

                        {formState.errors.firstName && (
                            <Box className="mt-8">
                                <Text className="text-sm font-semibold text-red-600">
                                    {formState.errors.firstName.message}
                                </Text>
                            </Box>
                        )}
                    </Flex>
                    <Flex className="flex-1">
                        <TextField.Root variant="soft" {...register('lastName')} radius="small" className="w-full bg-white placeholder-gray-600 text-sm border border-gold text-black outline-0" placeholder="Last Name" size="3">
                            <TextField.Slot>
                                <BiUser className="text-gold" height="16" width="16" />
                            </TextField.Slot>
                        </TextField.Root>

                        {formState.errors.lastName && (
                            <Box className="mt-8">
                                <Text className="text-sm font-semibold text-red-600">
                                    {formState.errors.lastName.message}
                                </Text>
                            </Box>
                        )}
                    </Flex>
                </Flex>
            </Box>

            <Separator orientation="horizontal" my="5" size="4" />
            
            <Box className="mt-8">
                <Heading as="h3" className="text-xs font-semibold text-gold">Email (*)</Heading>

                <TextField.Root mt="3" variant="soft" {...register('email')} radius="small" className="w-full text-black placeholder-gray-600 bg-white text-sm border border-gold outline-0" placeholder="johndoe@gmail.com" size="3">
                    <TextField.Slot>
                        <BiEnvelope className="text-gold" height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>

                {formState.errors.email && (
                    <Box className="mt-8">
                        <Text className="text-sm font-semibold text-red-600">
                            {formState.errors.email.message}
                        </Text>
                    </Box>
                )}
            </Box>

            <Separator orientation="horizontal" my="5" size="4" />
            
            <Box>
                <Heading as="h3" className="text-xs font-semibold text-gold">Will you be attending our wedding? (*)</Heading>

                <Controller 
                    control={control}
                    name="attending"
                    render={({field  }) => (
                        <RadioGroup.Root color="gold" variant="soft" {...field} name={field.name} defaultValue={field.value} onValueChange={(value) => field.onChange(value)} mt="3">
                            {OPTIONS.map((option) => (
                                <RadioGroup.Item key={option.id} checked={field.value === option.id} value={option.id} className="text-black">{option.name}</RadioGroup.Item>
                            ))}
                        </RadioGroup.Root>
                    )}
                />
            </Box>
            
            <Separator orientation="horizontal" my="5" size="4" />

            <Flex direction="row" gap="3" justify="start" align="start" mt="3">
                <Box className="flex-1">
                    <Heading as="h3" className="text-xs font-semibold text-gold">What&apos;s your signature dance move? Give it a name</Heading>
                    
                    <TextField.Root mt="3" variant="soft" {...register('favoriteDanceMove')} radius="small" className="w-full bg-white placeholder-gray-600 text-sm border border-gold text-black outline-0" placeholder="Your dance move" size="3">
                        <TextField.Slot>
                            <BiParty className="text-gold" height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>

                    {formState.errors.favoriteDanceMove && (
                        <Box className="mt-8">
                            <Text className="text-sm font-semibold text-red-600">
                                {formState.errors.favoriteDanceMove.message}
                            </Text>
                        </Box>
                    )}
                </Box>
                
                <Box className="flex-1" >
                    <Heading as="h3" className="text-xs font-semibold text-gold">If our love story was a movie, what title would you give it?</Heading>

                    <TextField.Root mt="3" variant="soft" {...register('storyName')} radius="small" className="w-full bg-white placeholder-gray-600 text-sm border border-gold text-black outline-0" placeholder="Our love story" size="3">
                        <TextField.Slot>
                            <BiBook className="text-gold" height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>

                    {formState.errors.storyName && (
                        <Box className="mt-8">
                            <Text className="text-sm font-semibold text-red-600">
                                {formState.errors.storyName.message}
                            </Text>
                        </Box>
                    )}
                </Box>
            </Flex>

            <Separator orientation="horizontal" my="5" size="4" />
            
            <Box className="mt-8">
                <Heading as="h3" className="text-xs font-semibold text-gold">What&apos;s the best marriage advice you&apos;ve every heard or can give?</Heading>

                <TextField.Root mt="3" variant="soft" {...register('marriageAdvice')} radius="small" className="w-full text-black placeholder-gray-600 bg-white text-sm border border-gold outline-0" placeholder="Give us some advice" size="3">
                    <TextField.Slot>
                        <BiEnvelope className="text-gold" height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>

                {formState.errors.marriageAdvice && (
                    <Box className="mt-8">
                        <Text className="text-sm font-semibold text-red-600">
                            {formState.errors.marriageAdvice.message}
                        </Text>
                    </Box>
                )}
            </Box>

            <Separator orientation="horizontal" my="5" size="4" />
            
            <Flex direction="row" gap="3" justify="start" align="center" mt="3">
                <Box className="flex-1">
                    <Heading as="h3" className="text-xs font-semibold text-gold">If you had to give us a wedding hashtag, what would it be?</Heading>
                    
                    <TextField.Root mt="3" variant="soft" {...register('hashtag')} radius="small" className="w-full bg-white placeholder-gray-600 text-sm border border-gold text-black outline-0 uppercase" placeholder="LOVELEDBYFAITH" size="3">
                        <TextField.Slot>
                            <BiHash className="text-gold" height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>

                    {formState.errors.hashtag && (
                        <Box className="mt-8">
                            <Text className="text-sm font-semibold text-red-600">
                                {formState.errors.hashtag.message}
                            </Text>
                        </Box>
                    )}
                </Box>
                
                <Box className="flex-1" >
                    <Heading as="h3" className="text-xs font-semibold text-gold">Which historical figure would you bring as your plus one if you could?</Heading>

                    <TextField.Root mt="3" variant="soft" {...register('figure')} radius="small" className="w-full bg-white placeholder-gray-600 text-sm border border-gold text-black outline-0" placeholder="Aaron Piere (Mufasa)" size="3">
                        <TextField.Slot>
                            <BiUser className="text-gold" height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>

                    {formState.errors.figure && (
                        <Box className="mt-8">
                            <Text className="text-sm font-semibold text-red-600">
                                {formState.errors.figure.message}
                            </Text>
                        </Box>
                    )}
                </Box>
            </Flex>

            <Separator orientation="horizontal" my="5" size="4" />

            <Box className="mt-8">
                <Heading as="h3" className="text-xs font-semibold text-gold">What&apos;s your favorite memory with either of us?</Heading>

                <TextField.Root mt="3" variant="soft" {...register('favoriteMemory')} radius="small" className="w-full text-black placeholder-gray-600 bg-white text-sm border border-gold outline-0" placeholder="Your favourite memory" size="3">
                    <TextField.Slot>
                        <BiBrain className="text-gold" height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>

                {formState.errors.favoriteMemory && (
                    <Box className="mt-8">
                        <Text className="text-sm font-semibold text-red-600">
                            {formState.errors.favoriteMemory.message}
                        </Text>
                    </Box>
                )}
            </Box>

            <Separator orientation="horizontal" my="5" size="4" />

            <Flex justify="center" align="center">
                <Button size="3" disabled={!formState.isValid} className="disabled:bg-gray-400 bg-violet text-white">
                    {formState.isSubmitting && <Spinner />} Submit
                </Button>
            </Flex>
        </form>
     );
};
 
const OPTIONS = [
    {
        id: 'Yes',
        name: 'Yes',
    },
    {
        id: 'No',
        name: 'No',
    },
];

export default RSVPForm;