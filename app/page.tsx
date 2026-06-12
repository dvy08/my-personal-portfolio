import Header from "../components/Header";
import ProjectItem from "../components/ProjectItem";
import About from "../components/About";
import Message from "@/components/Message";
import Footer from "@/components/Footer";
import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/data/projects.json', 'utf8');
  const data = JSON.parse(file);
  const isEmpty = data[0].name == "None" ? true : false;

  return (
   <>
    <div id="cont-pan"> 
      <aside id="side-pan">
        <Header/>
      </aside>
    
    
    <main>
      <About/>
      <h2 id="projects">Projects</h2>
      {isEmpty ? <Message/> : <ProjectItem/>}
      <Footer/>
    </main>
    </div>
    </>
  );
}
