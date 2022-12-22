export type ProjectLink = {
    title: string;
    address: string;
}
export type Project = {
    name: string;
    shortDescription: string;
    description?: string;
    imgSrc: string;
    links?: Array<ProjectLink>;
}

