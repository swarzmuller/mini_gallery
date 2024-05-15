export interface GalleryTypes {
    id: string;
    slug: string;
    urls: {
        regular: string;
    }
}

export interface GroupsProps {
    groups: Array< GalleryTypes[]> | null;
}