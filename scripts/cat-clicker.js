var count = 0;
var count2 = 0;
console.log(count);

$('img#kitten').on('click', function() {
  count++;
  $('#countContain h2').remove();
  $('#countContain').append('<h2 id="numDisp">Click Count: ' + count + '</h2>');
  console.log(count);
});


$('img#cat').on('click', function() {
  count2++;
  $('#countContain2 h2').remove();
  $('#countContain2').append('<h2 id="numDisp">Click Count: ' + count2 + '</h2>');
  console.log(count2);
});
//$('#countContain').append(count);