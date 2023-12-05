export interface SectionConfig {
    title: string;
    description?: string;
    elements: SectionElement[]
}

export interface SectionElement {
    name: string;
    description: string;
    image: string;
}
