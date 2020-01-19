// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, s, num) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        buildMeUp += theWordArray[i];
        if ((i + 1) % 3 === 0) {
            for (let i = 0; i < num; i++) {
            buildMeUp += s
            }
        }
        buildMeUp += " ";
        // Concatenate the new word onto buildMeUp
        console.log(buildMeUp)
        // Print buildMeUp to the console
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "*", 4)