function countHashtags(caption) {

    if(typeof caption !== "string"){
        return "Invalid";
    }

    const words = caption.split(" "); 
    let hashtag_count = 0;
    let longest_tag = "";

    for(let word of words){

        if(word.startsWith("#") && word.length > 1){

            hashtag_count++;

            const tag = word.slice(1); 

            if(tag.length > longest_tag.length){
                longest_tag = tag;
            }

        }

    }

    return {
        hashtagCount: hashtag_count,
        longestTag: longest_tag
    };
}

console.log(countHashtags("Loving this weather #sunny #vibes #weekend"));