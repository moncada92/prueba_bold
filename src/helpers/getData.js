export const getData = (data) =>{
  return new Promise((resolve, reject) => {
    if (data.length > 0){
      resolve(data)
    } else {
      reject("error")
    }
  }) 
}