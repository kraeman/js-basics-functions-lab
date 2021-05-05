const distanceFromHqInBlocks = (n) => {
    return Math.abs(42 - n)
}

const distanceFromHqInFeet = (b) => {
   return (distanceFromHqInBlocks(b) * 264)
}

const distanceTravelledInFeet = (s, f) => {
    return Math.abs(distanceFromHqInFeet(s) - distanceFromHqInFeet(f))
}

const calculatesFarePrice = (s, f) => {
    const thing = distanceTravelledInFeet(s, f)

    if (thing <= 400) {
        return 0
    } else if (thing < 2000) { 
        return parseFloat((((thing * .02) - 8).toFixed(2)))
    } else if (thing > 2000 && thing < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}