export default function test (form) {
    const limit = new Date(Date.UTC(2019, 5, 1, 0,0,0,0));
    let result = {
        easy: [],
        hard: {
            country: [],
            issue: []
        }
    };

    if (Date.now() > limit.getTime() && !(form.checked.includes("passport"))) {
        result.easy.push("agh")
        result.hard.issue.push("invalid passport")
    }
    else {
        if (form.section === "Internationale") {
            if (form.moyenne > 12) {
                if (form.toeic > 700) {
                    result.easy.push("")
                }
                else {
                    result.easy.push("")
                }
            }

        }

    }


}
