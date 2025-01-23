'use client';

import toast from "react-hot-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Flex, Heading, RadioGroup, Separator, Spinner, Text, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import { BiEnvelope, BiUser } from "react-icons/bi";
import { z } from "zod";

import { RSVP_DEADLINE } from "@/utils/constants";
import { formatDate } from "@/utils/lib";

import sendRSVP from "@/services/rsvp";

const schema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    attending: z.string(),
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
        <form onSubmit={handleSubmit(submitRSVP)}>
            <Box className="text-center">
                <Heading as="h2" size="8" className="mb-2 text-gold font-semibold text-uppercase">RSVP</Heading>
                <Text className="font-medium text-base ">RSVP by {formatDate(RSVP_DEADLINE)}</Text>
            </Box>

            <Box className="mt-16">
                <Heading as="h3" className="text-xs font-semibold text-gold">Name</Heading>

                <Flex direction="row" gap="3" justify="start" align="center" mt="3">
                    <Flex className="flex-1">
                        <TextField.Root variant="soft" {...register('firstName')} radius="small" className="w-full bg-white text-sm border border-gold outline-0" placeholder="First Name" size="3">
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
                        <TextField.Root variant="soft" {...register('lastName')} radius="small" className="w-full bg-white text-sm border border-gold outline-0" placeholder="Last Name" size="3">
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
                <Heading as="h3" className="text-xs font-semibold text-gold">Email</Heading>

                <TextField.Root mt="3" variant="soft" {...register('email')} radius="small" className="w-full bg-white text-sm border border-gold outline-0" placeholder="johndoe@gmail.com" size="3">
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
                <Heading as="h3" className="text-xs font-semibold text-gold">Will you be attending our wedding?</Heading>

                <Controller 
                    control={control}
                    name="attending"
                    render={({field  }) => (
                        <RadioGroup.Root color="gold" variant="soft" {...field} name={field.name} defaultValue={field.value} onValueChange={(value) => field.onChange(value)} mt="3">
                            {OPTIONS.map((option) => (
                                <RadioGroup.Item key={option.id} checked={field.value === option.id} value={option.id}>{option.name}</RadioGroup.Item>
                            ))}
                        </RadioGroup.Root>
                    )}
                />
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