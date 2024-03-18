export interface IndustryIdentifier {
    type : string,
    identifier: string | number,
}

export interface BookInfo {
    title: string,
    authors: string[],
    publishedDate: string | number | Date,
    textSnippet: string,
    previewLink: string,
    imageLinks : {
        smallThumbnail: string,
        thumbnail: string, 
    },
}

export interface VolumeInfo {
        title: string,
        subtitle: string,
        authors: string[],
        publisher: string,
        publishedDate: string | number | Date,
        description: string,
        industryIdentifiers: IndustryIdentifier[],
        readingModes: {
            text: boolean | string,
            image: boolean | string
        },
        pageCount: number | string,
        printType: string, 
        categories: string[],
        averageRating: number | string,
        ratingsCount: number | string,
        maturityRating: string,
        allowAnonLogging: boolean,
        contentVersion: string,
        panelizationSummary: {
            containsEpubBubbles: boolean,
            containsImageBubbles: boolean
        },
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string, 
        },
        language: string,
        previewLink: string,
        infoLink: string,
        canonicalVolumeLink: string, 
    
}
export interface BookSearchResult {
    kind: string,
    id: string,
    etag: string,
    selfLink: string,
    volumeInfo: VolumeInfo,
    saleInfo: Object, 
    accessInfo: Object,
    searchInfo: {
        textSnippet: string,
    },
}

export interface APIResponse {
    kind: string,
    totalItems: number,
    items: BookSearchResult[]
}