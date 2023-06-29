import { Url } from "url";

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
        <section>
            <h2>{props.title}</h2>
            <h3>{props.name}</h3>
            <p>{props.country}</p>
            <img src={props.image}/>
            <a href={props.location} target="_blank">Click for the location!</a>
            <p>{props.description}</p>

        </section>
    );
}

export default BlogEntry;