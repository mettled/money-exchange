// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    var H = 50;
  var Q = 25;
  var D = 10;
  var N = 5;
  var P = 1;


  var res = new Object();

  if (currency > 10000){
    res.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
    return res;
  }

  H = ~~(currency/50);
  Q = ~~((currency-50*H)/Q);
  D = ~~((currency-(50*H+25*Q))/D);
  N = ~~((currency-(50*H+25*Q+10*D))/N);
  P = ~~((currency-(50*H+25*Q+10*D+N*5))/P);


  if (H>0)
    res.H = H;
  if (Q>0)
    res.Q = Q;
  if (D>0)
    res.D = D;
  if (N>0)
    res.N = N;
  if (P>0)
    res.P = P;

  return res;



}
