import axios from "axios";
import React, { useState } from "react";

function Create() {
  const [name, setName] = useState(``);
  const [text, setText] = useState(``);
  const [avatar, setAvatar] = useState(``);
  const [thumbnil, setThumbnil] = useState(``);

  const handleKirim = async (e) => {
    let newData = {
      name: name,
      text: text,
      avatar: avatar.substring(15),
      thumbnil: thumbnil.substring(12),
    };
    console.log(`ok`);
    try {
      let response = await axios.post(`http://localhost:8000/youtube`, newData);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }

    e.preventDefault();
  };

  return (
    <div className="flex px-4 py-4 justify-center">
      <form onSubmit={handleKirim} className="flex flex-col space-y-3">
        <label className="mr-2">Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          type="text"
        />
        <span className="text-xs text-gray-400 italic"> {name}</span>
        <label className="mr-2">Text: </label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          type="text"
        />
        <span className="text-xs text-gray-400 italic"> {text}</span>
        <label className="mr-2">Avatar</label>
        <input
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          className="file:bg-violet-100 text-gray-400 file:mr-4 file:cursor-pointer hover:file:bg-violet-200 file:border-none file:text-violet-600 file:px-4 file:py-2 file:rounded-full file:font-medium file:text-[15px]1"
          type="file"
        />
        <span className="text-xs text-gray-400 italic"> {avatar}</span>
        <label className="mr-2">Thumnail</label>
        <input
          value={thumbnil}
          onChange={(e) => setThumbnil(e.target.value)}
          className=" file:bg-violet-100 text-gray-400 file:mr-4 file:cursor-pointer hover:file:bg-violet-200 file:border-none file:text-violet-600 file:px-4 file:py-2 file:rounded-full file:font-medium file:text-[15px]"
          type="file"
        />
        <span className="text-xs text-gray-400 italic"> {thumbnil}</span>
        <button className="px-8  py-3 rounded bg-blue-500 shadow-xl shadow-blue-700/40 font-medium text-white text-base hover:bg-blue-600">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Create;
