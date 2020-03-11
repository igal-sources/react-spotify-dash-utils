export const camelCase = str => {
  // Split the string at all space characters
  return (
    str
      .split(" ")
      // get rid of any extra spaces using trim
      .map(a => a.trim())
      // Convert first char to upper case for each word
      .map(a => a[0].toUpperCase() + a.substring(1))
      // Join all the strings back together
      .join("")
  );
};
