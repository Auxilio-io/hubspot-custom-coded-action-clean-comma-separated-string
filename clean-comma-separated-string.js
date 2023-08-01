exports.main = async (event, callback) => {
    function processString(inputString) {
      // Remove duplicated words
      let uniqueWords = [...new Set(inputString.split(", ").map(word => word.replace("_", " ").toLowerCase()))];
  
      // Remove extra comma and filter out empty words
      let processedString = uniqueWords.filter(word => word !== "").join(", ");
  
      // Capitalize first letter of each word
      processedString = processedString.replace(/\b\w/g, char => char.toUpperCase());
  
      return processedString;
    }
  
    const string = event.inputFields.concatenatedList // e.g. "Sales, marketing, Operations, , marketing, , Technology, Information technology, information_technology"
    const cleanString = processString(string) // e.g. "Sales, Marketing, Operations, Technology, Information Technology"
  
    console.log(cleanString); 
  
    callback({
      outputFields: {
        cleanString: cleanString
      }
    });
  }