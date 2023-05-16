const BlogContent = ({title, content}) =>{
    return(
        <div className="blog-content">
            <h2 className="title">{title}</h2>
            <p className="content">{content}</p>
        </div>
    )
}
export default BlogContent