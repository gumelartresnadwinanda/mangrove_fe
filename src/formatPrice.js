
export default (number) => {
    const currency = new Intl.NumberFormat('id-ID').format(number || 0);
    return currency;
};