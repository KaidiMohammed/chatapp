// delete duplicates in array js
/**
 * this module contains a set of useful js functions that can be used in daily programmer life
 */
module.exports = {
    getUniqueObjects: (arr, comp) => {
        const unique = arr
            .map(e => e[comp])
            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)
            // eliminate the dead keys & store unique objects
            .filter(e => arr[e]).map(e => arr[e]);
        return unique;
    }
}