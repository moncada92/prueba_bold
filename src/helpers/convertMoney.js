export const convertMoney = (value) => {


  let finalString = ''
  const valueString = value.toString();


  if(valueString.length > 6){
    finalString = [
      valueString.slice(0,valueString.length -6),
      "'",
      valueString.slice(0, valueString.length -3),
      ".",
      valueString.slice(valueString.length -3, valueString.length),
      ].join('')
  }
  else if(valueString.length > 3){
    finalString = [
      valueString.slice(0,valueString.length -3),
      ".",
      valueString.slice(valueString.length -3, valueString.length),
      ].join('')
  }

  return finalString
}