export const headerTitles = (data) => {
  return Object.keys(data).map(element => {
    return {
      tabKey: element,
      title: element.replace(/([a-z])([A-Z])/g, '$1 $2'),
      value: data[element].length
    }
  })
}