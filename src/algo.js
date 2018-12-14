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

const admission = {
    agh: {
        gpa: agh.admission.gpa.min,
        mark: agh.admission.mark.min,
        toeic: agh.admission.toeic.min,
        budget: agh.prices.total_price
    },
    cape: {
        gpa: cape.admission.gpa.min,
        mark: cape.admission.mark.min,
        toeic: cape.admission.toeic.min,
        budget: cape.prices.total_price
    },
    concordia: {
        gpa: concordia.admission.gpa.min,
        mark: concordia.admission.mark.min,
        toeic: concordia.admission.toeic.min,
        budget: concordia.prices.total_price
    },
    cork: {
        gpa: cork.admission.gpa.min,
        mark: cork.admission.mark.min,
        toeic: cork.admission.toeic.min,
        budget: cork.prices.total_price
    },
    coventry: {
        gpa: coventry.admission.gpa.min,
        mark: coventry.admission.mark.min,
        toeic: coventry.admission.toeic.min,
        budget: coventry.prices.total_price
    },
    curtin: {
        gpa: curtin.admission.gpa.min,
        mark: curtin.admission.mark.min,
        toeic: curtin.admission.toeic.min,
        budget: curtin.prices.total_price
    },
    kaist: {
        gpa: kaist.admission.gpa.min,
        mark: kaist.admission.mark.min,
        toeic: kaist.admission.toeic.min,
        budget: kaist.prices.total_price
    },
    malaysia: {
        gpa: malaysia.admission.gpa.min,
        mark: malaysia.admission.mark.min,
        toeic: malaysia.admission.toeic.min,
        budget: malaysia.prices.total_price
    },
    manipal: {
        gpa: manipal.admission.gpa.min,
        mark: manipal.admission.mark.min,
        toeic: manipal.admission.toeic.min,
        budget: manipal.prices.total_price
    },
    nanyang: {
        gpa: nanyang.admission.gpa.min,
        mark: nanyang.admission.mark.min,
        toeic: nanyang.admission.toeic.min,
        budget: nanyang.prices.total_price
    },
    staffordshire: {
        gpa: staffordshire.admission.gpa.min,
        mark: staffordshire.admission.mark.min,
        toeic: staffordshire.admission.toeic.min,
        budget: staffordshire.prices.total_price
    },
    stonybrook: {
        gpa: stonybrook.admission.gpa.min,
        mark: stonybrook.admission.mark.min,
        toeic: stonybrook.admission.toeic.min,
        budget: stonybrook.prices.total_price
    }
};


function resultOptimisation (form, result) {
    for (uni in result.easy.univ) {
        
    }
}




export default function findDest (form) {
    console.log(agh);
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
