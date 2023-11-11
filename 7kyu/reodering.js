// QUESTION //////////////////////////////
There is a sentence which has a mistake in its ordering.

The part with a capital letter should be the first word.

Please build a function for re-ordering

Examples
>>> re_ordering('ming Yao')
'Yao ming'

>>> re_ordering('Mano donowana')
'Mano donowana'

>>> re_ordering('wario LoBan hello')
'LoBan wario hello'

>>> re_ordering('bull color pig Patrick')
'Patrick bull color pig'
////////////////////////////////////////////////////////////////////////////
// SOLUTION







function reOrdering(text){
    //your code here
    const words = text.split(' ');
    const capitalWord = words.find(word => word[0] === word[0].toUpperCase());
    return [capitalWord, ...words.filter(word => word !== capitalWord)].join(' ');
  }