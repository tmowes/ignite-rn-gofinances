export const formatName = (name: string) => {
  const splitName = name.split(' ')
  if (splitName.length > 2) {
    return `${splitName[0]} ${splitName[1]}`
  }
  return name
}
