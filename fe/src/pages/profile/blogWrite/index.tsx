import React, {useState} from 'react'
import { useAddBlogs } from "@/hooks/useAddBlog";
import Image from 'next/image';
import axios from 'axios';

const BlogWrite = () => {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescripton] = useState("");
  const { createBlog, setNewBlog}  = useAddBlogs();
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): Promise<void> => {
    const file = event.target.files && event.target.files[0];
    if (file) {

      const formdata = new FormData()
      formdata.append("file", file)

      const uploadedFile = await axios.post("http://localhost:8000/upload",formdata )
      const fi = uploadedFile?.data?.file

      if(fi){
        setSelectedFiles([...selectedFiles, fi])
      }
    
    }
  };

  const handleDelete = (index: number) => {
    let newArr = [...selectedFiles];
    newArr.splice(index, 1);
    setSelectedFiles(newArr);
  };

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event: any) => {
    setDescripton(event.target.value);
  };

  const onSaveBlog = ()=> {
    const filePaths = selectedFiles.map((f:any)=>  f.path)

    console.log(filePaths)
    const createdBlog = {title, description, imgList: filePaths}
    const clearFields = ()=>{
      setTitle("");
      setDescripton("");
      setSelectedFiles([]);
    }

    createBlog(createdBlog, clearFields)
  }
  const imgList=selectedFiles
  return (
    <div>
    <div className='bg-white container  rounded-xl mx-auto my-10 p-14'>
      <div className='grid grid-cols-2'>
        <div className='col-span-1'>
      <div className=" grid grid-cols-2">
        <h1 className="text-black text-lg font-medium">Add Images</h1>
      </div>
      <div className='grid grid-cols-12 gap-3 p-3'>
        
        {selectedFiles.map((file:any, index:number) => (
                <div key={index} className='w-full h-40 col-span-3 bg-green-300 flex flex-col'>
                  <div key={index} className=" w-full h-4/5 relative ">
                    <Image
                      src={file.path}
                      alt={file.originalname}
                      // width={200}
                      // height={200}
                      fill
                      className="w-full h-full items-center mt-3"
                    />
                  </div>
                  <div className=' flex justify-between w-full h-1/5 bottom-0 bg-blue-300'>
                    <span>{file?.originalname}</span>
                    <button
                      className="ml-2 text-red-500"
                      onClick={() => handleDelete(index)}
                    >
                    <Image
                      width="20"
                      height="20"
                      src="https://img.icons8.com/windows/32/trash.png"
                      alt="trash"
                    />
                    </button>
                  </div>
                </div>
              ))}
        
      <div className="border-dashed  border-2 col-span-3  border-orange-400 w-full h-40 flex justify-center items-center mt-2 rounded-lg">
        <span className="text-orange-400">
          <svg
            className="w-8 h-8 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="mt-2">Upload Image</span>
        </span>
        <input
          type="file"
          className="opacity-0 w-40 h-40 absolute"
          onChange={(e) => handleFileChange(e, selectedFiles.length)}
        />
      </div>
      </div>
      <div>

      </div>
      </div>
      <div className='col-span-1 px-10'>
      <label className="mb-2 text-sm font-medium text-gray-900">Title</label>
       <input  value={title} className="mt-4 mb-5 p-2.5 w-full text-sm bg-gray-50 text-gray-900 border-2  border-orange-400 outline-none" placeholder="Title" onChange={handleTitleChange}></input>

      <label className="mt-14 text-sm font-medium text-gray-900 ">Description</label>
       <textarea value={description}  className=" mt-4 p-2.5 w-full text-sm text-gray-900  bg-gray-50 border-2 border-orange-400 outline-none" placeholder="Description..." onChange={handleDescriptionChange}></textarea>
      </div>

      </div>
      <div className='text-end'>
      <button className='bg-orange-200 w-40 h-8 rounded-xl 'onClick={()=>onSaveBlog()}> Post</button>
      </div>

    </div>
    <div >


    </div>
    </div>
  );
}

export default BlogWrite