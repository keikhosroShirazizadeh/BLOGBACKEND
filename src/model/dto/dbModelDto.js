export class Post{
    constructor(name,title,category,description,content,author,createdDate,lastUpdate) {
        this.title=title
        this.name=name
        this.category=category
        this.description=description
        this.content=content
        this.author=author
        this.createDate=createdDate
        this.lastUpdate=lastUpdate

    }
}
export class Media{
    constructor(name,format,title,description,tags,path) {
        this.name=name
        this.format=format
        this.title=title
        this.description=description
        this.tags=tags
        this.path=path
    }
}