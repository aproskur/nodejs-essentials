let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;

module.exports = {
    anything: true,
    who: "Astronotarb",
    count,
    inc,
    dec,
    getCount
};
