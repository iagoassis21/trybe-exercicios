function encode(stringVowels) {

  for ( i of stringVowels)

  return  stringVowels.replace(/[0]/g, '1')
                      .replace(/[1]/g, '2')
                      .replace(/ /g, '3')
                      .replace(/ /g, '4')
                      .replace(/ /g, '5')      
                      }
                      const vowels = ['a', 'e', 'i', 'o', 'u'];         
                      console.log(encode(`${vowels}`))

module.exports = encode;