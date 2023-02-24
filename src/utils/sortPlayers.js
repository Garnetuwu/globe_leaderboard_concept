const sortPlayers = (list, sortName) => {
    return list.sort((a, b) => {
        if (sortName === 'Trader Rating') {
            return b.rating - a.rating
        }
        if (sortName === 'Rank') {
            return a.rank - b.rank
        }

        if (sortName === 'Win Rate') {
            return b.winRate - a.winRate
        }
        if (sortName === 'Profit and Loss') {
            return b.pl - a.pl
        }
        if (sortName === 'Volume Traded') {
            return b.volume - a.volume
        }
    })
}

export default sortPlayers