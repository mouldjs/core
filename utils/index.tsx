//Abc Cba -> abc-cba
export const nameToParam = (name: string): string => {
    return name.toLowerCase().split(' ').join('-')
}
