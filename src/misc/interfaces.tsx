export interface IResultList {
    amount: number,
    items: IResult[]
}

export interface IResult {
    xml: string,
    origPlace: string,
    origDate: string,
    title: string
}

export interface ISearchStruc {
    page: number
    sort: string
}
