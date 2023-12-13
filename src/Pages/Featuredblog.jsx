import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import loading from '../assets/loading.json'
import Lottie from 'lottie-react';

const Featuredblog = () => {

    const {data,isLoading} = useQuery({

        queryKey: ["table"],
        queryFn: async () => {
    
            const data = await fetch('https://blogsph-server.vercel.app/allblogs',{credentials:'include'})
            return await data?.json()
        }
     })






     const[blog,setBlog]=useState([])
    //  const[load ,setLoading] = useState(true)

  
     useEffect(() => {
    
        const descriptionsWithWordLengths = data?.map(item => ({
          ...item,
          wordCount: item.long_description?.split(' ').length
        }));

        const sortedDescriptions = descriptionsWithWordLengths?.sort((a, b) => b.wordCount - a.wordCount);
    
   
        const top10Descriptions = sortedDescriptions?.slice(0, 10);
        // setLoading(false)
        setBlog(top10Descriptions);
      }, [data]);
    
     console.log(data)

     if(isLoading){
      return <div data-aos="zoom-out" className=''>

      <Lottie animationData={loading}></Lottie>
      </div>
     }
    
     const columns  =[
    
  
        {

          
          name : 'Number',
          selector : (row, index)  => index + 1,
          sortable:true
          
        },
        {
          name : 'Blog Title',
          selector:row => row?.title,
          sortable:true
        },
        {
          name : 'Blog Owner',
          selector:row => row?.owner,
          sortable:true
        },
        {
            name : 'Owner',
            selector: row => <img src={row?.userimg} alt="" className='w-[50%]' />,
            sortable:true
          }
  
    ]
  
  
    return (
        <>

           <div className='mb-5'>
            <h1 className='text-3xl font-bold text-center my-5'>T O P B L O G S</h1>
            <hr />
           </div>
        <div className=' lg:w-[1000px] my-20 mx-auto'>
        
        <DataTable className=''
       
            columns={columns}
            data={blog}
            
            >
   
        
            </DataTable>
        </div>
        </>
    );
};

export default Featuredblog;