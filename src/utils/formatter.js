export const headerTitles = (data) => {
  return Object.keys(data).map(element => {
    return {
      title: element,
      value: data[element].length
    }
  })
}