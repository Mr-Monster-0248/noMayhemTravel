


export default function findDest (form) {
    const limit = new Date(Date.UTC(2019, 5, 1, 0,0,0,0));
    let result = {
        easy: {
            univ: [],
            comments: []
        },
        hard: {
            univ: [],
            issue: []
        }
    };

    if (Date.now() > limit.getTime() && !(form.checked.includes("passport"))) {
        result.easy.push("agh");
        result.hard.issue.push("invalid passport");
    }
    else {
        if (form.section === "Internationale") {
            if (form.moyenne >= 12) {
                if (form.toeic >= 700) {
                    result.easy.univ.push("coventry");
                    result.easy.univ.push("kaist");
                    result.easy.univ.push("curtin");
                    result.easy.univ.push("stonybrook");
                    result.easy.univ.push("cork");
                }
                else {
                    result.easy.univ.push("nanyang");
                    result.hard.univ.push("cork");
                    result.hard.issue.push("teoic level to low");
                }
            }

        }

        if (form.gpa >= 2) {
            result.easy.univ.push("concordia");
            result.easy.univ.push("malaysia");
            result.easy.univ.push("cape");
            result.easy.univ.push("manipal");
            result.easy.univ.push("staffordshire");
        }
        else {
            result.easy.univ.push("cape");
            result.easy.univ.push("manipal");
            result.easy.univ.push("staffordshire");

            result.hard.univ.push("concordia");
            result.hard.univ.push("malaysia");
            result.hard.issue.push("work hard");
        }

        return result;

    }


}
