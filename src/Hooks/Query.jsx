import { useQuery } from '@tanstack/react-query';


const Query = () => {
    const {data,isLoading,isFetching,refetch} = useQuery({

        queryKey: ["newsall"],
        queryFn: async () => {
    
            const data = await fetch('https://blogsph-server.vercel.app/blogs')
            return await data.json()
        }
     })
    
    
        return {data,isFetching,isLoading,refetch}
};

export default Query;