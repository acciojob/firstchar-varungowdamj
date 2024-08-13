function firstChar(text) {
    // Trim leading and trailing spaces, then check if the string is empty
    let trimmedText = text.trim();
    
    // If the trimmed string is not empty, return the first character
    if (trimmedText.length > 0) {
        return trimmedText[0];
    } else {
        return ''; // Return an empty string if no non-space character is found
    }
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));