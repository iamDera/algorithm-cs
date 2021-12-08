function countSentence(text){
    let result = {
      sentenceLength: 0,
      noOfWords: 0,
      vowelCount: 0,
    }
    
    result.sentenceLength = text.length
    
    for(let i = 0; i < text.length; i++){
      if (text[i] == ' ' || text[i] == '.'){
        result.noOfWords += 1
      }
    }
    
    
    let newSentence = Array.from(text.toLowerCase())
    result.vowelCount = newSentence.filter(letter => 'aeiou'.includes(letter)).length
    return result
    
    }

    countSentence('chidera is a woman.')