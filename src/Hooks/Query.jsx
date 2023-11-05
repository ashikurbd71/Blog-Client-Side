import { useQuery } from '@tanstack/react-query';


const Query = () => {
    const {data,isLoading,isFetching,refetch} = useQuery({

        queryKey: ["news"],
        queryFn: async () => {
    
            const data = await fetch('http://localhost:5000/blogs')
            return await data.json()
        }
     })
    
    
        return {data,isFetching,isLoading,refetch}
};

export default Query;