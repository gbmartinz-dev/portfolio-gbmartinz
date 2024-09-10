import { PageIntroduction } from "@/app/components/pages/projects/page-introduction";
import { ProjectsList } from "@/app/components/pages/projects/projects-list";
import { ProjectsPageData } from "@/app/types/page-info";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";

const getPageData = async (): Promise<ProjectsPageData> => {
    const query = `
        query ProjectsQuery {
        projects {
            shortDescription
            slug
            title
            thumbnail {
            url
            }
            technologies {
            name
            }
        }
    }`
    
    return fetchHygraphQuery(
        query,
        60 * 60 * 24 // 24 Horas
    )
}

export default async function Project() {
    const { projects } = await getPageData();
    return (
        <>
            <PageIntroduction />
            <ProjectsList projects={projects} />
        </>
    )
}