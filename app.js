(function() {
  var begin, code_d, code_y, diff, i, target, _i, _ref;
  begin = new Date('10-06-2012');
  target = new Date;
  diff = parseInt(Math.abs(target - begin) / 1000 / 60 / 60 / 24);
  code_y = parseInt(Math.abs(diff / 365));
  code_d = diff - code_y * 365;
  for (i = _i = _ref = code_d.length; _ref <= 3 ? _i < 3 : _i > 3; i = _ref <= 3 ? ++_i : --_i) {
    code_d = '0' + code_d;
  }
  return $('#input_big').val("[" + code_y + code_d + "]");
})();