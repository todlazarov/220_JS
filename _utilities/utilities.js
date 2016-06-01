(function() {

  var findObjs = function(element, props, multiple) {
    var match = multiple ? [] : undefined;

    element.some(function(obj) {
      var all_match = true;

      for (var prop in props) {
        if (!(prop in obj) || obj[prop] !== props[prop]) {
          all_match = false;
        }
      }

      if (all_match) {
        if (multiple) {
          match.push(obj);
        }
        else {
          match = obj;
          return true;
        }
      }
    });

    return match;
  };

  var _ = function(element) {
    u = {
      first: function() {
        return element[0];
      },
      last: function() {
        return element[element.length - 1];
      },
      without: function() {
        var new_arr = [],
            args = Array.prototype.slice.call(arguments);

        element.forEach(function(el) {
          if (args.indexOf(el) === -1) {
            new_arr.push(el);
          }
        });

        return new_arr;
      },
      lastIndexOf: function(search) {
        var idx = -1;

        for (var i = element.length - 1; i >= 0; i--) {
          if (element[i] === search) {
            idx = i;
            break;
          }
        }
        return idx;
      },
      sample: function(qty) {
        var new_arr = [],
            copy = element.slice(),
            get = function() {
              var idx = Math.floor(Math.random() * copy.length);
                  el = copy[idx];
              copy.splice(idx, 1);
              return el;
            };

        if (!qty) { return get(); }
        while(qty) {
          new_arr.push(get());
          qty--;
        }

        return new_arr;
      },
      findWhere: function(props) {
        return findObjs(element, props, false);
      },
      where: function(props) {
        return findObjs(element, props, true);
      },
      pluck: function(query) {
        var vals = [];

        element.forEach(function(obj) {
          if (obj[query]) {
            vals.push(obj[query]);
          }
        });

        return vals;
      },
      keys: function() {
        var keys = [];

        for (var prop in element) {
          keys.push(prop);
        }

        return keys;
      },
      values: function() {
        var vals = [];

        for (var prop in element) {
          vals.push(element[prop]);
        }

        return vals;
      },
      pick: function() {
        var args = [].slice.call(arguments),
            new_obj = {};

        args.forEach(function(prop) {
          if (prop in element) {
            new_obj[prop] = element[prop];
          }
        });

        return new_obj;
      },
      omit: function() {
        var args = [].slice.call(arguments),
            new_obj = [];

        for (var prop in element) {
          if (args.indexOf(prop) === -1) {
            new_obj[prop] = element[prop];
          }
        }

        return new_obj;
      },
      has: function(prop) {
        return {}.hasOwnProperty.call(element, prop);
      }
    };

    (["isElement", "isArray", "isObject", "isFunction", "isBoolean", "isString", "isNumber"]).forEach(function(method) {
      u[method] = function() { _[method].call(u, element); };
    });

    return u;
  };

  _.range = function(start, stop) {
    var new_arr = [];

    if (stop === undefined) {
      for (var i = 0; i < start; i++) {
        new_arr.push(i);
      }
    } else {
      for (var i = start; i < stop; i++) {
        new_arr.push(i);
      }
    }

    return new_arr;
  };

  _.extend = function() {
    var args = [].slice.call(arguments),
        old_obj = args.pop(),
        new_obj = args[args.length - 1];

    for (var prop in old_obj) {
      new_obj[prop] = old_obj[prop];
    }

    return args.length === 1 ? new_obj : _.extend.apply(_, args);
  };

  _.isElement = function(obj) {
    return obj && obj.nodeType === 1;
  };

  _.isArray = Array.isArray || function(obj) {
    return toString.call(obj) === "[object Array]";
  };

  _.isObject = function(obj) {
    var type = typeof obj;

    return type === "function" || type === "object" && !!obj;
  };

  _.isFunction = function(obj) {
    var type = typeof obj;

    return type === "function";
  };

  (["Boolean", "String", "Number"]).forEach(function(method) {
    _["is" + method] = function(obj) {
      return toString.call(obj) === "[object " + method + "]";
    };
  });

  window._ = _;
})();
