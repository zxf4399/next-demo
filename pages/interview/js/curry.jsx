const Curry = () => {
  function sub_curry(fn) {
    const args = [].slice.call(arguments, 1);
    return function () {
      return fn.apply(this, args.concat([].slice.call(arguments)));
    };
  }

  function curry(fn, length = fn.length) {
    return function () {
      if (arguments.length < length) {
        const combined = [fn].concat([].slice.call(arguments))
        return curry(sub_curry.apply(this, combined), length - arguments.length)
      } else {
        return fn.apply(this, arguments);
      }
    };
  }

  const fn = curry(function (a, b, c) {
    return [a, b, c];
  });

  console.log(fn('a')('c')('b'));
  console.log(fn('a', 'e')('b'));
  console.log(fn('b')('c')('a'));

  return null;
};

export default Curry;
