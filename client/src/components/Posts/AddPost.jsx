import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { postContext } from "../../context/PostContext";

const AddPost = () => {

  const {addPost} = useContext(postContext);

  const [inpName, setInpName] = useState('')
  const [inpEmail, setInpEmail] = useState('')
  const [inpContent, setInpContent] = useState('')
  function handleClick() {
    let newPost = {
      name: inpName,
      email: inpEmail,
      content: inpContent,
    };
    alert('Your appeal recorded')
    addPost(newPost);
    setInpName('');
    setInpEmail('');
    setInpContent('');
  }
  return (
    <div className="postContainer">
      <div className="featuresContainer">
        <div className="featuresBlock">
          <p className="featureNumber">01.</p>
          <p className="featureTitle">Experience</p>
          <p className="featureDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            assumenda?
          </p>
        </div>
        <div className="featuresBlock">
          <p className="featureNumber">02.</p>
          <p className="featureTitle">Confidentiality</p>
          <p className="featureDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            assumenda?
          </p>
        </div>
        <div className="featuresBlock">
          <p className="featureNumber">03.</p>
          <p className="featureTitle">Integrity</p>
          <p className="featureDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            assumenda?
          </p>
        </div>
        <div className="featuresBlock">
          <p className="featureNumber">04.</p>
          <p className="featureTitle">Fast results</p>
          <p className="featureDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            assumenda?
          </p>
        </div>
      </div>
      <div className="textBlock">
        <div className="textContainer">
          <TextField
            value={inpName}
            className="textField"
            required
            id="outlined-required"
            label="Enter your name"
            onChange={e=>setInpName(e.target.value)}
          />
          <TextField
            value={inpEmail}
            className="textField"
            required
            id="outlined-required"
            label="Enter your email"
            onChange={e=>setInpEmail(e.target.value)}
          />
        </div>
        <TextField
            value={inpContent}
          className="textField"
          required
          id="outlined-multiline-static"
          label="Shortly describe your problem"
          multiline
          rows={4}
          onChange={e=>setInpContent(e.target.value)}
        />
        <button onClick={handleClick} type="submit" className='sendButton'>Send</button>
      </div>
    </div>
  );
};

export default AddPost;
