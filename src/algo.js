import agh from './../public/country/agh'
import cape from './../public/country/cape'
import concordia from './../public/country/concordia'
import cork from './../public/country/cork'
import coventry from './../public/country/coventry'
import curtin from './../public/country/curtin'
import kaist from './../public/country/kaist'
import malaysia from './../public/country/malaysia'
import manipal from './../public/country/manipal'
import nanyang from './../public/country/nanyang'
import staffordshire from './../public/country/staffordshire'
import stonybrook from './../public/country/stonybrook'







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
            if (form.moyenne > 12) {
                if (form.toeic > 700) {
                    result.easy.univ.push("cork");
                    result.easy.univ.push("coventry");
                    result.easy.univ.push("kaist");
                    result.easy.univ.push("curtin");
                }
                else {
                    result.easy.univ.push("");
                    result.hard.issue.push("teoic level to low");
                    result.hard.univ.push("");
                }
            }

        }

        if (form.gpa > 2) {
            result.easy.univ.push("concordia");
            result.easy.univ.push("malaysia");
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
