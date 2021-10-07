import { format, parse, parseISO } from 'date-fns';

const calculateAge = (dateOfBirth: Date): number => {
    const ageDifMs = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(ageDifMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const formatDate = (date: string): string => {
    return format(
        parseISO(date),
        'dd/MM/yyyy',
    )
};

const formatDateFriendly = (date: string): string => {
    return format(
        parseISO(date),
        'dd MMMM, yyyy',
    )
};

const formatTimeFriendly = (date: string): string => {
    return format(
        parseISO(date),
        'HH:mm',
    )
};

export {
    calculateAge,
    formatDate,
    formatDateFriendly,
    formatTimeFriendly,
};
