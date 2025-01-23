import { useEffect, useState } from "react";

interface CountDown {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const useCountDown = (endDate: Date | string) => {
    const [countdown, setCountdown] = useState<CountDown>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const endTime = new Date(endDate).getTime();

            const timeDifference = endTime - currentTime;
            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                setCountdown({ days, hours, minutes, seconds });
            } else {
                clearInterval(interval);
            }
    
        }, 1_000);
        
        return () => clearInterval(interval);
    }, [endDate]);

    return countdown;
};
 
export default useCountDown;