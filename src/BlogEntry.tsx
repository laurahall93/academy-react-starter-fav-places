interface BlogEntryProps {
    title: string;
    name: string;
    country: string;
    image: string;
    location: string;
    description: string;
}

function BlogEntry(props: BlogEntryProps ): JSX.Element {
    return(
        <section className="blog-entry">
            <h2>{props.title}</h2>
            <h3>{props.name}</h3>
            <p>{props.country}</p>
            <img className="entry-img"src={props.image} alt="location"/>
            <a href={props.location} target="_blank" rel="noreferrer"  >Click for the location!</a>
            <p>{props.description}</p>

        </section>
    );
}

export default BlogEntry;