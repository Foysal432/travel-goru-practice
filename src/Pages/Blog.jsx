import { useLoaderData } from "react-router-dom";
import ABlog from "./ABlog";

const Blog = () => {
    const datas =useLoaderData()
    
    return (
      <div className="grid gap-3">
        <h1 className="text-center text-xl font-bold">Stay in Cox’s Bazar</h1>
        {
            datas.map(data=><ABlog data={data}></ABlog>)
        }
      </div>
    );
};

export default Blog;