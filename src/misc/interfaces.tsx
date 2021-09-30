export interface IResultList {
    amount: number,
    pages: number,
    items: IResult[]
}

export interface IResult {
    xml: string,
    origPlace: string,
    origDate: string,
    title: string,
    shelfmark: string,
    itemAuthor: string,
    itemTitle: string,
    layout: string,
    measure: string,
    summary: string,
    textLang: ILanguage[]
}


export interface ISearchObject {
    searchvalues: ISearchValues[] | string,
    page: number,
    page_length: number,
    sortorder: string
}

export interface ILanguage {
    language: string
}

export interface ISortOrder {
    (data: string): void
}

export interface ISendPage {
    (data: number): void
}

export interface IFacetValues {
    key: string,
    doc_count: number
}

export interface IFacetCandidate {
    facet: string,
    field: string,
    candidate: string
}

export interface ISendCandidate {
    (data: IFacetCandidate):void
}

export interface ISearchValues {
    name: string,
    field: string,
    values: string[]
}

export interface IResetFacets {
    (): void
}

export interface IRemoveFacet {
    (field: string, value: string): void
}

export interface IDetailView {
    (value: boolean, result: IResult): void
}
