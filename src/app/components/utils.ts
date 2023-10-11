export function capitalizeFirstLetter(word: string) {
    const firstLetter = word.charAt(0).toUpperCase();
    const remainingLetters = word.substring(1);

    return firstLetter + remainingLetters
}

export function formatDate(date: string) {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString('default', {month: 'short'})
    const dayOfMonth = dateObj.getDate();
    const year = dateObj.getFullYear();

    return dayOfMonth + " " + month + " " + year;
}

export function formatAsCurrency(amount: number) {
    const currencyAmount = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    })

    return currencyAmount.format(amount);
}
