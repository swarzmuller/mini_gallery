export interface GalleryTypes {
    id: string;
    urls: {
        regular: string;
    }
}

export interface GroupsProps {
    groups: Array< GalleryTypes[]> | null;
}