import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PageRoute from "./PageRoute";
import axios from 'axios'
import Modal from "./Modal"
import { useForm } from "react-hook-form";

const Pages = ({ allData }) => {

  const { register, handleSubmit } = useForm();

  const [isWho, setWho] = useState('')
  const [put, setPut] = useState('')

  const [postOrPut, setPostOrPut] = useState('post')

  const [open, setOpen] = useState(false)

  const URL = "https://timewarpnew.onrender.com/api/";
  const { page } = useParams();
  const currentURL = page.split(" ")[1].toLowerCase();
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}/${currentURL}`);
        const data = await response.json();
        setResult((prev) => {
          return data.data ? data.data : data.videos;
        });
      } catch (e) {
        console.error(e);
      }
      setIsLoading(false);
    };
    fetchData();

    axios.get('https://timewarpnew.onrender.com/api/videos/details').then((res) => {
      console.log(res);
    })
  }, [page]);


  const onSubmitMusics = async (data) => {
    const formData = new FormData();

    formData.append('title', data.title)
    formData.append('author', data.author)
    formData.append('file', data.file[0])

    if(postOrPut == 'put') {
      await axios.put('https://timewarpnew.onrender.com/api/musics', formData).then((res) => {
      setWho('')
    })} else {
      await axios.post('https://timewarpnew.onrender.com/api/musics', formData).then((res) => {
        setWho('')
      })
    }
  };

  const onSubmitLevels = async (data) => {
    const formData = new FormData();

    formData.append('id', data.id)
    formData.append('title', data.title)
    formData.append('status', data.status)

    console.log(formData);

    if(postOrPut == 'put') {
      await axios.put('https://timewarpnew.onrender.com/api/levels', formData).then((res) => {
      setWho('')
    })} else {
      await axios.post('https://timewarpnew.onrender.com/api/levels', formData).then((res) => {
        setWho('')
      })
    }
  };

  const onSubmitVideos = async (data) => {
    const formData = new FormData();

    formData.append('id', data.id)
    formData.append('title', data.title)
    formData.append('status', data.status)

    const body = {
      id: data.id,
      title: data.title,
      status: data.status
    }

    console.log(body);

    if(postOrPut == 'put') {
      await axios.put('https://timewarpnew.onrender.com/api/videos', body).then((res) => {
      setWho('')
    })} else {
      await axios.post('https://timewarpnew.onrender.com/api/videos', formData).then((res) => {
        setWho('')
      })
    }
  };

  async function select(value) {
    const res = await axios.get('https://timewarpnew.onrender.com/api/' + currentURL + '/' + value).then((res) => {
      setResult(res.data.data)
    })
  }

  async function deleteItem(id) {
    await axios.delete('https://timewarpnew.onrender.com/api/' + currentURL + '/' + id)
  }

  async function putItem() {
    setWho(currentURL.slice(0, currentURL.length - 1))
    setPostOrPut('put')
  }

  return (
    <div className="home">
      {isWho == "music" ? <Modal isOpen={setWho}>
        <form onSubmit={handleSubmit(onSubmitMusics)} className="flex justify-center items-center gap-4 flex-col">
          <p className="text-xl">{postOrPut}</p>
          <div className="flex justify-center items-center gap-2 flex-col">
            <input {...register("title")} name="title" className="py-2 px-6 border rounded-md" type="text" placeholder="Enter title..." />
            <input {...register("author")} name="author" className="py-2 px-6 border rounded-md" type="text" placeholder="Enter author..." />
            <label htmlFor="img" className="hover:bg-slate-300 w-full border border-slate-400 rounded-md py-3 px-4">Выбрать музыку</label>
            <input id="img" {...register("file")} name="file" className="hidden py-2 px-6 border rounded-md" type="file" placeholder="Select file..." /> 
          </div>
          <input className="py-2 px-6 border rounded-md bg-cyan-900 text-slate-200 cursor-pointer" type="submit"/>
        </form>
      </Modal> : ''}
      {isWho == "level" ? <Modal isOpen={setWho}>
        <form onSubmit={handleSubmit(onSubmitLevels)} className="flex justify-center items-center gap-4 flex-col">
          <p className="text-xl">{postOrPut}</p>
          <div className="flex justify-center items-center gap-2 flex-col">
            <input {...register("id")} name="id" className="py-2 px-6 border rounded-md" type="text" placeholder="Enter id..." />
            <input {...register("title")} name="title" className="py-2 px-6 border rounded-md" type="text" placeholder="Enter title..." />
          </div>

          <select className="outline-none py-2 px-4 rounded" {...register("status")} name="status" id="status">
            <option className="py-2 px-4" value="active">active</option>
            <option className="py-2 px-4" value="blocked">blocked</option>
          </select>
          
          <input className="py-2 px-6 border rounded-md bg-cyan-900 text-slate-200 cursor-pointer" type="submit"/>
        </form>
      </Modal> : ''}
      {isWho == "video" ? <Modal isOpen={setWho}>
        <form onSubmit={handleSubmit(onSubmitVideos)} className="flex justify-center items-center gap-4 flex-col">
          <p className="text-xl">{postOrPut}</p>
          <div className="flex justify-center items-center gap-2 flex-col">
            <input {...register("id")} name="id" className="py-2 px-6 border rounded-md" type="text" placeholder="Enter id..." />
            <input {...register("title")} name="title" className="py-2 px-6 border rounded-md" type="text" placeholder="Enter title..." />
          </div>

          <select className="outline-none py-2 px-4 rounded" {...register("status")} name="status" id="status">
            <option className="py-2 px-4" value="active">active</option>
            <option className="py-2 px-4" value="blocked">blocked</option>
          </select>

          <input className="py-2 px-6 border rounded-md bg-cyan-900 text-slate-200 cursor-pointer" type="submit"/>
        </form>
      </Modal> : ''}
      <Navbar />
      <div className="home__content">
        <Sidebar data={allData} />
        <div className="home__main">
          <PageRoute current={currentURL} />
          <div className="mainContent">
            <div className="header">
              <div className="flex justify-center items-center gap-8">
                <span>
                  {result.length} {currentURL}
                </span>
                {isWho == "videos" ? <select onChange={(e) => select(e.target.value)} className="rounded-md py-2 px-4 border" name="filter" id="filter">
                  <option value="">All</option>
                  <option value="active">Active</option>
                  <option value="blocked">Blocked</option>
                  <option value="details">Details</option>
                </select> : ''}
              </div>
              <div className="cursor-pointer bg-cyan-900 py-2 px-4 text-slate-200 rounded" onClick={() => {
                  setWho(currentURL.slice(0, currentURL.length - 1))
                  setPostOrPut('post')
                }}>
                Add {currentURL.slice(0, currentURL.length - 1)}
              </div>
            </div>
            <div className="content">
              <span className="title">Name</span>
              {isLoading ? (
                <div className="loader">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                result.map((item, i) => {
                  console.log(item._id);
                  return (
                    <div className="item" key={item + i}>
                      <a href={item.url}>{item.title || item}</a>
                      <div>
                        <button onClick={() => putItem()} type="button">Put</button>
                        <button onClick={() => deleteItem(item.id || item._id || item)} type="button">Delete</button>
                        <a href={item.url} target="_blank" type="button">View</a>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
