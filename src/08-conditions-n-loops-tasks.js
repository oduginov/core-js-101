/* *************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {string}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 15 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  return num.toString();
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n === 1) {
    return 1;
  }
  return getFactorial(n - 1) * n;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  return ((n1 + n2) * (n2 - n1 + 1)) / 2;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {boolean}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  return (a + b) > c && (a + c) > b && (b + c) > a;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {boolean}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const y11 = rect1.top + rect1.height;
  const y12 = rect1.top;
  const x11 = rect1.left + rect1.width;
  const x12 = rect1.left;
  const y21 = rect2.top + rect2.height;
  const y22 = rect2.top;
  const x21 = rect2.left + rect2.width;
  const x22 = rect2.left;
  const cond1 = y11 >= y22 && y22 >= y12;
  const cond2 = y11 >= y21 && y21 >= y12;
  const cond3 = y21 >= y12 && y12 >= y22;
  const cond4 = y21 >= y11 && y11 >= y22;
  if (!cond1 && !cond2 && !cond3 && !cond4) {
    return false;
  }
  const cond5 = x11 >= x22 && x22 >= x12;
  const cond6 = x11 >= x21 && x21 >= x12;
  const cond7 = x21 >= x12 && x12 >= x22;
  const cond8 = x21 >= x11 && x11 >= x22;
  return !(!cond5 && !cond6 && !cond7 && !cond8);
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {boolean}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const a = (circle.center.x - point.x) * (circle.center.x - point.x);
  const b = (circle.center.y - point.y) * (circle.center.y - point.y);
  return a + b < circle.radius * circle.radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str.split(str[i]).length <= 2) {
      return str[i];
    }
  }
  return null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {boolean} isStartIncluded
 * @param {boolean} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let str = isStartIncluded ? '[' : '(';
  str = a <= b ? `${str}${a}, ${b}` : `${str}${b}, ${a}`;
  return isEndIncluded ? `${str}]` : `${str})`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('')
    .reverse()
    .join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return Number(num.toString()
    .split('')
    .reverse()
    .join(''));
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false

 const darr = arr.map((item) => (2 * item).toString()
 .split('')
 .map(Number));
 */

function isCreditCardNumber(ccn) {
  const str = ccn.toString();
  let sum = Number(str[str.length - 1]);
  const nDigits = str.length;
  const parity = nDigits % 2;
  for (let i = 0; i <= nDigits - 2; i += 1) {
    let digit = Number(str[i]);
    if (i % 2 === parity) {
      digit *= 2;
    }
    if (digit > 9) {
      digit -= 9;
    }
    sum += digit;
  }
  return sum % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 * @param num
 */
function getDigitalRoot(num) {
  const result = num.toString()
    .split('')
    .map(Number)
    .reduce((acc, item) => acc + item, 0);
  return result >= 10 ? getDigitalRoot(result) : result;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const stack = [];
  const queue = str.split('');
  while (queue.length !== 0) {
    const brace = queue.shift();
    if (brace === '(' || brace === '[' || brace === '{' || brace === '<') {
      stack.push(brace);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const sbrace = stack.pop();
      const a = (brace === ']' && sbrace !== '[');
      const b = (brace === ')' && sbrace !== '(');
      const c = (brace === '}' && sbrace !== '{');
      const d = (brace === '>' && sbrace !== '<');
      if (a || b || c || d) {
        return false;
      }
    }
  }
  return stack.length === 0;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} paths
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(paths) {
  const arr = paths.map((item) => item.split('/'));
  const minLength = arr
    .reduce((acc, item, index) => (arr[acc].length > arr[index].length ? index : acc), 0);
  for (let i = 0; i < arr[minLength].length; i += 1) {
    for (let j = 0; j < arr.length - 1; j += 1) {
      if (arr[j][i] !== arr[j + 1][i]) {
        let str = '';
        for (let k = 0; k <= i - 1; k += 1) {
          str = `${str}${arr[0][k]}/`;
        }
        return str;
      }
    }
  }
  return paths[minLength];
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const r = m1.length;
  const q = m2[0].length;
  const m = new Array(r);
  for (let i = 0; i < r; i += 1) {
    m[i] = new Array(q).fill(0);
  }
  for (let i = 0; i < r; i += 1) {
    for (let j = 0; j < q; j += 1) {
      for (let k = 0; k < m1[0].length; k += 1) {
        m[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  return m;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  if (position[0][0] && position[0][0] === position[0][1] && position[0][1] === position[0][2]) {
    return position[0][0];
  }
  if (position[1][0] && position[1][0] === position[1][1] && position[1][1] === position[1][2]) {
    return position[1][0];
  }
  if (position[2][0] && position[2][0] === position[2][1] && position[2][1] === position[2][2]) {
    return position[2][0];
  }
  if (position[0][0] && position[0][0] === position[1][0] && position[1][0] === position[2][0]) {
    return position[0][0];
  }
  if (position[0][1] && position[0][1] === position[1][1] && position[1][1] === position[2][1]) {
    return position[0][1];
  }
  if (position[0][2] && position[0][2] === position[1][2] && position[1][2] === position[2][2]) {
    return position[0][2];
  }
  if (position[0][0] && position[0][0] === position[1][1] && position[1][1] === position[2][2]) {
    return position[0][0];
  }
  if (position[2][0] && position[2][0] === position[1][1] && position[1][1] === position[0][2]) {
    return position[2][0];
  }
  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
