export default function test (form) {
    const limit = new Date(Date.UTC(2019, 5, 1, 0,0,0,0));
    let result = {
        easy: [],
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
            if (form.moyenne > 12) {
                if (form.toeic > 700) {
                    result.easy.push("");
                }
                else {
                    result.easy.push("");
                    result.hard.issue.push("teoic level to low");
                    result.hard.univ.push("");
                }
            }

        }

        if (form.gpa > 2) {
            result.easy.push("concordia");
            result.easy.push("malaysia");
        }
        else {
            result.easy.push("cape");
            result.easy.push("manipal");
            result.easy.push("staffordshire");

            result.hard.univ.push("concordia");
            result.hard.univ.push("malaysia");
            result.hard.issue.push("work hard");
        }

        return result;

    }


}
