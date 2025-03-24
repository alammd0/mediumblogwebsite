import BlogsCart from "../components/blogs/BlogsCart"

const Blogs = () => {
  return (
    <div>
        <div>
            <BlogsCart 
                name="John Doe"
                title="My Blog Post"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae erat sit amet augue luctus tincidunt. In hac habitasse platea dictumst."
                date="2022-01-01"
            />
            <BlogsCart 
                name="John Doe"
                title="My Blog Post"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae erat sit amet augue luctus tincidunt. In hac habitasse platea dictumst."
                date="2022-01-01"
            />
            <BlogsCart 
                name="John Doe"
                title="My Blog Post"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae erat sit amet augue luctus tincidunt. In hac habitasse platea dictumst."
                date="2022-01-01"
            />
        </div>
    </div>
  )
}

export default Blogs
