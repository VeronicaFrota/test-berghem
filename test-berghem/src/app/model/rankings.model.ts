export class Ranking {
    items: [
        {
            tag: string
            name: string
            location: {
                id: number
                name: string
                isCountry: boolean
                countryCode: string
            },
            badgeUrls: {
                small: string
                large: string
                medium: string
            },
            clanLevel: number
            members: number
            clanPoints: number
            rank: number
            previousRank: number
        }
    ]
    paging: {
        cursors: {}
    }
}
