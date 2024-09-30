// Text hentet fra "random-article" på wikipedia
// https://en.wikipedia.org/wiki/Lillie_de_Hegermann-Lindencrone

const text =
  `
  Lillie De Hegermann-Lindencrone (1844-1928), born Lillie Greenough in Cambridge, 
  Massachusetts and later known as Lillie Moulton, was a trained singer, and latterly a 
  diplomat's wife noted for publishing in 1913 a book of letters describing 
  The Sunny Side of Diplomatic Life.

  As a child she developed the remarkable voice which later was to make her well known, 
  and when only fifteen years of age her mother took her to London to study under Manuel Garcia. 
  Two years later she became the wife of Charles Moulton, the son of a well-known American banker, 
  who had been a resident in Paris since the days of Louis Philippe. 
  As Madame Charles Moulton she became an appreciated guest at the court of Napoleon III.  
  Upon his fall, in circa 1870, she returned to the United States, where Mr. Moulton died, 
  and a few years afterward she married M. Johan de Hegermann-Lindencrone, 
  at that time Danish Minister to the United States, and in later periods his country's 
  representative at Stockholm, Rome, Paris, Washington and Berlin. She died on 17 March 1928 
  in Copenhagen, where she is buried in the Garrison Cemetery. 
  `

const longestWord = () => {
  const regex = /[.,()]/g
  const wordList = text.replace(regex, " ").split(" ")

  let longestWord = wordList[0]

  wordList.forEach((element) => {
    if (element.length > longestWord.length) {
      longestWord = element
    } 
  })

  return longestWord
};

console.log(longestWord());
