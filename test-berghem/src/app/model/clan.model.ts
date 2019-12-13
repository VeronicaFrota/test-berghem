export class Clan {
    tag: string
    name: string
    type: string
    description: string
    location: {
        id: number
        name: string
        isCountry: boolean
        countryCode: string
    }
    badgeUrls: {
        small: string
        large: string
        medium: string
    }
    clanLevel: number
    clanPoints: number
    clanVersusPoints: number
    requiredTrophies: number
    warFrequency: string
    warWinStreak: number
    warWins: number
    isWarLogPublic: boolean
    members: number
    memberList: [
        {
            tag: string
            name: string
            role: string
            expLevel: number
            league: {
                id: number
                name: string
                iconUrls: {
                    small: string
                    tiny: string
                    medium: string
                }
            },
            trophies: number
            versusTrophies: number
            clanRank: number
            previousClanRank: number
            donations: number
            donationsReceived: number
        }
    ]
    labels: [
        {
            id: number
            name: string
            iconUrls: {
                small: string
                medium: string
            }
        }
    ]
}



















