(() ->
  begin   = new Date '10-06-2012';  ## The date of beginning
  target  = new Date;               ## Default is Today!
  diff    = parseInt( Math.abs( target - begin ) / 1000 / 60 / 60 /24 );
  code_y  = parseInt( Math.abs( diff / 365 ) );
  code_d  = diff - code_y * 365;
  code_d  = '0' + code_d for i in [code_d.length...3]

  $( '#input_big' ).val( "[#{code_y}#{code_d}]" ); ## Use jQuery to push the code with selector
)()
