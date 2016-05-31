(function() {
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
      }
    };

    return u;
  };

  _.range = function(start, stop) {
    var new_arr = [];

    if (stop === undefined) {
      for (var i = 0, i < start; i++) {
        new_arr.push(i);
      }
    } else {
      for (var i = start, i < stop; i++) {
        new_arr.push(i);
      }
    }

    return new_arr;
  };

  window._ = _;
})();
