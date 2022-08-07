import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      
      <Header />
    
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
          author="Deyvson Aguiar"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet maxime rem molestiae quisquam quaerat, delectus aliquid impedit laborum. Sunt dignissimos saepe eum laboriosam doloremque fuga voluptatibus dicta vitae est quisquam." 
          />
          <Post
          author="Ruth Almeida"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet maxime rem molestiae quisquam quaerat, delectus aliquid impedit laborum. Sunt dignissimos saepe eum laboriosam doloremque." 
          />
        </main>
      </div>
      
    </div>
  )
}

