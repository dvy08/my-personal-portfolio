import { promises as fs } from 'fs';
import Image from "next/image";

export default async function ProjectItem(){
    const file = await fs.readFile(process.cwd() + '/data/projects.json', 'utf8');
    const data = JSON.parse(file);

    return (
        <div>
        {data.map((item: any) => (
        <article className="teaser" key={item.link}>
            <div className='teaser-image'>
                <a href="#">
                    <Image src={item.image} alt={item.alt} className='images' width={200} height={200}/>
                </a>
            </div>

            <div className='teaser-body' >
                <p className='item-theme'>{item.theme}</p>
                <h3 className='teaser-heading'>
                    <a href="#">{item.name}</a>
                </h3>
                <div className='teaser-description'>
                    <p>{item.description}</p>
                </div>
                <div className="teaser-tags">
                    <span>{item.tag1}</span> <span>{item.tag2}</span> <span>{item.tag3}</span>
                </div>
            </div>
        </article>))}
        </div>

    );
}