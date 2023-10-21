import React from 'react';

const SingleBlogPage = ({params}) => {
    console.log(params.id)
    return (
        <div>
           <h3>SingleBlogPage: {params.id}</h3> 
        </div>
    );
};

export default SingleBlogPage;