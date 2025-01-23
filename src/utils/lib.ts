import dayjs from "dayjs";
import { Metadata } from "next";

export const generateMetadata = ({ title, description }: Metadata): Metadata => {
    return {
        title,
        description,
    };
};

export const formatDate = (date: string | Date, format = 'MMMM DD, YYYY') => {
    return dayjs(date).format(format);
};