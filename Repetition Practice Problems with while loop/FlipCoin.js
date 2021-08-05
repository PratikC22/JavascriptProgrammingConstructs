let MAX_COUNT = 11;
let count_Head = 1;
let count_Tail = 1;
let i = 1;
let j = 1;

while ((i <= MAX_COUNT) && (j <= MAX_COUNT)) {
    let randomNumber = Math.floor(Math.random() * 2);

    if (randomNumber == 0) {
        console.log("Heads");
        while (count_Head <= MAX_COUNT) {
            i++;
            count_Head++;
            break;
        }
    }
    else {
        console.log("Tails");
        while (count_Tail <= MAX_COUNT) {
            j++;
            count_Tail++;
            break;
        }
    }
}
