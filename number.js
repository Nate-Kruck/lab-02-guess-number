export function compareNumbers(player, computer) {
    
    if (player === computer) {
        return 0;
    
    } else if (player < computer) {
        return -1;
    
    } else if (player > computer) {
        return 1;
    
    } 
}

export function convertStrings(result) {
    if (result === 0) return 'You win';
    if (result === -1) return 'Too low';
    if (result === 1) return 'Too high';
}