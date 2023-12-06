//データ型に関するモジュール

export type User= {//自分で肩を作る(カスタムタイプ)
    id: number;
    name: {
        first: string,
        last: string,
    },
    email: string,
    isActive: boolean,
}
 


//interfaceでのやり方
// export interface User {//自分で肩を作る(カスタムタイプ)
//     id: number;
//     name: {
//         first: string,
//         last: string,
//     },
//     email: string,
//     isActive: boolean,
// }
    

export type Item ={
    id:number,
    name:string,
    price:number,
}