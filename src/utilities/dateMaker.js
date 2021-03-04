// Date Maker
// - Outputs a date in a human readable format - example: Mar 27, 2020 
export const makeDate = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const today = new Date();
    return `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
}

export const makeYear = () => {
    const d = new Date();
    return d.getFullYear();
}

export default makeDate;