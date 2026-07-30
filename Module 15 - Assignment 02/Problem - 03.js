
function calculateAiCost(tokensUsed) {

    if (typeof (tokensUsed) !== "number" || tokensUsed < 0) {
        return "Invalid";
    }

    if (tokensUsed <= 500) {
        return 0;
    }

    let Extra_tokens = tokensUsed - 500;

    let Extra_charge = Math.floor(Extra_tokens / 100);

    return Extra_charge * 5;
}


console.log(calculateAiCost(600));