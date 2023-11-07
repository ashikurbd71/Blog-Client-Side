import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const Featuredblog = () => {

    const {data,isLoading,isFetching,refetch} = useQuery({

        queryKey: ["blog"],
        queryFn: async () => {
    
            const data = await fetch('http://localhost:5000/allblogs')
            return await data.json()
        }
     })


     const[blog,setBlog]=useState([])

     useEffect(() => {
    
        const descriptionsWithWordLengths = data?.map(item => ({
          ...item,
          wordCount: item.long_description?.split(' ').length
        }));

        const sortedDescriptions = descriptionsWithWordLengths?.sort((a, b) => b.wordCount - a.wordCount);
    
   
        const top10Descriptions = sortedDescriptions?.slice(0, 10);
    
        setBlog(top10Descriptions);
      }, []);
    
     console.log(data)

     
     const columns =[
    

        {
          name : 'Number',
          selector: (row, index) => index + 1,
          sortable:true
        },
        {
          name : 'Blog Title',
          selector:row => row.title,
          sortable:true
        },
        {
          name : 'Blog Owner',
          selector:row => row.users,
          sortable:true
        },
        {
            name : 'Owner',
            selector: row => <img src={row.userimg} alt="" className='w-[50%]' />,
            sortable:true
          }
  
    ]
  
  
    return (
        <>

           <div className='mb-5'>
            <h1 className='text-3xl font-bold text-center my-5'>Top Blogs</h1>
            <hr />
           </div>
        <div className='max-w-[1200px] my-20 mx-auto'>
        
        <DataTable
            
            columns={columns}
            data={blog}
            
            >

        
            </DataTable>
        </div>
        </>
    );
};

export default Featuredblog;