
// const parseCurrency = (value: number): string => {
//     return value.toLocaleString("es-PE", {
//      style: "currency",
//      currency: "SOL",
//     });
//    };


export default function parseCurrency(value: number):string{
    return value.toLocaleString("es-PE", {
        style: "currency",
        currency: "SOL",
       });
}