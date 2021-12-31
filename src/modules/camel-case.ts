export function changeToCamelCase(input: string) {
    const camelCaseName = input.split(" ").map((el: any) => { 
        const inp = [...el]; 
        inp[0] = inp[0].toUpperCase();
        return inp.join("");
    });
    return camelCaseName.join(" ");
}
