import React from 'react';
import Image from 'react-bootstrap/Image';

export default function ProjectPostList({ posts }) {
    return (
        <div class="row g-3">
            {posts.map(post => (
            <div class="col-xs-12 col-md-6 col-lg-4">
                <div class="card shadow-sm" style={{ height: 600 }}>
                    <Image src={(post.image)} style={{ width: "100%", height: 250, maxHeight: 250, overflow: "hidden", objectFit: "cover" }} />
                    <div class="card-body">
                        <h3> {post.title}</h3>
                        <p class="card-text">{post.description}</p>
                        <div class="row d-flex justify-content-between align-items-center" style={{ position: "absolute", bottom: 20, justifyContent: 'center' }}>
                            <div class="btn-group col-md-6">
                                <a class="btn btn-sm btn-outline-secondary" href={post.repo}>Repo</a>
                                <a class="btn btn-sm btn-outline-secondary" href={post.report}>Report</a>
                            </div>
                            <div class="col-md-5">
                                <small class="text-muted">Published on {post.date}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}
