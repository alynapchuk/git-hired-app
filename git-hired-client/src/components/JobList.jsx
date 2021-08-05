import Job from "./Job";

function JobList(props) {

    const jobList = props.jobs.map((job, index) => {
        return (
            <Job
                key={index}
                job={job}
                role={job.role}
                company={job.company_name}
                keywords={job.keywords}
                url={job.url}
                date={job.date_posted}
            />
        )
    });

    return (
        <>{jobList}</>
    )
}

export default JobList;