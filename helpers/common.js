const isEmpty = value => 
  value === undefined || 
  value === null || 
  (typeof value === 'object' && Object.keys(value).length === 0 ) ||
  (typeof value === 'string' && value.trim().length === 0);

const promisify = (fn) => (...args) =>
  new Promise((resolve, reject) => 
    fn(...args, (err, result) => {
      if(err) return reject(err);
      return resolve(result);
    })
  );

function callbackify(fn) {
  return (...args) => {
    const onlyArgs = args.slice(0, args.length - 1);
    const callback = args[args.length - 1];

    func.apply(this, onlyArgs)
      .then(data => callback(null, data))
      .catch(err => callback(err))
  }
}  

  /* 
  function promisify(fn) {
    return (...args) =>
      new Promise((resolve, reject) => {
        const callback = (err, data) => err ? reject(err) : resolve(data);
        fn.apply(this, [...args, callback]);
      })
  }
*/

module.exports = {
  isEmpty,
  promisify,
  callbackify
};