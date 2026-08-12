//Problem-01: Student Introduction Generator
function studentIntroduction(student) {

    if(typeof student !== "object" ||
        student === null ||
        !("name" in student) ||
        !("age" in student) ||
        !("course" in student)){
            
        return "Invalid";
        
    }else{
        
        return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
    }
}

//Problem-02: Active User Filter
function filterActiveUsers(users) {

    if(!Array.isArray(users) || users.length === 0){
        return "Invalid";
    }

    for(let user of users) {
        if(
            typeof user !== "object" ||
            user === null ||
            !("isActive" in user)
        ) {
            return "Invalid";
        }
    }
    
    const active_user = users.filter((user)=>{
        if(user.isActive === true){
            return true;
        }
    })

    return active_user;
}

//Problem-03: Trending Hashtag Counter
function countHashtags(caption) {

    if(typeof caption !== "string"){
        return "Invalid";
    }

    const words = caption.split(" ");

    let hashtag_count = 0;
    let longest_tag = "";

    for(let word of words){

        if(word.startsWith("#")){

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

//Problem-04: Bonus Score Calculator
function bonusScore(scores) {

    if(!Array.isArray(scores) || scores.length === 0) {
        return "Invalid";
    }

    for(let score of scores) {
        if (typeof score !== "number"){
            return "Invalid";
        }
    }

    const update_score = scores.map(score => score + 10);

    const total_score = update_score.reduce((acc, cur) => acc + cur, 0);

    return total_score;
}



//Problem-05: Debugging Challenge - AI Leaderboard Generator
function generateLeaderboard(students) {

    if (!Array.isArray(students) || students.length === 0) {
        return "Invalid";
    }

    for (let student of students){
        if(
            typeof student !== "object" ||
            student === null ||
            !("name" in student) ||
            !("score" in student) ||
            typeof student.name !== "string" ||
            typeof student.score !== "number"
        ) {
            return "Invalid";
        }
    }

    const qualified = students.filter(student =>{
        return student.score >= 70;
    });

    const names = qualified.map(student =>{
        return student.name.toUpperCase();
    });

    return names.slice(0, 3);
}


