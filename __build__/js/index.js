/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _underscore = __webpack_require__(1);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _display = __webpack_require__(2);
	
	var _data = __webpack_require__(3);
	
	var _form = __webpack_require__(4);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _mobile = __webpack_require__(5);
	
	var _mobile2 = _interopRequireDefault(_mobile);
	
	var _match = __webpack_require__(7);
	
	var _match2 = _interopRequireDefault(_match);
	
	var _bullet = __webpack_require__(6);
	
	var _bullet2 = _interopRequireDefault(_bullet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _bullet2.default)();
	(0, _mobile2.default)();
	(0, _form2.default)();
	(0, _display.displayHome)();
	(0, _match2.default)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function () {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype,
	      ObjProto = Object.prototype,
	      FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var push = ArrayProto.push,
	      slice = ArrayProto.slice,
	      toString = ObjProto.toString,
	      hasOwnProperty = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var nativeIsArray = Array.isArray,
	      nativeKeys = Object.keys,
	      nativeBind = FuncProto.bind,
	      nativeCreate = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function Ctor() {};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function _(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function optimizeCb(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1:
	        return function (value) {
	          return func.call(context, value);
	        };
	      case 2:
	        return function (value, other) {
	          return func.call(context, value, other);
	        };
	      case 3:
	        return function (value, index, collection) {
	          return func.call(context, value, index, collection);
	        };
	      case 4:
	        return function (accumulator, value, index, collection) {
	          return func.call(context, accumulator, value, index, collection);
	        };
	    }
	    return function () {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function cb(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function (value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function createAssigner(keysFunc, undefinedOnly) {
	    return function (obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function baseCreate(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor();
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function property(key) {
	    return function (obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function isArrayLike(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function (obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function (obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function (obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function (obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function (obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function (value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function (obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function (obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function (value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function (obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function (obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function (obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function (obj, iteratee, context) {
	    var result = -Infinity,
	        lastComputed = -Infinity,
	        value,
	        computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function (value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function (obj, iteratee, context) {
	    var result = Infinity,
	        lastComputed = Infinity,
	        value,
	        computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function (value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function (obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function (obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function (obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function (value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function (left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function group(behavior) {
	    return function (obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function (value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function (result, value, key) {
	    if (_.has(result, key)) result[key].push(value);else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function (result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function (result, value, key) {
	    if (_.has(result, key)) result[key]++;else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function (obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function (obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [],
	        fail = [];
	    _.each(obj, function (value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function (array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function (array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function (array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function (array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function (array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function flatten(input, shallow, strict, startIndex) {
	    var output = [],
	        idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0,
	            len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function (array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function (array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function (array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function () {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function (array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function (array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function (value) {
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function () {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function (array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function (list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function (array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function (array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0,
	        high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1;else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function (array, item, idx) {
	      var i = 0,
	          length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	          i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function (start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function (func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function bound() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function (func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function bound() {
	      var position = 0,
	          length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) {
	        args.push(arguments[position++]);
	      }return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function (obj) {
	    var i,
	        length = arguments.length,
	        key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function (func, hasher) {
	    var memoize = function memoize(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function (func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function () {
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function (func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function later() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function () {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function (func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function later() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function () {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function (func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function (predicate) {
	    return function () {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function () {
	    var args = arguments;
	    var start = args.length - 1;
	    return function () {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) {
	        result = args[i].call(this, result);
	      }return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function (times, func) {
	    return function () {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function (times, func) {
	    var memo;
	    return function () {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !({ toString: null }).propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function (obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) {
	      if (_.has(obj, key)) keys.push(key);
	    } // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function (obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) {
	      keys.push(key);
	    } // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function (obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function (obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = _.keys(obj),
	        length = keys.length,
	        results = {},
	        currentKey;
	    for (var index = 0; index < length; index++) {
	      currentKey = keys[index];
	      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function (obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function (obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function (obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj),
	        key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function (object, oiteratee, context) {
	    var result = {},
	        obj = object,
	        iteratee,
	        keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function (value, key, obj) {
	        return key in obj;
	      };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	  // Return a copy of the object without the blacklisted properties.
	  _.omit = function (obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function (value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function (prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function (obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function (obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function (object, attrs) {
	    var keys = _.keys(attrs),
	        length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function eq(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor,
	          bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a),
	          key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function (a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function (obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function (obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function (obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function (obj) {
	    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {
	    _['is' + name] = function (obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function (obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && (typeof Int8Array === 'undefined' ? 'undefined' : _typeof(Int8Array)) != 'object') {
	    _.isFunction = function (obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function (obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function (obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function (obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function (obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function (obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function (obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function () {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function (value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function (value) {
	    return function () {
	      return value;
	    };
	  };
	
	  _.noop = function () {};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function (obj) {
	    return obj == null ? function () {} : function (key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function (attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function (obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function (n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) {
	      accum[i] = iteratee(i);
	    }return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function (min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function () {
	    return new Date().getTime();
	  };
	
	  // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function createEscaper(map) {
	    var escaper = function escaper(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function (string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function (object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function (prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate: /<%([\s\S]+?)%>/g,
	    interpolate: /<%=([\s\S]+?)%>/g,
	    escape: /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'": "'",
	    '\\': '\\',
	    '\r': 'r',
	    '\n': 'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function escapeChar(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function (text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function template(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function (obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function result(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function (obj) {
	    _.each(_.functions(obj), function (name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function () {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function () {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function (name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function () {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function () {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function () {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(undefined);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.displayHome = displayHome;
	
	var _data = __webpack_require__(3);
	
	function displayHome() {
	    var message = document.querySelector('.Home__quote__message'),
	        author = document.querySelector('.Home__quote__author'),
	        panel = document.querySelector('.Home__quote__panel');
	
	    if (/Home/.test(document.querySelector('body').classList)) {
	        (function () {
	            var i = _data.quotes.length,
	                j = _data.quotes.length,
	                k = 0,
	                l = undefined,
	                quote = _data.quotes;
	
	            (function myLoop(i) {
	                setTimeout(function () {
	                    l = k;
	                    k = parseInt(Math.random() * _data.quotes.length);
	                    if (l = k) k = parseInt(Math.random() * _data.quotes.length);
	                    message.innerHTML = '"' + quote[k].message + '"';
	                    console.log("Message added");
	
	                    author.innerHTML = quote[k].author;
	                    console.log("Author added");
	
	                    panel.classList.add('fade');
	                    console.log("Element IN");
	
	                    (function myLoopJ(i) {
	                        setTimeout(function () {
	                            if (--j) myLoopJ(j); //  decrement i and call myLoop again if i > 0
	                        }, 5000);
	                    })(_data.quotes.length);
	                    if (--i) myLoop(i); //  decrement i and call myLoop again if i > 0
	                    if (k >= quote.length) {
	                        i = _data.quotes.length;
	                        j = _data.quotes.length;
	                        myLoop(i);
	                    }
	                }, 5000);
	            })(_data.quotes.length);
	        })();
	    }
	} /*
	   * Display messages on home page randomly
	   *
	   *
	   */undefined

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var user = exports.user = {
	    "name": "",
	    "height": "",
	    "weight": "",
	    "age": "",
	    "species": "",
	    "gender": "",
	    "faction": "",
	    "fail": 0
	};
	
	var quotes = exports.quotes = [{
	    "number": 0,
	    "message": "Grâce à STARLOVERS, j'ai rencontré mon Jedinichou :3 !",
	    "author": "Obama B., 40 ans"
	}, {
	    "number": 1,
	    "message": "Depuis que j’utilise StarLovers, ma vie a complètement changée",
	    "author": "Andreïas N., 33 ans"
	}, {
	    "number": 2,
	    "message": "C’est grâce à StarLovers que j’ai ENFIN trouvé l’amour de ma vie",
	    "author": "Sergio Y., 7 ans et demi"
	}, {
	    "number": 3,
	    "message": "Oui oui oui oui oui oui oui !!!",
	    "author": "Lepers J., 66 ans"
	}, {
	    "number": 4,
	    "message": "Sans StarLovers, on aurait jamais pu se rencontrer",
	    "author": "Watson E., 25 ans"
	}, {
	    "number": 5,
	    "message": "Il ma 2manD en mariag ap 1 prmnde galaktik! Truk 2 ge-din!",
	    "author": "Smith J., 32 ans"
	}, {
	    "number": 6,
	    "message": "Eazy 92i baby, tt mm tu sè moray! <span>#KalashKalash #RPZ #TrpdOsey<span>",
	    "author": " Starfoulah75, 88 ans"
	}, {
	    "number": 7,
	    "message": "J'ai toujours rêvé de trouver quelqu'un comme ça, et StarLovers l'a fait",
	    "author": "Jones R., 74 ans"
	}, {
	    "number": 8,
	    "message": "On s'est rencontré sur StarLovers quelques minutes après que je me sois inscrit!",
	    "author": "Tintin, 24 ans"
	}, {
	    "number": 9,
	    "message": "C'est un conte de fée qui a commencé grâce à StarLovers…",
	    "author": "Alice, 19 ans"
	}, {
	    "number": 10,
	    "message": "StarLovers m'a donné une meilleure vision des sources!",
	    "author": "Jojo B., ? ans"
	}, {
	    "number": 11,
	    "message": "Youp Youp ! On se réveille on trouve l’amour sur StarLovers!",
	    "author": "Isa E.D., 19 ans"
	}, {
	    "number": 12,
	    "message": "Tinder c'est de la m*****, du coup j'ai tenté l'expérience StarLovers: ça déchire sa race gros!",
	    "author": "Marty C., 24 ans"
	}, {
	    "number": 13,
	    "message": "Mon agenda de rendez-vous est plein grâce à StarLovers… <span>#JeVoisLa VieEnVert</span>",
	    "author": "Chomel D., NaN ans"
	}, {
	    "number": 14,
	    "message": "Depuis que je suis sur StarLovers, j’ai atteins la 7è Galaxie! Hé! <span>#PhilosophieDeLamour</span>",
	    "author": "Pepe C., 23 ans"
	}, {
	    "number": 15,
	    "message": "StarLover est l’algorithme parfait pour mes rencontres! <span>#RelationSalé</span>",
	    "author": "Lepoivre F., 18 ans"
	}, {
	    "number": 16,
	    "message": "Franchement c’est pas mal, même si vous pouviez faire un peu mieux… <span>#TeamCUnPeuTricky<span>",
	    "author": "Simon B., 22 ans"
	}];
	
	var characters = exports.characters = [
	
	//Perso 0 : Luke Skywalker
	
	{
	
	    "match": 0,
	    "number": "0",
	    "name": "Luke Skywalker",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	    "height": "172",
	    "weight": "77",
	    "birth": "19 BBY",
	    "faction": "gentil",
	    "species": "Humaine",
	    "gender": "Homme",
	    "world": "Tatooine",
	    "job": "Héro à temps partiel",
	    "bio": "Mon père est un relou. Aidez-moi.",
	    "relationships": [{
	        "name": "Dark Vador",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
	        "url": "dark.vador"
	    }, {
	        "name": "Leia Organa",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
	        "url": "leia.organa"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }],
	    "preferences": "Tout ceux qui ne portent pas de masques.",
	    "messages": ["Est-ce que la force est avec toi?", "Ok ... Tu vas bien?", "Bof. Mon père est un idiot."]
	
	},
	
	//Perso 1 : C-3PO
	
	{
	
	    "match": 0,
	    "number": "1",
	    "name": "C-3PO",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/c_3po.png",
	    "height": "167",
	    "weight": "75",
	    "birth": "112 BBY",
	    "faction": "gentil",
	    "species": "Droïde",
	    "gender": "Un peu des deux",
	    "world": "Perdu dans la galaxie",
	    "job": "Dans la communication",
	    "bio": "Je maîtrise plus de six millions de formes de communication. Impressionnant non?",
	    "relationships": [{
	        "name": "R2-D2",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/r2_d2.png",
	        "url": "r2.d2"
	    }, {
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }],
	    "preferences": "J'ai une préfèrence pour tout ce qui est métalique. Les clous, les vis...",
	    "messages": []
	
	},
	
	//Perso 2 : R2-D2
	
	{
	
	    "match": 0,
	    "number": "2",
	    "name": "R2-D2",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/r2_d2.png",
	    "height": "96",
	    "weight": "32",
	    "birth": "33 BBY",
	    "faction": "gentil",
	    "species": "Droïde",
	    "gender": "Un peu des deux",
	    "world": "Naboo",
	    "job": "Astromecano",
	    "bio": "Bip-Bip. Bip-Bip",
	    "relationships": [{
	        "name": "C-3PO",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/c_3po.png",
	        "url": "c.3po"
	    }, {
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }],
	    "preferences": "Bip-Bip",
	    "messages": ["Bip-Bip", "Bip-Bip-Bip", "Bip-Bip Bip-Bip"]
	
	},
	
	//Perso 3 : Dark Vador
	
	{
	
	    "match": 0,
	    "number": "3",
	    "name": "Dark Vador",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
	    "height": "202",
	    "weight": "136",
	    "birth": "41.9 BBY",
	    "faction": "mechant",
	    "species": "Humaine",
	    "gender": "Homme",
	    "world": "Yavin IV",
	    "job": "Leader",
	    "bio": "Je suis ton père.",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Leia Organa",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
	        "url": "leia.organa"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }],
	    "preferences": "J'aime semer la terreur autour de moi.",
	    "messages": []
	
	},
	
	//Perso 4 : Leia Organa
	
	{
	
	    "match": 0,
	    "number": "4",
	    "name": "Leia Organa",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
	    "height": "150",
	    "weight": "49",
	    "birth": "19 BBY",
	    "faction": "gentil",
	    "species": "Humaine",
	    "gender": "Femme",
	    "world": "Alderaan",
	    "job": "Princesse",
	    "bio": "J'ai eu une relation avec mon frère, mais ne dites rien à personne.",
	    "relationships": [{
	        "name": "Dark Vador",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
	        "url": "dark.vador"
	    }, {
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Han Solo",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/han_solo.png",
	        "url": "han.solo"
	    }],
	    "preferences": "L'inceste...",
	    "messages": []
	
	},
	
	//Perso 5 : Owen Lars
	
	{
	
	    "match": 0,
	    "number": "5",
	    "name": "Owen Lars",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/owen_lars.png",
	    "height": "178",
	    "weight": "120",
	    "birth": "52 BBY",
	    "faction": "gentil",
	    "species": "Humaine",
	    "gender": "Homme",
	    "world": "Tatooine",
	    "job": "Fermier",
	    "bio": "Mon demi-frère est une horrible personne.",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Beru Whitesun Lars",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/beru_whitesun_lars.png",
	        "url": "beru.whitesun.lars"
	    }, {
	        "name": "Anakin Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
	        "url": "anakin.skywalker"
	    }],
	    "preferences": "J'aime revenir de parmis les morts.",
	    "messages": []
	
	},
	
	//Perso 6 : Beru Whitesun Lars
	
	{
	
	    "match": 0,
	    "number": "6",
	    "name": "Beru Whitesun Lars",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/beru_whitesun_lars.png",
	    "height": "165",
	    "weight": "75",
	    "birth": "47 BBY",
	    "faction": "gentil",
	    "species": "Humaine",
	    "gender": "Femme",
	    "world": "Tatooine",
	    "job": "Fermière",
	    "bio": "Ne dites pas à mon mari que je suis sur STARLOVERS.",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Owen Lars",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/owen_lars.png",
	        "url": "owen.lars"
	    }, {
	        "name": "Anakin Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
	        "url": "anakin.skywalker"
	    }],
	    "preferences": "Les rencontres extraconjugales.",
	    "messages": []
	
	},
	
	//Perso 7 : R5-D4
	
	{
	
	    "match": 0,
	    "number": "7",
	    "name": "R5-D4",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/r5_d4.png",
	    "height": "97",
	    "weight": "32",
	    "birth": "C'est une bonne question",
	    "faction": "gentil",
	    "species": "Droïde",
	    "gender": "Un peu des deux",
	    "world": "Tatooine",
	    "job": "Astromecano",
	    "bio": "Bip-Bip",
	    "relationships": [{
	        "name": "R2-D2",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/r2_d2.png",
	        "url": "r2.d2"
	    }, {
	        "name": "C-3PO",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/c_3po.png",
	        "url": "c.3po"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }],
	    "preferences": "Bip-Bip",
	    "messages": []
	
	},
	
	//Perso 8 : Biggs Darklighter
	
	{
	
	    "match": 0,
	    "number": "8",
	    "name": "Biggs Darklighter",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/biggs_darklighter.png",
	    "height": "183",
	    "weight": "84",
	    "birth": "24 BBY",
	    "faction": "mechant",
	    "species": "Humaine",
	    "gender": "Homme",
	    "world": "Tatooine",
	    "job": "Pilote",
	    "bio": "Toujours la tête dans les étoiles, à toi de venir y décrocher mon coeur.",
	    "relationships": [{
	        "name": "C-3PO",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/c_3po.png",
	        "url": "c.3po"
	    }, {
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }],
	    "preferences": "Tout ce qui vole.",
	    "messages": []
	
	},
	
	//Perso 9 : Obi-Wan Kenobi
	
	{
	
	    "match": 0,
	    "number": "9",
	    "name": "Obi-Wan Kenobi",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	    "height": "182",
	    "weight": "77",
	    "birth": "57 BBY",
	    "faction": "gentil",
	    "species": "Humaine",
	    "gender": "Homme",
	    "world": "Stewjon",
	    "job": "Former les jeunes",
	    "bio": "Si j'avais su ... Hé bien j'aurai réfléchi à deux fois.",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Owen Lars",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/owen_lars.png",
	        "url": "owen.lars"
	    }, {
	        "name": "Anakin Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
	        "url": "anakin.skywalker"
	    }],
	    "preferences": "Réfléchir.",
	    "messages": []
	
	},
	
	//Perso 10 : Anakin Skywalker
	
	{
	
	    "match": 0,
	    "number": "10",
	    "name": "Anakin Skywalker",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
	    "height": "188",
	    "weight": "84",
	    "birth": "41.9 BBY",
	    "faction": "gentil",
	    "species": "Humaine",
	    "gender": "Homme",
	    "world": "Tatooine",
	    "job": "Jedi",
	    "bio": "J'ai deux profils sur ce site mais faut pas le dire c'est interdis dans les CGU lol.",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Leia Organa",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
	        "url": "leia.organa"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }],
	    "preferences": "Les soirées déguisées pour porter des masques.",
	    "messages": []
	
	},
	
	//Perso 11 : Wilhuff Tarkin
	
	{
	
	    "match": 0,
	    "number": "11",
	    "name": "Wilhuff Tarkin",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/wilhuff_tarkin.png",
	    "height": "180",
	    "weight": "Je n'ai plus de pèse-personne chez moi.",
	    "birth": "64 BBY",
	    "faction": "mechant",
	    "species": "Humaine",
	    "gender": "Homme",
	    "world": "Eriadu",
	    "job": "Gouverneur",
	    "bio": "À toute foule de manifestants, il y a réponse adaptée.",
	    "relationships": [{
	        "name": "Dark Vador",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
	        "url": "dark.vador"
	    }, {
	        "name": "Leia Organa",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
	        "url": "leia.organa"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }],
	    "preferences": "Faire régner l'ordre.",
	    "messages": []
	
	},
	
	//Perso 12 : Chewbacca
	
	{
	
	    "match": 0,
	    "number": "12",
	    "name": "Chewbacca",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/chewbacca.png",
	    "height": "228",
	    "weight": "112",
	    "birth": "200 BBY",
	    "faction": "gentil",
	    "species": "Wookiee",
	    "gender": "Homme",
	    "world": "Kashyyyk",
	    "job": "Coiffeur",
	    "bio": "BRRRRR.",
	    "relationships": [{
	        "name": "Leia Organa",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
	        "url": "leia.organa"
	    }, {
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Han Solo",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/han_solo.png",
	        "url": "han.solo"
	    }],
	    "preferences": "BRRRRR",
	    "messages": []
	
	},
	
	//Perso 13 : Han Solo
	
	{
	
	    "match": 0,
	    "number": "13",
	    "name": "Han Solo",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/han_solo.png",
	    "height": "180",
	    "weight": "80",
	    "birth": "29 BBY",
	    "faction": "gentil",
	    "species": "Humaine",
	    "gender": "Homme",
	    "world": "Corellia",
	    "job": "Pilote",
	    "bio": "Toujours proche d'une grosse touffe de poils. Et vous pensez peut être pas à la même chose que moi.",
	    "relationships": [{
	        "name": "Leia Organa",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
	        "url": "leia.organa"
	    }, {
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Chewbacca",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/chewbacca.png",
	        "url": "chewbacca"
	    }],
	    "preferences": "Les soeurs de mes amis.",
	    "messages": []
	
	},
	
	//Perso 14 : Greedo
	
	{
	
	    "match": 0,
	    "number": "14",
	    "name": "Greedo",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/greedo.png",
	    "height": "173",
	    "weight": "74",
	    "birth": "44 BBY",
	    "faction": "mechant",
	    "species": "Rodian",
	    "gender": "Homme",
	    "world": "Rodia",
	    "job": "Chasseur de primes",
	    "bio": "J'ai toujours voulu suivre les traces de mon père. Jabba est un brave type.",
	    "relationships": [{
	        "name": "Han Solo",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/han_solo.png",
	        "url": "han.solo"
	    }, {
	        "name": "Jabba Desilijic Tiure",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/jabba_desilijic_tiure.png",
	        "url": "jabba.desilijic.tiure"
	    }, {
	        "name": "Anakin Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
	        "url": "anakin.skywalker"
	    }],
	    "preferences": "Dès qu'il y a une prime.",
	    "messages": []
	
	},
	
	//Perso 15 : Qui-Gon Jinn
	
	{
	
	    "match": 0,
	    "number": "15",
	    "name": "Qui-Gon Jinn",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/qui_gon_jinn.png",
	    "height": "193",
	    "weight": "89",
	    "birth": "92 BBY",
	    "faction": "gentil",
	    "species": "Humaine",
	    "gender": "Homme",
	    "world": "Perdu dans la galaxie",
	    "job": "Maître Jedi",
	    "bio": "Et dire que j'aurai pu faire éviter le pire...",
	    "relationships": [{
	        "name": "Dooku",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dooku.png",
	        "url": "dooku"
	    }, {
	        "name": "Anakin Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
	        "url": "anakin.skywalker"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }],
	    "preferences": "Fais moi plaisir avec un sabre laser.",
	    "messages": []
	
	},
	
	//Perso 16 : Dooku
	
	{
	
	    "match": 0,
	    "number": "16",
	    "name": "Dooku",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/dooku.png",
	    "height": "193",
	    "weight": "78",
	    "birth": "102 BBY",
	    "faction": "mechant",
	    "species": "Humaine",
	    "gender": "Homme",
	    "world": "Serenno",
	    "job": "Seigneur Sith",
	    "bio": "Yoda m'a tout appris!",
	    "relationships": [{
	        "name": "Qui-Gon Jinn",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/qui_gon_jinn.png",
	        "url": "qui.gon.jinn"
	    }, {
	        "name": "Dark Vador",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
	        "url": "dark.vador"
	    }, {
	        "name": "Yoda",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/yoda.png",
	        "url": "yoda"
	    }],
	    "preferences": "Les choses petites et vertes.",
	    "messages": []
	
	},
	
	//Perso 17 : Nute Gunray
	
	{
	
	    "match": 0,
	    "number": "17",
	    "name": "Nute Gunray",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/nute_gunray.png",
	    "height": "191",
	    "weight": "90",
	    "birth": "Je n'aime pas donner mon âge",
	    "faction": "mechant",
	    "species": "Neimodian",
	    "gender": "Homme",
	    "world": "Cato Neimodia",
	    "job": "Vice-Roi",
	    "bio": "Après 4 procès, ces idiots n'ont toujours pas réussi à me destituer. Thug life.",
	    "relationships": [{
	        "name": "Palpatine",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/palpatine.png",
	        "url": "palpatine"
	    }, {
	        "name": "Dark Vador",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
	        "url": "dark.vador"
	    }, {
	        "name": "Yoda",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/yoda.png",
	        "url": "yoda"
	    }],
	    "preferences": "Le commerce.",
	    "messages": []
	
	},
	
	//Perso 18 : Finis Valorum
	
	{
	
	    "match": 0,
	    "number": "18",
	    "name": "Finis Valorum",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/finis_valorum.png",
	    "height": "170",
	    "weight": "J'ai pris du ventre",
	    "birth": "91 BBY",
	    "faction": "gentil",
	    "species": "Humaine",
	    "gender": "Homme",
	    "world": "Coruscant",
	    "job": "Chancelier Suprême",
	    "bio": "Amidala et Palpatine j'aurai votre peau.",
	    "relationships": [{
	        "name": "Palpatine",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/palpatine.png",
	        "url": "palpatine"
	    }, {
	        "name": "Dark Vador",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
	        "url": "dark.vador"
	    }, {
	        "name": "Padmé Amidala",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
	        "url": "padme.amidala"
	    }],
	    "preferences": "Dominer et être dominé.",
	    "messages": []
	
	},
	
	//Perso 19 : Padmé Amidala
	
	{
	
	    "match": 0,
	    "number": "19",
	    "name": "Padmé Amidala",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
	    "height": "185",
	    "weight": "45",
	    "birth": "46 BBY",
	    "faction": "gentil",
	    "species": "Humaine",
	    "gender": "Femme",
	    "world": "Naboo",
	    "job": "Reine et Sénatrice",
	    "bio": "Il manque un peu de femmes sur ce site de rencontre vous ne trouvez pas?",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Leia Organa",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
	        "url": "leia.organa"
	    }, {
	        "name": "Anakin Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
	        "url": "anakin.skywalker"
	    }],
	    "preferences": "Les relations secrètes.",
	    "messages": []
	
	},
	
	//Perso 20 : Jar Jar Binks
	
	{
	
	    "match": 0,
	    "number": "20",
	    "name": "Jar Jar Binks",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/jar_jar_binks.png",
	    "height": "196",
	    "weight": "66",
	    "birth": "52 BBY",
	    "faction": "gentil",
	    "species": "Gungan",
	    "gender": "Homme",
	    "world": "Naboo",
	    "job": "Général des armées",
	    "bio": "Je suis ce que l'on pourrait appeler un boulet. Mais je fais très bien à manger.",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Leia Organa",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
	        "url": "leia.organa"
	    }, {
	        "name": "Padmé Amidala",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
	        "url": "padme.amidala"
	    }],
	    "preferences": "Erm.Vaste question.",
	    "messages": []
	
	},
	
	//Perso 21 : Roos Tarpals
	
	{
	
	    "match": 0,
	    "number": "21",
	    "name": "Roos Tarpals",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/roos_tarpals.png",
	    "height": "224",
	    "weight": "82",
	    "birth": "Secret",
	    "faction": "gentil",
	    "species": "Gungan",
	    "gender": "Homme",
	    "world": "Naboo",
	    "job": "Capitaine",
	    "bio": "Jar Jar est un très bon ami et un excellent général. Notre armée ne serait rien sans lui.",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Jar Jar Binks",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/jar_jar_binks.png",
	        "url": "jar.jar.binks"
	    }, {
	        "name": "Padmé Amidala",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
	        "url": "padme.amidala"
	    }],
	    "preferences": "Jar Jar a répondu quoi?",
	    "messages": []
	
	},
	
	//Perso 22 : Rugor Nass
	
	{
	
	    "match": 0,
	    "number": "22",
	    "name": "Rugor Nass",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/rugor_nass.png",
	    "height": "206",
	    "weight": "J'ai pris du ventre",
	    "birth": "Secret",
	    "faction": "mechant",
	    "species": "Gungan",
	    "gender": "Homme",
	    "world": "Naboo",
	    "job": "Chef des Gungans",
	    "bio": "J'aime bien manger, ça ne se voit pas trop que j'ai arrêté le sport?",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Jar Jar Binks",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/jar_jar_binks.png",
	        "url": "jar.jar.binks"
	    }, {
	        "name": "Padmé Amidala",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
	        "url": "padme.amidala"
	    }],
	    "preferences": "Je déteste les Naboo.",
	    "messages": []
	
	},
	
	//Perso 23 : Ric Olié
	
	{
	
	    "match": 0,
	    "number": "23",
	    "name": "Ric Olié",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/ric_olie.png",
	    "height": "183",
	    "weight": "80",
	    "birth": "Secret",
	    "faction": "gentil",
	    "species": "Humaine",
	    "gender": "Homme",
	    "world": "Naboo",
	    "job": "Pilote",
	    "bio": "Je pense que ton père est un voleur. Je pense l'avoir aperçu dans le ciel en train de voler des étoiles pour les mettre dans tes yeux.",
	    "relationships": [{
	        "name": "Jar Jar Binks",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/jar_jar_binks.png",
	        "url": "jar.jar.binks"
	    }, {
	        "name": "Padmé Amidala",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
	        "url": "padme.amidala"
	    }, {
	        "name": "Quarsh Panaka",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/quarsh_panaka.png",
	        "url": "quarsh.panaka"
	    }],
	    "preferences": "Tout ce qui vole.",
	    "messages": []
	
	},
	
	//Perso 24 : Watto
	
	{
	
	    "match": 0,
	    "number": "24",
	    "name": "Watto",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/watto.png",
	    "height": "137",
	    "weight": "Secret",
	    "birth": "Secret",
	    "faction": "mechant",
	    "species": "Toydarian",
	    "gender": "Homme",
	    "world": "Toydaria",
	    "job": "Commerçant",
	    "bio": "J'achète toute votre vieille ferraille au meilleur prix !",
	    "relationships": [{
	        "name": "Qui-Gon Jinn",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/qui_gon_jinn.png",
	        "url": "qui.gon.jinn"
	    }, {
	        "name": "Anakin Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
	        "url": "anakin.skywalker"
	    }, {
	        "name": "Owen Lars",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/owen_lars.png",
	        "url": "owen.lars"
	    }],
	    "preferences": "Tomber en esclavage.",
	    "messages": []
	
	},
	
	//Perso 25 : Sebulba
	
	{
	
	    "match": 0,
	    "number": "25",
	    "name": "Sebulba",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/sebulba.png",
	    "height": "112",
	    "weight": "40",
	    "birth": "Secret",
	    "faction": "mechant",
	    "species": "Dug",
	    "gender": "Homme",
	    "world": "Malastare",
	    "job": "Pilote de course",
	    "bio": "Anakin n'aurait jamais du gagner cette course ... Il ne le méritait pas !",
	    "relationships": [{
	        "name": "Qui-Gon Jinn",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/qui_gon_jinn.png",
	        "url": "qui.gon.jinn"
	    }, {
	        "name": "Anakin Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
	        "url": "anakin.skywalker"
	    }, {
	        "name": "Watto",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/watto.png",
	        "url": "watto"
	    }],
	    "preferences": "Les courses automobiles et la mauvaise foi.",
	    "messages": []
	
	},
	
	//Perso 26 : Quarsh Panaka
	
	{
	
	    "match": 0,
	    "number": "26",
	    "name": "Quarsh Panaka",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/quarsh_panaka.png",
	    "height": "183",
	    "weight": "Secret",
	    "birth": "62 BBY",
	    "faction": "gentil",
	    "species": "Humaine",
	    "gender": "Homme",
	    "world": "Naboo",
	    "job": "Capitaine",
	    "bio": "Je serai prêt à tout pour défendre ma planète.",
	    "relationships": [{
	        "name": "Ric Olié",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/ric_olie.png",
	        "url": "ric.olie"
	    }, {
	        "name": "Jar Jar Binks",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/jar_jar_binks.png",
	        "url": "jar.jar.binks"
	    }, {
	        "name": "Padmé Amidala",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
	        "url": "padme.amidala"
	    }],
	    "preferences": "Amidala",
	    "messages": []
	
	},
	
	//Perso 27 : Shmi Skywalker
	
	{
	
	    "match": 0,
	    "number": "27",
	    "name": "Shmi Skywalker",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/shmi_skywalker.png",
	    "height": "163",
	    "weight": "Secret",
	    "birth": "72 BBY",
	    "faction": "gentil",
	    "species": "Humaine",
	    "gender": "Femme",
	    "world": "Tatooine",
	    "job": "Fermière",
	    "bio": "J'ai enfanté un monstre, ne m'en tenez pas rigueur !",
	    "relationships": [{
	        "name": "Qui-Gon Jinn",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/qui_gon_jinn.png",
	        "url": "qui.gon.jinn"
	    }, {
	        "name": "Anakin Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
	        "url": "anakin.skywalker"
	    }, {
	        "name": "Watto",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/watto.png",
	        "url": "watto"
	    }],
	    "preferences": "La liberté.",
	    "messages": []
	
	},
	
	//Perso 28 : Dark Maul
	
	{
	
	    "match": 0,
	    "number": "28",
	    "name": "Dark Maul",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_maul.png",
	    "height": "175",
	    "weight": "80",
	    "birth": "54 BBY",
	    "faction": "mechant",
	    "species": "Zabrak",
	    "gender": "Homme",
	    "world": "Dathomir",
	    "job": "Sith",
	    "bio": "Si quelqu'un retrouve la seconde partie de mon corps, qu'il me contacte.",
	    "relationships": [{
	        "name": "Qui-Gon Jinn",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/qui_gon_jinn.png",
	        "url": "qui.gon.jinn"
	    }, {
	        "name": "Dark Vador",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
	        "url": "dark.vador"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }],
	    "preferences": "Les doubles sabres laser.",
	    "messages": []
	
	},
	
	//Perso 29 : Bib Fortuna
	
	{
	
	    "match": 0,
	    "number": "29",
	    "name": "Bib Fortuna",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/bib_fortuna.png",
	    "height": "180",
	    "weight": "Secret",
	    "birth": "Secret",
	    "faction": "mechant",
	    "species": "Twi'lek",
	    "gender": "Homme",
	    "world": "Ryloth",
	    "job": "Criminel",
	    "bio": "Si j'avais des millions, je serai millionnaire, si j'avais des milliards, je serai milliardaire. Mais je n'ai que quelques centimes donc je suis sentimental...",
	    "relationships": [{
	        "name": "Jabba Desilijic Tiure",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/jabba_desilijic_tiure.png",
	        "url": "jabba.desilijic.tiure"
	    }, {
	        "name": "Dark Vador",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
	        "url": "dark.vador"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }],
	    "preferences": "La fortune.",
	    "messages": []
	
	},
	
	//Perso 30 : Aayla Secura
	
	{
	
	    "match": 0,
	    "number": "30",
	    "name": "Aayla Secura",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/aayla_secura.png",
	    "height": "178",
	    "weight": "55",
	    "birth": "48 BBY",
	    "faction": "gentil",
	    "species": "Twi'lek",
	    "gender": "Femme",
	    "world": "Ryloth",
	    "job": "Jedi",
	    "bio": "Ne t'approche pas trop de moi où je n'hésiterai pas à utiliser mon sabre laser.",
	    "relationships": [{
	        "name": "Anakin Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
	        "url": "anakin.skywalker"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }, {
	        "name": "Padmé Amidala",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
	        "url": "padme.amidala"
	    }],
	    "preferences": "Les garçons discrets.",
	    "messages": []
	},
	
	//Perso 31 : Ratts Tyerel
	
	{
	
	    "match": 0,
	    "number": "31",
	    "name": "Ratts Tyerel",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/ratts_tyerel.png",
	    "height": "79",
	    "weight": "15",
	    "birth": "Secret",
	    "faction": "gentil",
	    "species": "Aleena",
	    "gender": "Homme",
	    "world": "Aleen Minor",
	    "job": "Pilote",
	    "bio": "Anakin, si tu vois ce message, tu es un pilote d'exception.",
	    "relationships": [{
	        "name": "Anakin Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
	        "url": "anakin.skywalker"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }, {
	        "name": "Sebulba",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/sebulba.png",
	        "url": "sebulba"
	    }],
	    "preferences": "Revenir de parmis les morts.",
	    "messages": []
	
	},
	
	//Perso 32 : Dud Bolt
	
	{
	
	    "match": 0,
	    "number": "32",
	    "name": "Dud Bolt",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/dud_bolt.png",
	    "height": "94",
	    "weight": "45",
	    "birth": "Secret",
	    "faction": "gentil",
	    "species": "Vulpetereen",
	    "gender": "Homme",
	    "world": "Vulpter",
	    "job": "Pilote",
	    "bio": "Le troisième tour ne m'a pas porté chance.",
	    "relationships": [{
	        "name": "Anakin Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
	        "url": "anakin.skywalker"
	    }, {
	        "name": "Dud Bolt",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dud_bolt.png",
	        "url": "dud.bolt"
	    }, {
	        "name": "Sebulba",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/sebulba.png",
	        "url": "sebulba"
	    }],
	    "preferences": "La course.",
	    "messages": []
	
	},
	
	//Perso 33 : Jabba Desilijic Tiure
	
	{
	
	    "match": 0,
	    "number": "33",
	    "name": "Jabba Desilijic Tiure",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/jabba_desilijic_tiure.png",
	    "height": "175",
	    "mass": "1358",
	    "birth": "600BBY",
	    "gender": "Homme",
	    "world": "Nal Hutta",
	    "faction": "mechant",
	    "species": "Hutt",
	    "job": "Seigneur du crime",
	    "bio": "Pourquoi m'as-tu trahi Leia? </3",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Leia Organa",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
	        "url": "leia.organa"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }],
	    "preferences": "Manger.",
	    "messages": []
	
	},
	
	//Perso 34 : Wedge Antilles
	
	{
	
	    "match": 0,
	    "number": "34",
	    "name": "Wedge Antilles",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/wedge_antilles.png",
	    "height": "170",
	    "mass": "77",
	    "birth": "21BBY",
	    "gender": "Homme",
	    "world": "Corellia",
	    "faction": "gentil",
	    "species": "Humaine",
	    "job": "Pilote",
	    "bio": "Passer de contrebandier à pilote, n'est-ce pas ça l'ascension sociale?",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Leia Organa",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
	        "url": "leia.organa"
	    }, {
	        "name": "Jabba Desilijic Tiure",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/jabba_desilijic_tiure.png",
	        "url": "jabba.desilijic.tiure"
	    }],
	    "preferences": "La contrebande.",
	    "messages": []
	
	},
	
	//Perso 35 : Jek Tono Porkins
	
	{
	
	    "match": 0,
	    "number": "35",
	    "name": "Jek Tono Porkins",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/jek_tono_porkins.png",
	    "height": "180",
	    "mass": "110",
	    "birth": "23BBY",
	    "gender": "Homme",
	    "world": "Bestine IV",
	    "faction": "gentil",
	    "species": "Humaine",
	    "job": "Pilote",
	    "bio": "Je ne voulais pas mourir lors de cette bataille.",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Leia Organa",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
	        "url": "leia.organa"
	    }, {
	        "name": "Wedge Antilles",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/wedge_antilles.png",
	        "url": "wedge.antilles"
	    }],
	    "preferences": "Piloter un avion.",
	    "messages": []
	
	},
	
	//Perso 36 : Yoda
	
	{
	
	    "match": 0,
	    "number": "36",
	    "name": "Yoda",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/yoda.png",
	    "height": "66",
	    "mass": "17",
	    "birth": "896BBY",
	    "gender": "Homme",
	    "world": "Quelque part dans la galaxie",
	    "faction": "gentil",
	    "species": "Yoda",
	    "job": "Maître Jedi",
	    "bio": "Difficile à voir. Toujours en mouvement est l'avenir",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Anakin Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
	        "url": "anakin.skywalker"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }],
	    "preferences": "La philosophie.",
	    "messages": ["La taille importe peu ... Regarde moi : est-ce par la taille que tu peux me juger ? Et bien tu ne le dois pas.", "Quand 900 ans comme moi tu auras, moins en forme tu seras.", "Le côté obscur de la Force, redouter tu dois."]
	
	},
	
	//Perso 37 : Palpatine
	
	{
	
	    "match": 0,
	    "number": "37",
	    "name": "Palpatine",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/palpatine.png",
	    "height": "170",
	    "mass": "75",
	    "birth": "82BBY",
	    "gender": "Homme",
	    "world": "Naboo",
	    "faction": "mechant",
	    "species": "Humaine",
	    "job": "Empereur",
	    "bio": "Je te hais. Je te déteste. Je te maudis.",
	    "relationships": [{
	        "name": "Dark Vador",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
	        "url": "dark.vador"
	    }, {
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }],
	    "preferences": "Les plans libertins.",
	    "messages": []
	
	},
	
	//Perso 38 : Boba Fett
	
	{
	
	    "match": 0,
	    "number": "38",
	    "name": "Boba Fett",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/boba_fett.png",
	    "height": "183",
	    "mass": "78.2",
	    "birth": "31.5BBY",
	    "gender": "Homme",
	    "world": "Kamino",
	    "faction": "mechant",
	    "species": "Humaine",
	    "job": "Chasseur de primes",
	    "bio": "Viens en privé pour connaître mes tarifs.",
	    "relationships": [{
	        "name": "Dark Vador",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
	        "url": "dark.vador"
	    }, {
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Palpatine",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/palpatine.png",
	        "url": "palpatine"
	    }],
	    "preferences": "La chasse.",
	    "messages": []
	
	},
	
	//Perso 39 : IG-88
	
	{
	
	    "match": 0,
	    "number": "39",
	    "name": "IG-88",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/ig_88.png",
	    "height": "200",
	    "mass": "140",
	    "birth": "15BBY",
	    "gender": "Homme",
	    "world": "Quelque part dans la galaxie",
	    "faction": "mechant",
	    "species": "Droïde",
	    "job": "Assassin",
	    "bio": "Mon but : tuer. Tuer tout ce qui bouge.",
	    "relationships": [{
	        "name": "Dark Vador",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
	        "url": "dark.vador"
	    }, {
	        "name": "Boba Fett",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/boba_fett.png",
	        "url": "boba.fett"
	    }, {
	        "name": "Palpatine",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/palpatine.png",
	        "url": "palpatine"
	    }],
	    "preferences": "Le sang.",
	    "messages": []
	
	},
	
	//Perso 40 : Bossk
	
	{
	
	    "match": 0,
	    "number": "40",
	    "name": "Bossk",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/bossk.png",
	    "height": "190",
	    "mass": "113",
	    "birth": "53BBY",
	    "gender": "Homme",
	    "world": "Trandosha",
	    "faction": "mechant",
	    "species": "Trandoshan",
	    "job": "Chasseur de primes",
	    "bio": "Chewbacca tu es bien trop poilu pour moi.",
	    "relationships": [{
	        "name": "IG-88",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/ig_88.png",
	        "url": "ig.88"
	    }, {
	        "name": "Boba Fett",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/boba_fett.png",
	        "url": "boba.fett"
	    }, {
	        "name": "Palpatine",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/palpatine.png",
	        "url": "palpatine"
	    }],
	    "preferences": "La destruction.",
	    "messages": []
	
	},
	
	//Perso 41 : Lando Calrissian
	
	{
	
	    "match": 0,
	    "number": "41",
	    "name": "Lando Calrissian",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/lando_calrissian.png",
	    "height": "177",
	    "mass": "79",
	    "birth": "31BBY",
	    "gender": "Homme",
	    "world": "Socorro",
	    "faction": "gentil",
	    "species": "Humaine",
	    "job": "Général rebelle",
	    "bio": "Mon plaisir? Motiver les gens à rejoindre ma cause. Rejoins-moi.",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Jar Jar Binks",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/jar_jar_binks.png",
	        "url": "jar.jar.binks"
	    }, {
	        "name": "Padmé Amidala",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
	        "url": "padme.amidala"
	    }],
	    "preferences": "L'anarchie.",
	    "messages": []
	
	},
	
	//Perso 42 : Lobot
	
	{
	
	    "match": 0,
	    "number": "42",
	    "name": "Lobot",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/lobot.png",
	    "height": "175",
	    "mass": "79",
	    "birth_year": "37BBY",
	    "gender": "Homme",
	    "world": "Bespin",
	    "faction": "gentil",
	    "species": "Humaine",
	    "job": "Baron Administrateur",
	    "bio": "Non, je ne suis pas intervenant à HETIC.",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Leia Organa",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
	        "url": "leia.organa"
	    }, {
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }],
	    "preferences": "Les tondeuses.",
	    "messages": []
	
	},
	
	//Perso 43 : Ackbar
	
	{
	
	    "match": 0,
	    "number": "43",
	    "name": "Ackbar",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/ackbar.png",
	    "height": "180",
	    "mass": "83",
	    "birth": "41BBY",
	    "gender": "Homme",
	    "world": "Mon Cala",
	    "faction": "mechant",
	    "species": "Mon Calamari",
	    "job": "Amiral",
	    "bio": "Malgré mon apparence, je suis un homme recherchant une relation sérieuse sur ce site.",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Lando Calrissian",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/lando_calrissian.png",
	        "url": "lando.calrissian"
	    }, {
	        "name": "Padmé Amidala",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
	        "url": "padme.amidala"
	    }],
	    "preferences": "Les poulpes.",
	    "messages": []
	
	},
	
	//Perso 44 : Mon Mothma
	
	{
	
	    "match": 0,
	    "number": "44",
	    "name": "Mon Mothma",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/mon_mothma.png",
	    "height": "150",
	    "mass": "61",
	    "birth_year": "48BBY",
	    "gender": "Femme",
	    "world": "Chandrila",
	    "faction": "gentil",
	    "species": "Humaine",
	    "job": "Présidente de la Nouvelle République",
	    "bio": "Femme mature recherchant un jeune homme pour des moments de plaisir.",
	    "relationships": [{
	        "name": "Padmé Amidala",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
	        "url": "padme.amidala"
	    }, {
	        "name": "Anakin Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
	        "url": "anakin.skywalker"
	    }, {
	        "name": "Palpatine",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/palpatine.png",
	        "url": "palpatine"
	    }],
	    "preferences": "Les jeunots.",
	    "messages": []
	
	},
	
	//Perso 45 : Arvel Crynyd
	
	{
	
	    "match": 0,
	    "number": "45",
	    "name": "Arvel Crynyd",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/arvel_crynyd.png",
	    "height": "Secret",
	    "mass": "Secret",
	    "birth": "Secret",
	    "gender": "Homme",
	    "world": "Quelque part dans la galaxie",
	    "faction": "gentil",
	    "species": "Humaine",
	    "job": "Pilote",
	    "bio": "Je me suis sacrifié pour les miens. Ne suis-je pas génial?",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Leia Organa",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
	        "url": "leia.organa"
	    }, {
	        "name": "Jabba Desilijic Tiure",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/jabba_desilijic_tiure.png",
	        "url": "jabba.desilijic.tiure"
	    }],
	    "preferences": "Les soumis.",
	    "messages": []
	
	},
	
	//Perso 46 : Wicket Wystri Warrick
	
	{
	
	    "match": 0,
	    "number": "46",
	    "name": "Wicket Wystri Warrick",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/wicket_wystri_warrick.png",
	    "height": "88",
	    "mass": "20",
	    "birth": "8BBY",
	    "gender": "Homme",
	    "world": "Endor",
	    "faction": "gentil",
	    "species": "Ewok",
	    "job": "Éclaireur",
	    "bio": "Même dans les périodes les plus sombres, je serai toujours là pour te guider.",
	    "relationships": [{
	        "name": "Chewbacca",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/chewbacca.png",
	        "url": "chewbacca"
	    }, {
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Han Solo",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/han_solo.png",
	        "url": "han.solo"
	    }],
	    "preferences": "Les lampes.",
	    "messages": []
	
	},
	
	//Perso 47 : Nien Nunb
	
	{
	
	    "match": 0,
	    "number": "47",
	    "name": "Nien Nunb",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/nien_nunb.png",
	    "height": "160",
	    "mass": "68",
	    "birth": "Secret",
	    "gender": "Homme",
	    "world": "Sullust",
	    "faction": "gentil",
	    "species": "Sullustan",
	    "job": "Pilote",
	    "bio": "Viens prendre les commandes de mon coeur et de mon corps...",
	    "relationships": [{
	        "name": "Gasgano",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/gasgano.png",
	        "url": "gasgano"
	    }, {
	        "name": "Boba Fett",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/boba_fett.png",
	        "url": "boba.fett"
	    }, {
	        "name": "Ben Quadinaros",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/ben_quadinaros.png",
	        "url": "ben.quadinaros"
	    }],
	    "preferences": "Les belles carrosseries.",
	    "messages": []
	
	},
	
	//Perso 48 : Gasgano
	
	{
	
	    "match": 0,
	    "number": "48",
	    "name": "Gasgano",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/gasgano.png",
	    "height": "122",
	    "mass": "Secret",
	    "birth": "Secret",
	    "gender": "Homme",
	    "world": "Troiken",
	    "faction": "gentil",
	    "species": "Xexto",
	    "job": "Pilote",
	    "bio": "Tu sais que tu es belle?",
	    "relationships": [{
	        "name": "Nien Nunb",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/nien_nunb.png",
	        "url": "nien.nunb"
	    }, {
	        "name": "Boba Fett",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/boba_fett.png",
	        "url": "boba.fett"
	    }, {
	        "name": "Ben Quadinaros",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/ben_quadinaros.png",
	        "url": "ben.quadinaros"
	    }],
	    "preferences": "Tout ce qui vole.",
	    "messages": []
	
	},
	
	//Perso 49 : Ben Quadinaros
	
	{
	
	    "match": 0,
	    "number": "49",
	    "name": "Ben Quadinaros",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/ben_quadinaros.png",
	    "height": "163",
	    "mass": "65",
	    "birth": "Secret",
	    "gender": "Homme",
	    "world": "Tund",
	    "faction": "gentil",
	    "species": "Toong",
	    "job": "Pilote",
	    "bio": "Tu veux voir mon bel engin?",
	    "relationships": [{
	        "name": "Gasgano",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/gasgano.png",
	        "url": "gasgano"
	    }, {
	        "name": "Boba Fett",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/boba_fett.png",
	        "url": "boba.fett"
	    }, {
	        "name": "Nien Nunb",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/nien_nunb.png",
	        "url": "nien.nunb"
	    }],
	    "preferences": "Toi.",
	    "messages": []
	
	},
	
	//Perso 50 : Mace Windu
	
	{
	
	    "match": 0,
	    "number": "50",
	    "name": "Mace Windu",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/mace_windu.png",
	    "height": "188",
	    "mass": "84",
	    "birth": "72BBY",
	    "gender": "Homme",
	    "world": "Haruun Kal",
	    "faction": "gentil",
	    "species": "Humaine",
	    "job": "Maître Jedi",
	    "bio": "Sans moi, Anakin n'en serait pas là.",
	    "relationships": [{
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }, {
	        "name": "Anakin Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
	        "url": "anakin.skywalker"
	    }, {
	        "name": "Yoda",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/yoda.png",
	        "url": "yoda"
	    }],
	    "preferences": "Les beaux sabres laser.",
	    "messages": []
	
	},
	
	//Perso 51 : Ki Adi Mundi
	
	{
	
	    "match": 0,
	    "number": "51",
	    "name": "Ki-Adi-Mundi",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/ki_adi_mundi.png",
	    "height": "198",
	    "mass": "82",
	    "birth": "92BBY",
	    "gender": "Homme",
	    "world": "Carea",
	    "faction": "gentil",
	    "species": "Cerean",
	    "job": "Maître Jedi",
	    "bio": "Incline-toi devant tant de style. ",
	    "relationships": [{
	        "name": "Obi-Wan Kenobi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
	        "url": "obi.wan.kenobi"
	    }, {
	        "name": "Mace Windu",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/mace_windu.png",
	        "url": "mace.windu"
	    }, {
	        "name": "Yoda",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/yoda.png",
	        "url": "yoda"
	    }],
	    "preferences": "Les grandes filles.",
	    "messages": []
	
	},
	
	//Perso 52 : Kit Fisto
	
	{
	
	    "match": 0,
	    "number": "52",
	    "name": "Kit Fisto",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/kit_fisto.png",
	    "height": "196",
	    "mass": "87",
	    "birth": "Secret",
	    "gender": "Homme",
	    "world": "Glee Anslem",
	    "faction": "gentil",
	    "species": "Nautolan",
	    "job": "Maître Jedi",
	    "bio": "Ne pas se fier à mon nom. Je ne suis pas fan de ce genre de pratiques.",
	    "relationships": [{
	        "name": "Ki-Adi-Mundi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/ki_adi_mundi.png",
	        "url": "ki.adi.mundi"
	    }, {
	        "name": "Mace Windu",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/mace_windu.png",
	        "url": "mace.windu"
	    }, {
	        "name": "Yoda",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/yoda.png",
	        "url": "yoda"
	    }],
	    "preferences": "Le shopping.",
	    "messages": []
	
	},
	
	//Perso 53 : Eeth Koth
	
	{
	
	    "match": 0,
	    "number": "53",
	    "name": "Eeth Koth",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/eeth_koth.png",
	    "height": "171",
	    "mass": "Secret",
	    "birth": "Secret",
	    "gender": "Homme",
	    "world": "Iridonia",
	    "faction": "gentil",
	    "species": "Zabrak",
	    "job": "Maître Jedi",
	    "bio": "Il y a beaucoup trop de Maître Jedi sur ce site ...",
	    "relationships": [{
	        "name": "Ki-Adi-Mundi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/ki_adi_mundi.png",
	        "url": "ki.adi.mundi"
	    }, {
	        "name": "Kit Fisto",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/kit_fisto.png",
	        "url": "kit.fisto"
	    }, {
	        "name": "Yoda",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/yoda.png",
	        "url": "yoda"
	    }],
	    "preferences": "Le champagne.",
	    "messages": []
	
	},
	
	//Perso 54 : Adi Gallia
	
	{
	
	    "match": 0,
	    "number": "54",
	    "name": "Adi Gallia",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/adi_gallia.png",
	    "height": "184",
	    "mass": "50",
	    "birth": "Secret",
	    "gender": "Femme",
	    "world": "Coruscant",
	    "faction": "gentil",
	    "species": "Tholothian",
	    "job": "Maître Jedi",
	    "bio": "Je suis une belle femme. Si je t'accepte, tu sais à quoi t'attendre.",
	    "relationships": [{
	        "name": "Ki-Adi-Mundi",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/ki_adi_mundi.png",
	        "url": "ki.adi.mundi"
	    }, {
	        "name": "Mace Windu",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/mace_windu.png",
	        "url": "mace.windu"
	    }, {
	        "name": "Eeth Koth",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/eeth_koth.png",
	        "url": "eeth.koth"
	    }],
	    "preferences": "La musique techno.",
	    "messages": []
	
	},
	
	//Perso 55 : Saesee Tiin
	
	{
	
	    "match": 0,
	    "number": "55",
	    "name": "Saesee Tiin",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/saesee_tiin.png",
	    "height": "188",
	    "mass": "Secret",
	    "birth": "Secret",
	    "gender": "Homme",
	    "world": "Iktotch",
	    "faction": "gentil",
	    "species": "Iktotchi",
	    "job": "Maître Jedi",
	    "bio": "Où sont les vaches? Avec leurs cornes plein de charme.",
	    "relationships": [{
	        "name": "Adi Gallia",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/adi_gallia.png",
	        "url": "adi.gallia"
	    }, {
	        "name": "Mace Windu",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/mace_windu.png",
	        "url": "mace.windu"
	    }, {
	        "name": "Eeth Koth",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/eeth_koth.png",
	        "url": "eeth.koth"
	    }],
	    "preferences": "Les vaches.",
	    "messages": []
	
	},
	
	//Perso 56 : Yarael Poof
	
	{
	
	    "match": 0,
	    "number": "56",
	    "name": "Yarael Poof",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/yarael_poof.png",
	    "height": "264",
	    "mass": "Secret",
	    "birth": "Secret",
	    "gender": "Homme",
	    "world": "Quermia",
	    "faction": "gentil",
	    "species": "Quermian",
	    "job": "Maître Jedi",
	    "bio": "Je suis disponible pour toute formation Jedi. Plus d'informations en privé.",
	    "relationships": [{
	        "name": "Adi Gallia",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/adi_gallia.png",
	        "url": "adi.gallia"
	    }, {
	        "name": "Saesee Tiin",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/saesee_tiin.png",
	        "url": "saesee.tiin"
	    }, {
	        "name": "Eeth Koth",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/eeth_koth.png",
	        "url": "eeth.koth"
	    }],
	    "preferences": "Les sabres laser.",
	    "messages": []
	
	},
	
	//Perso 57 : Plo Koon
	
	{
	
	    "match": 0,
	    "number": "57",
	    "name": "Plo Koon",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/plo_koon.png",
	    "height": "188",
	    "mass": "80",
	    "birth": "22BBY",
	    "gender": "Homme",
	    "world": "Dorin",
	    "faction": "gentil",
	    "species": "Kel Dor",
	    "job": "Maître Jedi",
	    "bio": "Un ami m'a inscrit sur ce site, ne me jugez pas.",
	    "relationships": [{
	        "name": "Adi Gallia",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/adi_gallia.png",
	        "url": "adi.gallia"
	    }, {
	        "name": "Saesee Tiin",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/saesee_tiin.png",
	        "url": "saesee.tiin"
	    }, {
	        "name": "Yarael Poof",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/yarael_poof.png",
	        "url": "yarael.poof"
	    }],
	    "preferences": "Le shopping.",
	    "messages": []
	
	},
	
	//Perso 58 : Mas Amedda
	
	{
	
	    "match": 0,
	    "number": "58",
	    "name": "Mas Amedda",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/mas_amedda.png",
	    "height": "196",
	    "mass": "Secret",
	    "birth": "Secret",
	    "gender": "Homme",
	    "world": "Champala",
	    "faction": "gentil",
	    "species": "Chagrian",
	    "job": "Vice-Chancelier",
	    "bio": "Je suis comme un chocolat. Dur à l'exterieur, tendre à l'intérieur.",
	    "relationships": [{
	        "name": "Palpatine",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/palpatine.png",
	        "url": "palpatine"
	    }, {
	        "name": "Finis Valorum",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/finis_valorum.png",
	        "url": "finis.valorum"
	    }, {
	        "name": "Padmé Amidala",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
	        "url": "padme.amidala"
	    }],
	    "preferences": "Me faire dominer.",
	    "messages": []
	
	},
	
	//Perso 59 : Gregar Typho
	
	{
	
	    "match": 0,
	    "number": "59",
	    "name": "Gregar Typho",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/gregar_typho.png",
	    "height": "185",
	    "mass": "85",
	    "birth": "Secret",
	    "gender": "Homme",
	    "world": "Naboo",
	    "faction": "gentil",
	    "species": "Humaine",
	    "job": "Garde du corps",
	    "bio": "Homme sportif mais qui en a dans la tête, n'hésite pas à venir me parler.",
	    "relationships": [{
	        "name": "Cordé",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/corde.png",
	        "url": "corde"
	    }, {
	        "name": "Leia Organa",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
	        "url": "leia.organa"
	    }, {
	        "name": "Padmé Amidala",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
	        "url": "padme.amidala"
	    }],
	    "preferences": "Les gilets-pare-balles.",
	    "messages": []
	
	},
	
	//Perso 60 : Cordé
	
	{
	
	    "match": 0,
	    "number": "60",
	    "name": "Cordé",
	    "photo": "http://charles-mangwa.olympe.in/starlovers/img/corde.png",
	    "height": "157",
	    "mass": "Secret",
	    "birth": "Secret",
	    "gender": "Femme",
	    "world": "Naboo",
	    "faction": "gentil",
	    "species": "Humaine",
	    "job": "Servante",
	    "bio": "C'est tout de même dommage de se faire tuer à la place de quelqu'un.",
	    "relationships": [{
	        "name": "Luke Skywalker",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
	        "url": "luke.skywalker"
	    }, {
	        "name": "Gregar Typho",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/gregar_typho.png",
	        "url": "gregar.typho"
	    }, {
	        "name": "Padmé Amidala",
	        "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
	        "url": "padme.amidala"
	    }],
	    "preferences": "Les soirées déguisées.",
	    "messages": []
	}];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = formGet;
	
	var _underscore = __webpack_require__(1);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _data = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	* Verify and get form inputs values 
	 * 
	 * 
	 */
	
	function formGet() {
	    if (/Home/.test(document.querySelector('body').classList)) {
	        (function () {
	            var form = function form() {
	                var data = {};
	                data.name = document.querySelector('#name').value;
	                data.gender = document.querySelector('#gender').value;
	                data.weight = document.querySelector('#weight').value;
	                data.age = document.querySelector('#age').value;
	                data.species = document.querySelector('#species').value;
	                data.height = document.querySelector('#height').value;
	                data.faction = document.querySelector('#faction').value;
	                if (_underscore2.default.contains(data, '—')) {
	                    alert('Fill in the form!');
	                    document.formHome.action = '#';
	                    return false;
	                } else {
	                    document.formHome.submit();
	                    _data.user.name = document.querySelector('#name').value;
	                    _data.user.gender = document.querySelector('#gender').value;
	                    _data.user.weight = document.querySelector('#weight').value;
	                    _data.user.age = document.querySelector('#age').value;
	                    _data.user.species = document.querySelector('#species').value;
	                    _data.user.height = document.querySelector('#height').value;
	                    _data.user.faction = document.querySelector('#faction').value;
	                    for (var i in _data.characters) {
	                        _data.characters[i].match = 0;
	                    }
	                }
	            };
	
	            var formId = document.querySelector('#form');
	
	            formId.addEventListener('submit', function () {
	                form();
	            });
	        })();
	    }
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mobileCheck;
	/*
	 * Display mobile page if screen.width <- 600px
	 *
	 *
	 */
	function mobileCheck() {
	    if (screen.width <= 600 || screen.height <= 600) {
	        var body = document.querySelector('body'),
	            section = document.createElement('section'),
	            mobile_logo = document.createElement('div'),
	            img = document.createElement('img'),
	            mobile__info = document.createElement('div'),
	            h2 = document.createElement('h2'),
	            p = document.createElement('p');
	
	        body.classList.add('Mobile');
	        section.classList.add('Mobile__container');
	        mobile_logo.classList.add('Mobile__logo');
	        img.classList.add('Mobile__logo__img');
	        img.src = "img/starlovers.svg";
	        img.alt = "StarLovers - May the Love be with you!";
	        h2.classList.add('Mobile__info__oops');
	        p.classList.add('Mobile__info__text');
	        p.innerHTML = 'Ce site n\'est pas adapté aux petites … "résolutions" !</br>Proccure-toi un engin assez grand ! <span>#IYSWIM</span>';
	        mobile_logo.appendChild(img);
	        section.appendChild(img);
	        mobile__info.appendChild(h2);
	        mobile__info.appendChild(p);
	        section.appendChild(mobile__info);
	        while (body.firstChild) {
	            body.removeChild(body.firstChild);
	        }body.appendChild(section);
	    }
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = bullet;
	/*
	 * Display a full-stop each 500ms on Loading page
	 *
	 *
	 *
	 */
	
	function bullet() {
	    if (/Loading/.test(document.querySelector('body').classList)) {
	        var dots = window.setInterval(function () {
	            var wait = document.getElementById("wait");
	            if (wait.innerHTML.length > 2) wait.innerHTML = "";else wait.innerHTML += ".";
	        }, 500);
	    }
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = matcher;
	
	var _underscore = __webpack_require__(1);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _form = __webpack_require__(4);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _data = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function randomNbr(min, max) {
	    return parseInt(Math.floor((max - min) * Math.random()) + min);
	} /*
	   * Stylize elements
	   *
	   * @params {object} styles
	   * @return {this}
	   */
	
	function changeCard(total, iterator) {
	    var user = randomNbr(0, _data.characters.length + 1);
	    document.querySelector('.Match__result__number').innerHTML = ' ' + total;
	    document.querySelector('.Proposal__photo').src = _data.characters[user].photo;
	    document.querySelector('.Proposal__infos__card__number').innerHTML = iterator + 1 + ' / ' + total;
	    document.querySelector('.Proposal__infos__card__name').innerHTML = _data.characters[user].name;
	    document.querySelector('.Proposal__infos__job').innerHTML = _data.characters[user].job;
	    document.querySelector('.Proposal__infos__currentHome').innerHTML = _data.characters[user].world;
	}
	
	function allUsers() {
	    var proposal_container = document.querySelector('.Proposal__container'),
	        finish = document.createElement('div'),
	        img = document.createElement('img'),
	        h2 = document.createElement('h2'),
	        h4 = document.createElement('h4'),
	        a = document.createElement('a');
	
	    finish.classList.add('Proposal__card', 'finish');
	    img.src = "img/chewbacca.svg";
	    img.alt = "StarLovers - May the Love be with you!";
	    a.href = "characters.html";
	    a.innerHTML = "jète un coup d'oeil aux autres utilisateurs !";
	    h2.innerHTML = "C'EST LA LOOSE…";
	    h4.appendChild(a);
	    finish.appendChild(img);
	    finish.appendChild(h2);
	    finish.appendChild(h4);
	    while (proposal_container.firstChild) {
	        proposal_container.removeChild(proposal_container.firstChild);
	    }proposal_container.appendChild(finish);
	}
	
	// <!--             <div class="Proposal__card finish">
	//     <img src="img/chewbacca.svg" alt="">
	//     <h2>C'EST LA LOOSE…</h2>
	//     <h4><a href="characters.html">jète un coup d'oeil aux autres utilisateurs !</a href="characters.html"></h4>
	// </div> -->
	
	function matcher() {
	    if (/Match/.test(document.querySelector('body').classList)) {
	        (function () {
	            var matchs = randomNbr(10, 20),
	                first = randomNbr(0, _data.characters.length + 1),
	                button1 = document.querySelector('.Button.yes'),
	                button2 = document.querySelector('.Button.no'),
	                counter = 0;
	
	            document.querySelector('.Match__result__number').innerHTML = ' ' + matchs;
	            document.querySelector('.Proposal__photo').src = _data.characters[first].photo;
	            document.querySelector('.Proposal__infos__card__number').innerHTML = counter + 1 + ' / ' + matchs;
	            document.querySelector('.Proposal__infos__card__name').innerHTML = _data.characters[first].name;
	            document.querySelector('.Proposal__infos__job').innerHTML = _data.characters[first].job;
	            document.querySelector('.Proposal__infos__currentHome').innerHTML = _data.characters[first].world;
	
	            button1.addEventListener("click", function () {
	                counter++;
	                counter < matchs ? changeCard(matchs, counter) : allUsers();
	            });
	
	            button2.addEventListener("click", function () {
	                counter++;
	                counter < matchs ? changeCard(matchs, counter) : allUsers();
	            });
	        })();
	    }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map