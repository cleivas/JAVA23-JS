// Användar input: du vet inte om användaren har lagt till space av misstag
const testString = "    Det här är     en test string.   ";
console.log( testString )

const trimmedString = testString.trim();
console.log( trimmedString )

// byt ut space mot /
console.log( trimmedString.replaceAll(' ', '/') );

// Se till så att det inte finns några dubbelspace
console.log( trimmedString.replaceAll('  ', '') );

