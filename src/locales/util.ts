export const NameSpaceWrap = (nameSpace: string, obj: any) => {
  let temp: any = {}
  Object.keys(obj).forEach((val: any) => {
    temp[`${nameSpace}.${val}`] = obj[val]
  })
  return temp
}
