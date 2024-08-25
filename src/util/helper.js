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

// source: ChatGPT
export const generateNumberFromId = (id) => {
    if (!id) {
        return 0;
    }
    id = id.toString();
    // Hash the ID string to create a unique number
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
        let char = id.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    hash = Math.abs(hash);
    // Convert hash to a 4-digit number
    let uniqueNumber = hash % 10000;
    // Ensure the number is always 4 digits
    if (uniqueNumber < 1000) {
        uniqueNumber += 1000;
    }
    return uniqueNumber;
};

export const timeFromNow = (timestamp) => {
    dayjs.extend(relativeTime);
    return dayjs(timestamp).fromNow();
};
