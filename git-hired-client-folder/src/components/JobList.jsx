import Job from "./Job";

function JobList(props) {

    const jobList = props.jobs.map((job, index) => {
        return (
            <Job key={index} job={job} role={job.role} company={job.company_name} remote={job.remote} />
        )
    });

    return (
        <>{jobList}</>
    )
}

export default JobList;