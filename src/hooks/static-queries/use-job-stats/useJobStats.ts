import { useMemo } from 'react';
import { useJobs } from '..';

export const useJobStats = () => {
    const jobs = useJobs();

    return useMemo(() => {
        const technologies = new Set<string>();
        const languages = new Set<string>();
        const services = new Set<string>();

        console.log(jobs);

        jobs.forEach((job) => {
            job.technologies.forEach((t) => technologies.add(t));
            job.languages.forEach((l) => languages.add(l));
            job.services.forEach((s) => services.add(s));
        });

        return { technologies, languages, services };
    }, [jobs]);
};
