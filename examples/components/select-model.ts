export declare enum WidthType {
    px = 'px',
    pt = 'pt'
}

export interface columnsItemProps {
    caption?: string;
    width?: number;
    widthType?: WidthType;
    hide?: boolean;
    uuid: string;
    showFormat?: any;
    customColEntityId?: string;
    express?: any;
    type?: string;
    fieldKey: string;
    label?: string;

    [props: string]: any;
}

export interface searchItemProps {
    caption?: string;
    placeholder?: any;
    fieldKey: string;
    [props: string]: any;
}


export interface DetailPageProps {
    id?: string;
    url: string;
    fullName?: string;
    openMode?: string;
    params?: any[];
    pageInParams?: any[];
    relationGroupId?: string;
}

export interface treeConfigProps {
    id: string;
    treeEntityReferenceColFiled?: string;
    treeEntityName?: string;
    treeEntityReferenceColFiledId?: string;
    searchPlan?: string;
    uuid?: string;
}

export interface IRefConfigsSchema {
    id?: string | null;
    entities?: string[];
    columns: columnsItemProps[];
    treeColumns?: columnsItemProps[];
    detailPage?: string | DetailPageProps;
    treeConfig?: treeConfigProps;
    search?: searchItemProps[];
    treeSearch?: searchItemProps[];
    onlyLastLevel?: boolean;
    version?: string;
    pageSize?: number;
    multiSelect?: boolean
}
