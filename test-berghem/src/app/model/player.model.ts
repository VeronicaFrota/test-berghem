
export class Player {
    tag: string
    name: string
    townHallLevel: number
    townHallWeaponLevel: number
    expLevel: number
    trophies: number
    bestTrophies: number
    warStars: number
    attackWins: number
    defenseWins: number
    builderHallLevel: number
    versusTrophies: number
    bestVersusTrophies: number
    versusBattleWins: number
    role: string
    donations: number
    donationsReceived: number
    clan: {
        tag: string
        name: string
        clanLevel: number
        badgeUrls: {
            small: string
            large: string
            medium: string
        }
    }
    league: {
        id: number
        name: string
        iconUrls: {
            small: string
            tiny: string
            medium: string
        }
    }
    achievements: [
        {
            name: string
            stars: number
            value: number
            target: number
            info: string
            completionInfo: string
            village: string
        }
    ]
    versusBattleWinCount: number
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
    troops: [
        {
            name: string
            level: number
            maxLevel: number
            village: string
        }
    ]
    heroes: [
        {
            name: string
            level: number
            maxLevel: number
            village: string
        }
    ]
    spells: [
        {
            name: string
            level : number
            maxLevel : number
            village : string
        }
    ]
}






