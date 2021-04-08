export interface Strings {
    es: Es;
}

export interface Es {
    forum:   Forum;
    post:    Post;
    filter:  Filter;
    newPost: NewPost;
}

export interface Filter {
    title:        string;
    description:  string;
    courseCheck:  string;
    docentCheck:  string;
    selectCourse: string;
    selectDocent: string;
}

export interface Forum {
    header: Header;
    recent: Recent;
}

export interface Header {
    title:       string;
    description: string;
    search:      Search;
}

export interface Search {
    placeholder: string;
}

export interface Recent {
    title:       string;
    description: string;
}

export interface NewPost {
    title:       string;
    description: string;
    form:        Form;
    viewer:      Recent;
}

export interface Form {
    user:    string;
    inputs:  string[];
    labels:  string[];
    footer:  string;
    buttons: string[];
}

export interface Post {
    date: string;
}
