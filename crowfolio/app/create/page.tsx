"use client"
import { useState } from "react";
import React from "react";
import Router from "next/router";

export default function NewPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            const body = { title, content };
            await fetch('http://localhost:3000/api/post', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            await Router.push('http://localhost:3000');
        } catch (error) {
            console.error(error);
        }
    };
    return(
        <div>
            <h2>New Post</h2>
            <form method="POST" action={`http://localhost:3000/api/post`} onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    placeholder="Title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    placeholder="Content"
                    cols={50}
                    rows={10}
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <a className="back" href="#" onClick={() => Router.push('/')}>
                    or Cancel
                </a>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}