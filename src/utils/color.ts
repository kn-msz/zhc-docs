import type { HsvaColor } from 'colord'
import colord from 'colord'

export const tintColor = (c: string, tint: number) => {
    const color = c.replace('#', '')
    let red = parseInt(color.slice(0, 2), 16)
    let green = parseInt(color.slice(2, 4), 16)
    let blue = parseInt(color.slice(4, 6), 16)

    if (tint === 0) { // when primary color is in its rgb space
        return [red, green, blue].join(',')
    } else {
        red += Math.round(tint * (255 - red))
        green += Math.round(tint * (255 - green))
        blue += Math.round(tint * (255 - blue))
        red = red.toString(16)
        green = green.toString(16)
        blue = blue.toString(16)
        return `#${ red }${ green }${ blue }`
    }
}



const adjustHue = (color: HsvaColor, adjustment: number, isIncrease: boolean): number => {
    let newHue = color.h >= 60 && color.h <= 240
        ? isIncrease ? color.h - 2 * adjustment : color.h + 2 * adjustment
        : isIncrease ? color.h + 2 * adjustment : color.h - 2 * adjustment

    if (newHue < 0) newHue += 360
    if (newHue >= 360) newHue -= 360

    return Math.round(newHue)
}

const adjustSaturation = (color: HsvaColor, adjustment: number, isIncrease: boolean): number => {
    let newSaturation = isIncrease
        ? color.s - 0.16 * adjustment
        : (adjustment === 4 ? color.s + 0.16 : color.s + 0.05 * adjustment)

    newSaturation = Math.min(1, newSaturation)
    if (isIncrease && adjustment === 5 && newSaturation > 0.1) newSaturation = 0.1
    if (newSaturation < 0.06) newSaturation = 0.06

    return Number(newSaturation.toFixed(2))
}

const adjustValue = (color: HsvaColor, adjustment: number, isIncrease: boolean): number => {
    let newValue = isIncrease
        ? color.v + 0.05 * adjustment
        : color.v - 0.15 * adjustment

    return Number(Math.min(1, newValue).toFixed(2))
}


export const colorAdjuster = (color: string, adjustmentLevel: number): string => {
    if (adjustmentLevel === 6) return color

    const isIncrease = adjustmentLevel <= 6
    const hsvColor = colord(color).toHsv()
    const adjustmentAmount = isIncrease ? 6 - adjustmentLevel : adjustmentLevel - 5 - 1

    const adjustedColor = {
        h: adjustHue(hsvColor, adjustmentAmount, isIncrease),
        s: adjustSaturation(hsvColor, adjustmentAmount, isIncrease),
        v: adjustValue(hsvColor, adjustmentAmount, isIncrease)
    }

    return colord(adjustedColor).toHexString().toUpperCase()
}


const installSize = () => {
    let sizeList = [
        {
            name: 'size-0',
            value: 0,
            remark: '尺寸-0'
        }
    ]

    Array(50).fill(0).map((a, index) => {
        sizeList.push({
            name: 'size-'.concat(index + 1),
            value: index + 1,
            remark: `尺寸-${ index + 1 }`,
            invisible: index + 1 > 10
        })
    })

    sizeList.push({
        name: 'size-auto',
        value: '100%',
        remark: '尺寸-自适应',
        invisible: true
    })

    return sizeList
}
