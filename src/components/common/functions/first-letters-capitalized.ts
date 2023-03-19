export default function capitalizeFirstLetters(text: string, splitCharacter: string, joinCharacter: string) {
    const words = text.split(splitCharacter);

    return words.map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(joinCharacter)
}
