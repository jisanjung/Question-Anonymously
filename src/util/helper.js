import * as dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";

// source: ChatGPT
export const createUnique6DigitNumber = () => {
    const generatedNumbers = new Set();
    
    return function generateUnique6DigitNumber() {
        if (generatedNumbers.size >= 900000) {
            throw new Error('All possible 6-digit numbers have been generated.');
        }

        let number;
        do {
            number = Math.floor(Math.random() * 900000) + 100000;
        } while (generatedNumbers.has(number));

        generatedNumbers.add(number);
        return number;
    };
};

export const timeFromNow = (now) => {
    dayjs.extend(relativeTime);
    return dayjs(now).fromNow();
};
