const ImageGallery = () => {
    return <div className="grid md:grid-col-3 justify-center gap-4 mt-10">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <p>Upload by:</p>
                <span>Created on</span>
            </div>
        </div>
    </div>;
};

export default ImageGallery;