import { format, parse, parseISO } from 'date-fns';

const calculateAge = (dateOfBirth: Date): number => {
    const ageDifMs = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(ageDifMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const formatDate = (date: Date): string => {
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    const month = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

    return `${day}/${month}/${year}`;
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
        'H:i',
    )
};

export {
    calculateAge,
    formatDate,
    formatDateFriendly,
    formatTimeFriendly,
};
