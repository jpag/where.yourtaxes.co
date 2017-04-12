function addCommas(num) {
	// return String(num).replace(/(.)(?=(\d{3})+$)/g,'$1,')
	return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}

function formatThousandsNoRounding(n, dp){
  var e = '', s = e+n, l = s.length, b = n < 0 ? 1 : 0,
      i = s.lastIndexOf('.'), j = i == -1 ? l : i,
      r = e, d = s.substr(j+1, dp);
  while ( (j-=3) > b ) { r = ',' + s.substr(j, 3) + r; }
  return s.substr(0, j + 3) + r +
    (dp ? '.' + d + ( d.length < dp ?
        ('00000').substr(0, dp - d.length):e):e);
};


module.exports = addCommas;
