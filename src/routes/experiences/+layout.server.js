import {jobExperiences} from './experiences.js'

export function load() {

    return {
        experiencesData: jobExperiences.map((experience) => ({
            slug: experience.company,
            title: experience.job_title,
            img: experience.image,
            tenure: experience.tenure
        }))
    }
}